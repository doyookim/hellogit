# react stylessheet cssmodule 예제 김도유

> 2022-04-26

### 학과목록

![학과목록](04.jpg)

```js
import React from "react";
import myschool from "../myschool";
import DepartmentItem from "../components/DepartmentItem";
import myStyle from "../assets/css/myschool.module.css";
const Department = () => {
  const { department } = myschool;
  return (
    <div>
      <table className={myStyle.tableCss}>
        <thead>
          <tr>
            <th className={[myStyle["my-td"], myStyle["my-th"]].join(" ")}>
              학과번호
            </th>
            <th className={[myStyle["my-td"], myStyle["my-th"]].join(" ")}>
              학과이름
            </th>
            <th className={[myStyle["my-td"], myStyle["my-th"]].join(" ")}>
              위치
            </th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <DepartmentItem key={i} id={v.id} dname={v.dname} loc={v.loc} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Department;
```

### 교수목록

![교수목록](05.jpg)

```js
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
```

### 학생목록

![학생목록](06.jpg)

```js
import React from "react";
import myschool from "../myschool";
import StudentItem from "../components/StudentItem";

import myStyle from "../assets/css/myschool.module.css";
const Student = () => {
  const { student } = myschool;
  return (
    <div>
      <table className={myStyle.tableCss}>
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>아이디</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((v, i) => {
            return (
              <StudentItem
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                grade={v.grade}
                idnum={v.idnum}
                birthdate={v.birthdate}
                tel={v.tel}
                height={v.height}
                weight={v.weight}
                deptno={v.deptno}
                profno={v.profno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
```

### CSS

myschool.module.css

```css
/** table css */
.tableCss {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

/** table tr */
.tableCss tr:nth-child(even) {
  background-color: #f2f2f2;
}

.tableCss tr:hover {
  background-color: #ddd;
}
/* 학생목록 변수로 접근 */
.tableCss th {
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}

/* 교수목록 th 독립 클래스 적용 */
:global .th {
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}

/** 학과목록 th의 경우 .my-td, .my-th 다중 클래스 적용 */

.my-td {
  border: 1px solid #ddd;
  padding: 8px;
}

.my-th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
```
