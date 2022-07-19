import axios from "axios";

const url = "http://itpaper.co.kr/demo/covid19/now.php";

(async () => {
  let json = null;
  try {
    // axios를 활용하여 json 데이터 요청
    const response = await axios.get(url);
    json = response.data;
  } catch (error) {
    const errorMsg =
      "[" + error.response.status + "]" + error.response.statusText;
    console.error(errorMsg);
    return;
  }

  let total = 0;

  json.state.map((v, i) => {
    const confirmed = v.confirmed - v.confirmed_prev;
    console.log("[" + v.region + "] 확진자: " + confirmed);
    total += confirmed;
  });

  console.log("오늘 총 확진자 수: %d", total);
})();
