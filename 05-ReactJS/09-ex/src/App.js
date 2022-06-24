import React from "react";
import styled from "styled-components";
import Spinner from "./components/Spinner";
import Table from "./components/Table";
import useAxios from "axios-hooks";
import useMountedRef from "./hooks/useMountedRef";

const SeleectContainer = styled.div`
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

const App = () => {
  const URL = "http://localhost:3001/traffic_acc";
  const [{ data, loading, error }, refetch] = useAxios(URL);

  const [state, setState] = React.useState({ year: "" });
  const mountedRef = useMountedRef();
  /** 드롭다운 선택 변경시 호출되는 이벤트 */
  const onSelecetChange = React.useCallback(
    (e) => {
      e.preventDefault();

      // 드롭다운의 입력값 취득
      const current = e.target;
      const key = current.name;
      const value = current[current.selectedIndex].value;
      // 기존의 상태값을 그대로 복사한 상태에서
      // 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
      const newState = { ...state, [key]: value };

      // 상태값 갱신
      setState(newState);

      // 갱신되 상태값 확인
      console.log(newState);

      // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
    },
    [state]
  );

  /** state 상태값이 변경되었을 때 실행될 hook */
  React.useEffect(() => {
    // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
    if (mountedRef.current) {
      // 상태값 중에서 빈 값이 아닌 항목들을 옮겨담는다.
      const params = {};
      for (const key in state) {
        if (state[key]) {
          params[key] = state[key];
        }
      }

      // Ajax 재용청
      refetch({
        params: params,
      });
    }
    // hook함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
  }, [mountedRef, refetch, state]);
  /** 에러가 발생했다면 에러 메시지를 표시한다. */
  if (error) {
    console.error(error);

    // 컴포넌트 자체가 함수이고, 함수가 실행도중 리턴을 하므로
    // 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다.
    return (
      <div>
        <h1>Opps~!!! {error.code} Error.</h1>
        <hr />
        <p>{error.message}</p>
      </div>
    );
  }

  let accidentSum = 0;
  let deathSum = 0;
  let injurySum = 0;

  return (
    <div>
      <Spinner visible={loading} />
      <h1>Exam10</h1>
      <hr />
      <SeleectContainer>
        <select name="year" onChange={onSelecetChange}>
          <option value="">--선택--</option>

          <option value="2005">2005년</option>
          <option value="2006">2006년</option>
          <option value="2007">2007년</option>
          <option value="2008">2008년</option>
          <option value="2009">2009년</option>
          <option value="2010">2010년</option>
          <option value="2011">2011년</option>
          <option value="2012">2012년</option>
          <option value="2013">2013년</option>
          <option value="2014">2014년</option>
          <option value="2015">2015년</option>
        </select>
      </SeleectContainer>

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
              accidentSum += accident;
              deathSum += death;
              injurySum += injury;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{year}년</td>
                  <td>{month}월</td>
                  <td>{accident.toLocaleString()}건</td>
                  <td>{death.toLocaleString()}명</td>
                  <td>{injury.toLocaleString()}명</td>
                </tr>
              );
            })}
          <tr>
            <th colSpan="3">합계</th>
            <th>{accidentSum.toLocaleString()}건</th>
            <th>{deathSum.toLocaleString()}명</th>
            <th>{injurySum.toLocaleString()}명</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default React.memo(App);
