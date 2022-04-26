import React from "react";
import { useParams } from "react-router-dom";
const Weather = () => {


  // const weatherList = {
  //   item: [
  //     { day: "mon", am: "맑음", pm: "맑음" },
  //     { day: "tue", am: "비", pm: "맑음" },
  //     { day: "wed", am: "맑음", pm: "흐림" },
  //     { day: "thu", am: "맑음", pm: "흐림" },
  //     { day: "fri", am: "흐림", pm: "흐림" },
  //     { day: "sat", am: "비", pm: "맑음" },
  //     { day: "sun", am: "맑음", pm: "맑음" },
  //   ],
  // };

  // const day = params.day;

  // let weatherItem = null;

  // weatherList.item.some((item, index) => {
  //   if (item.day === day) {
  //     weatherItem = item;
  //     return true;
  //   }
  //   return false;
  // });

  // // 조회 결과가 없는 경우
  // if (!weatherItem) {
  //   return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
  // }

  const weather = {
    mon: ["맑음", "맑음"],
    tue: ["비", "맑음"],
    wed: ["맑음", "흐림"],
    thu: ["맑음", "흐림"],
    fri: ["흐림", "흐림"],
    sat: ["비", "맑음"],
    sun: ["맑음", "맑음"],
  };
  // 파라미터 추출 -> ex) {day: "mon"}
  const params = useParams();
  // 요일값만 추출
  const { day } = params;
  // 추출한 요일값을 key로 사용하여 weather에서 해당 요일에 해당하는 날씨를 비구조 문법으로추출;
  const [am, pm] = weather[day];

  return (
    <div>
      <h2>오전</h2>
      <p>{am}</p>
      <h2>오후</h2>
      <p>{pm}</p>
    </div>
  );
};

export default Weather;
