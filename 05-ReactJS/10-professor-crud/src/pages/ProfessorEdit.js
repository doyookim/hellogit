import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinnner";
import Table from "../components/Table";
import regexHelper from "../libs/RegexHelper";
// Table 컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }

    label {
      margin-left: 7px;
      margin-right: 10px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

const ProfessorEdit = () => {
  // Path 파라미터로 전달된 일련번호
  const { id } = useParams();

  /** 저장 완료 후 목록으로 되돌아 가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  const [{ data: department, loading: loading1, error: err1 }] = useAxios(
    "http://localhost:3001/department"
  );

  const [{ data: professor, loading: loading2, error: err2 }, refetch] =
    useAxios(`http://localhost:3001/professor/${id}`);

  /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;
    // 입력받은 값 취득하기
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;
    // 입력값에 대한 유효성 검사

    try {
      regexHelper.value(current.name, "이름을 입력하세요.");
      regexHelper.kor(current.name, "이름은 한글로 입력하세요.");
      regexHelper.minLength(
        current.name,
        2,
        "이름은 최소 2글자 이상 입력해야 합니다."
      );
      regexHelper.maxLength(
        current.name,
        10,
        "이름은 최대 10글자 까지 입력 가능합니다."
      );

      regexHelper.value(current.userid, "아이디를 입력하세요.");
      regexHelper.engNum(
        current.userid,
        "아이디는 영어 또는 영어+숫자 형식으로 입력하세요."
      );
      regexHelper.minLength(
        current.userid,
        2,
        "아이디는 최소 2글자 이상 입력해야 합니다."
      );
      regexHelper.maxLength(
        current.userid,
        20,
        "아이디는 최대 20글자 까지 입력 가능합니다."
      );

      regexHelper.check(current.position, "직급을 선택하세요.");
      regexHelper.value(current.sal, "급여를 입력하세요.");
      regexHelper.num(current.sal, "급여는 숫자만 입력 가능합니다.");
      regexHelper.value(current.hiredate, "입사일을 입력하세요.");
      regexHelper.num(current.comm, "보직수당은 숫자만 입력 가능합니다.");
      regexHelper.value(current.deptno, "소속학과를 입력하세요.");
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }

    let json = null;

    // 입력, 수정, 삭제 처리는 async~await 문법을 사용해야 한다.

    (async () => {
      try {
        const response = await refetch({
          method: "PUT",
          data: {
            name: name,
            userid: userid,
            position: position,
            sal: parseInt(sal),
            hiredate: hiredate,
            comm: parseInt(comm),
            deptno: parseInt(deptno),
          },
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.staus}] ${e.response.stausText}\n${e.message}`
        );
      }

      // 정상적으로 저장되어 응답을 받았다면?
      if (json != null) {
        window.alert("수정되었습니다.");
        // 페이지 강제 이동 (window.location.href=URL기능과 동일함)
        navigate("/");
      }
    })();
  }, []);
  return (
    <>
      <Spinner visible={loading1 || loading2} />
      {err1 || err2 ? (
        <div>
          <h1>Opps~!!! {(err1 || err2).code} Error.</h1>
          <hr />
          <p>{(err1 || err2).message}</p>
        </div>
      ) : (
        // Ajax를 통해 조회한 결과가 존재할 때만 데이터 표시화
        professor && (
          <form onSubmit={onSubmit}>
            <TableEx>
              <colgroup>
                <col width="120" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="text"
                      name="name"
                      defaultValue={professor.name}
                    />
                  </td>
                </tr>
                <tr>
                  <th>아이디 </th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="text"
                      name="userid"
                      defaultValue={professor.userid}
                    />
                  </td>
                </tr>
                <tr>
                  <th>직급</th>
                  <td className="inputWrapper">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="교수"
                        defaultChecked={professor.position === "교수"}
                      />
                      교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="부교수"
                        defaultChecked={professor.position === "부교수"}
                      />
                      부교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="조교수"
                        defaultChecked={professor.position === "조교수"}
                      />
                      조교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="전임강사"
                        defaultChecked={professor.position === "전임강사"}
                      />
                      전임강사
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>급여(만원)</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="sal"
                      placeholder="숫자만 입력"
                      defaultValue={professor.sal}
                    />
                  </td>
                </tr>
                <tr>
                  <th>입사일</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="date"
                      name="hiredate"
                      defaultValue={professor.hiredate}
                    />
                  </td>
                </tr>
                <tr>
                  <th>보직수당(만원)</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="number"
                      name="comm"
                      placeholder="숫자만 입력"
                      defaultValue={professor.comm}
                    />
                  </td>
                </tr>
                <tr>
                  <th>소속학과</th>
                  <td className="inputWrapper">
                    <select
                      name="deptno"
                      className="field"
                      defaultValue={professor.deptno}
                    >
                      <option value="">---- 선택하세요 ----</option>
                      {department &&
                        department.map((v, i) => {
                          return (
                            <option key={i} value={v.id}>
                              {v.dname}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
              </tbody>
            </TableEx>

            <div style={{ textAlign: "center" }}>
              <button type="submit">저장하기</button>
            </div>
          </form>
        )
      )}
    </>
  );
};

export default ProfessorEdit;
