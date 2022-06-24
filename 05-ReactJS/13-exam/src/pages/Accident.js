import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getAccidentList } from "../slices/AccidentSlice";

// 로딩바 컴포넌트
import Spinner from "../components/Spinner";
// 테이블 CSS적용을 위한 컴포넌트
import Table from "../components/Table";
// 에러정보를 표시하기 위한 컴포넌트
import ErrorView from "../components/ErrorView";

/** 드롭다운을 배치하기 위한 박스 */
const SelectContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  select {
    margin-right: 15px;
    font-size: 16px;
    padding: 5px 10px;
  }
`;

const Accident = memo(() => {
  const dispatch = useDispatch();
  // Redux Store로부터 Ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.accident);

  // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
  const [targetDt, setTargetDt] = React.useState("");

  React.useEffect(() => {
    if (targetDt > 0) {
      dispatch(getAccidentList(targetDt));
    } else {
      dispatch(getAccidentList());
    }
  }, [dispatch, targetDt]);

  // 드롭다운의 선택이 변경된 경우의 이벤트
  const onSelectChange = React.useCallback((e) => {
    e.preventDefault();
    setTargetDt(e.target.value);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <SelectContainer>
        <select name="year" onChange={onSelectChange}>
          <option value="">-- 년도 선택 --</option>
          {[...new Array(2018 - 2005 + 1)].map((v, i) => {
            return (
              <option key={i} value={2005 + i}>
                {2005 + i}년도
              </option>
            );
          })}
        </select>
      </SelectContainer>
      {error ? (
        <ErrorView error={error} />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>년도</th>
              <th>월</th>
              <th>교통사고 건수</th>
              <th>사망자 수</th>
              <th>부상자 수</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, year, month, accident, death, injury }, i) => {
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{year}년</td>
                    <td>{month}월</td>
                    <td>{accident.toLocaleString()}건</td>
                    <td>{death.toLocaleString()}명</td>
                    <td>{injury.toLocaleString()}명</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <th colSpan="3">합계</th>
            <th>
              {data &&
                data
                  .map((v, i) => v.accident)
                  .reduce((p, c) => p + c, 0)
                  .toLocaleString()}
              건
            </th>
            <th>
              {data
                .map((v, i) => v.death)
                .reduce((p, c) => p + c, 0)
                .toLocaleString()}
              명
            </th>
            <th>
              {data
                .map((v, i) => v.injury)
                .reduce((p, c) => p + c, 0)
                .toLocaleString()}
              명
            </th>
          </tfoot>
        </Table>
      )}
    </div>
  );
});

export default React.memo(Accident);
