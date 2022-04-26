import React from "react";
import PropTypes from "prop-types";

const DepartmentItem = ({ id, dname, loc }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{dname}</td>
      <td>{loc}</td>
    </tr>
  );
};

DepartmentItem.propTypes = {
  id: PropTypes.number.isRequired,
  dname: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
};

DepartmentItem.defaultProps = {
  id: 0,
  dname: "없음",
  loc: "없음",
};

export default DepartmentItem;
