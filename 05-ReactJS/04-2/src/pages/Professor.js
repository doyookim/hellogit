import React from "react";
import myschool from "../myschool";
import ProfessorItem from "../components/ProfessorItem";
import myStyle from "../assets/css/myschool.module.css";
const Professor = () => {
  const { professor } = myschool;

  return (
    <div>
      <table className={myStyle.tableCss}>
        <thead>
          <tr>
            <th className="th">교수번호</th>
            <th className="th">교수이름</th>
            <th className="th">아이디</th>
            <th className="th">직급</th>
            <th className="th">급여</th>
            <th className="th">입사일</th>
            <th className="th">보직수당</th>
            <th className="th">소속학과번호</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((v, i) => {
            return (
              <ProfessorItem
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                position={v.position}
                sal={v.sal}
                hiredate={v.hiredate}
                comm={v.comm}
                deptno={v.deptno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Professor;
