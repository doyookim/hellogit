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
