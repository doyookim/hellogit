import React from "react";
import myschool from "../myschool";
import DepartmentItem from "../components/DepartmentItem";

const Department = () => {
  const { department } = myschool;
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
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
