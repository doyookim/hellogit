import logger from "../helper/LogHelper.js";
import express from "express";
import regexHelper from "../helper/RegexHelper.js";

export default () => {
  const router = express.Router();

  router.post("/send_mail", async (req, res, next) => {
    /** 1) 프론트엔드에서 전달한 사용자 입력값 */
    const writer_name = req.post("writer_name");
    let writer_email = req.post("writer_email");
    const receiver_name = req.post("receiver_name");
    let receiver_email = req.post("receiver_email");
    const subject = req.post("subject");
    const content = req.post("content");

    /** 2) 입력값에 대한 유효성 검사 */

    try {
      regexHelper.value(writer_email, "발신자 메일주소를 입력하세요.");
      regexHelper.email(writer_email, "발신자 메일주소가 잘못되었습니다.");

      regexHelper.value(receiver_email, "수신자 메일주소를 입력하세요.");
      regexHelper.email(receiver_email, "수신자 메일주소가 잘못되었습니다.");

      regexHelper.value(subject, "메일 제목을 입력하세요.");
      regexHelper.value(content, "본문 내용을 입력하세요.");
    } catch (e) {
      return next(e);
    }

    /** 3) 보내는 사람, 받는 사람의 메일주소와 이름 */
    // 보내는 사람의 이름과 주소
    // --> 외부 SMTP연동시 주의 사항 - 발신주소가 로그인 계정과 다를 경우 발송이 거부됨
    if (writer_name) {
      writer_email = writer_name + "<" + writer_email + ">";
    }

    // 받는 사람의 이름과 주소
    if (receiver_name) {
      receiver_email = receiver_name + "<" + receiver_email + ">";
    }

    /** 4) 메일 발송정보 구성 */
    const send_info = {
      from: writer_email,
      to: receiver_email,
      subject: subject,
      html: content,
    };

    /** 5) 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
    const smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    /** 5) 메일발송 요청 */

    try {
      await smtp.sendMail(send_info);
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });
  return router;
};
