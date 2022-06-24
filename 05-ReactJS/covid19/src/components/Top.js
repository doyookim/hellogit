import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import MenuLink from "./MenuLink";

import { getCovid19 } from "../slices/Covid19Slice";

const Top = memo(() => {
  const dispatch = useDispatch();

  // 검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [date_gte, setDate_gte] = React.useState();
  const [date_lte, setDate_lte] = React.useState();
  React.useEffect(() => {
    dispatch(getCovid19({ date: date_gte }));
  }, [dispatch, date_gte]);
  React.useEffect(() => {
    dispatch(getCovid19({ date: date_lte }));
  }, [dispatch, date_lte]);
  // 드롭다운의 선택이 변경된 경우의 이벤트
  const onDateChange = useCallback((e) => {
    e.preventDefault();
    // 선택값으로 상태값을 갱신한다 --> React.useEffect()에 의해 액션함수가 디스패치 된다.
    setDate_gte(e.target.value);
    setDate_lte(e.target.value);
  }, []);

  return (
    <div>
      <h1>Covid19 현황</h1>
      <form onSubmit="onDateChange">
        <input type="date" placeholder="날짜선택" value={setDate_gte} />
        ~
        <input type="date" placeholder="날짜선택" value={setDate_lte} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
});

export default Top;
