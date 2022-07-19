import logger from "../helper/LogHelper.js";
import express from "express";

export default () => {
  const router = express.Router();

  router
    .post("/session", (req, res, next) => {
      //POST로 전송된 변수값을 추출

      const username = req.body.username;
      const nickname = req.body.nickname;

      // 세션 저장
      req.session.username = username;
      req.session.nickname = nickname;

      // 결과 응답
      const json = { rt: "ok" };
      res.status(200).send(json);
    })

    .get("/session", (req, res, next) => {
      // 저장되어 있는 모든 session값 검색
      for (let key in req.session) {
        const str = "[session] " + "=" + req.session[key];
        logger.debug(str);
      }

      // 세션 데이터를 JSON으로 구성한 후 클라이언트에게 응답으로 전송
      const my_data = {
        username: req.session.username,
        nickname: req.session.nickname,
      };

      res.status(200).send(my_data);
    })

    .delete("/session", async (req, res, next) => {
      let result = "ok";
      let code = 200;

      try {
        await req.session.destroy();
      } catch (e) {
        logger.error(e.message);
        result = e.message;
        code = 500;
      }

      const json = { rt: result };
      res.status(code).send(json);
    });

  // public/05_login.html
  router
    .post("/session/login", (req, res, next) => {
      const id = req.body.userid;
      const pw = req.body.userpw;

      logger.debug("id=" + id);
      logger.debug("pw=" + pw);

      let login_ok = false;
      if (id == "node" && pw == "1234") {
        logger.debug("로그인 성공");
        login_ok = true;
      }

      let result_code = null;
      let result_msg = null;

      if (login_ok) {
        req.session.userid = id;
        req.session.userpw = pw;
        result_code = 200;
        result_msg = "OK";
      } else {
        result_code = 403;
        result_msg = "fail";
      }

      const json = { rt: result_msg };
      res.status(result_code).send(json);
    })

    .delete("/session/login", async (req, res, next) => {
      let result = "ok";
      let code = 200;

      try {
        await req.session.destroy();
      } catch (e) {
        logger.error(e.message);
        result = e.message;
        code = 500;
      }

      const json = { rt: result };
      res.status(code).send(json);
    })

    .get("/session/login", (req, res, next) => {
      const id = req.session.userid;
      const pw = req.session.userpw;

      let result_code = null;
      let result_msg = null;

      if (id !== undefined && pw !== undefined) {
        logger.debug("현재 로그인중이 맞습니다.");
        result_code = 200;
        result_msg = "ok";
      } else {
        logger.debug("현재 로그인중이 아닙니다.");
        result_code = 400;
        result_msg = "fail";
      }

      const json = { rt: result_msg };
      res.status(result_code).send(json);
    });
  return router;
};

// export default () => {
//   const router = express.Router();

//   router
//     .post("/session", (req, res, next) => {
//       //POST로 전송된 변수값을 추출
//       /**
//         WebHelper 적용 전
//
//       //   const username = req.body.username;
//       //   const nickname = req.body.nickname;

//       // WebHelper 적용 후
//       const username = req.post("username");
//       const nickname = req.post("nickname");

//       // 세션 저장
//       req.session.username = username;
//       req.session.nickname = nickname;

//       // 결과 응답
//       /**
//         WebHelper 적용 전
//

//       //   const json = { rt: "ok" };
//       //   res.status(200).send(json);

//       // WebHelper 적용 후
//       res.sendResult();
//     })

//     .get("/session", (req, res, next) => {
//       // 저장되어 있는 모든 session값 검색
//       for (let key in req.session) {
//         const str = "[session] " + "=" + req.session[key];
//         logger.debug(str);
//       }

//       // 세션 데이터를 JSON으로 구성한 후 클라이언트에게 응답으로 전송
//       const my_data = {
//         username: req.session.username,
//         nickname: req.session.nickname,
//       };

//       /**
//         WebHelper 적용 전
//
//       // res.status(200).send(my_data);
//       // WebHelper 적용 후
//       res.sendResult(my_data);
//     })

//     .delete("/session", async (req, res, next) => {
//       // WebHelper 적용 전
//       //   let result = "ok";
//       //   let code = 200;

//       try {
//         await req.session.destroy();
//       } catch (e) {
//         // WebHelper 적용 전
//         // logger.error(e.message);
//         // result = e.message;
//         // code = 500;
//         // WebHelper 적용 후
//         return next(e);
//       }
//       // WebHelper 적용 전
//       //   const json = { rt: result };
//       //   res.status(code).send(json);
//       // WebHelper 적용 후
//       res.sendResult();
//     });

//   // public/05_login.html
//   router
//     .post("/session/login", (req, res, next) => {
//       // WebHelper 적용 전
//       //   const id = req.body.userid;
//       //   const pw = req.body.userpw;

//       // WebHelper 적용 후
//       const id = req.post("userid");
//       const pw = req.post("userpw");

//       logger.debug("id=" + id);
//       logger.debug("pw=" + pw);

//       // WebHelper 적용 전
//       //   let login_ok = false;
//       //   if (id == "node" && pw == "1234") {
//       //     logger.debug("로그인 성공");
//       //     login_ok = true;
//       //   }

//       //   let result_code = null;
//       //   let result_msg = null;

//       //   if (login_ok) {
//       //     req.session.userid = id;
//       //     req.session.userpw = pw;
//       //     result_code = 200;
//       //     result_msg = "OK";
//       //   } else {
//       //     result_code = 403;
//       //     result_msg = "fail";
//       //   }

//       //   const json = { rt: result_msg };
//       //   res.status(result_code).send(json);

//       // WebHelper 적용 후
//       if (id != "node" || pw != "1234") {
//         const error = new BadRequestException(
//           "아이디나 비밀번호를 확인하세요."
//         );
//         return next(error);
//       }

//       req.session.userid = id;
//       req.session.userpw = pw;

//       req.sendResult();
//     })

//     .delete("/session/login", async (req, res, next) => {
//       // WebHelper 적용 전
//       //   let result = "ok";
//       //   let code = 200;

//       //   try {
//       //     await req.session.destroy();
//       //   } catch (e) {
//       //     logger.error(e.message);
//       //     result = e.message;
//       //     code = 500;
//       //   }

//       //   const json = { rt: result };
//       //   res.status(code).send(json);

//       // WebHelper 적용 후
//       try {
//         await req.session.destroy();
//       } catch (e) {
//         return next(e);
//       }

//       res.sendResult();
//     })

//     .get("/session/login", (req, res, next) => {
//       const id = req.session.userid;
//       const pw = req.session.userpw;

//       // WebHelper 적용 전

//       //   let result_code = null;
//       //   let result_msg = null;

//       //   if (id !== undefined && pw !== undefined) {
//       //     logger.debug("현재 로그인중이 맞습니다.");
//       //     result_code = 200;
//       //     result_msg = "ok";
//       //   } else {
//       //     logger.debug("현재 로그인중이 아닙니다.");
//       //     result_code = 400;
//       //     result_msg = "fail";
//       //   }

//       //   const json = { rt: result_msg };
//       //   res.status(result_code).send(json);

//       // WebHelper 적용 후
//       if (id === undefined || pw === undefined) {
//         const error = new BadRequestException("현재 로그인 중이 아닙니다.");
//         return next(error);
//       }
//       res.sendResult();
//     });
//   return router;
// };
