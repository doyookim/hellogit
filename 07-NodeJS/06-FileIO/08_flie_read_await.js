/** (1) 모듈참조 */
import fs from "fs";

/** (2) 필요한 변수 생성 */
var target = "./output_await.txt"; // 읽어드릴 파일의 경로

/** (3) 비동기 파일 읽기 */
if (fs.existsSync(target)) {
  (async () => {
    let data = null;

    try {
      data = await fs.promises.readFile(target, "utf8");
    } catch (err) {
      console.error(err);
      console.error("파일읽기 실패");
    }

    console.debug(data);
  })();

  console.log(target + "파일을 읽도록 요청했습니다.");
} else {
  console.log(target + "파일이 존재하지 않습니다.");
}
