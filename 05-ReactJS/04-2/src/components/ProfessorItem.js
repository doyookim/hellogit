import React from "react";
import PropTypes from "prop-types";

const ProfessorItem = ({
  id,
  name,
  userid,
  position,
  sal,
  hiredate,
  comm,
  deptno,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{userid}</td>
      <td>{position}</td>
      <td>{sal}</td>
      <td>{hiredate.substring(0, 10)}</td>
      <td>{comm}</td>
      <td>{deptno}</td>
    </tr>
  );
};

ProfessorItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  userid: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  sal: PropTypes.number.isRequired,
  comm: PropTypes.number,
  deptno: PropTypes.number,
};

ProfessorItem.defaultProps = {
  comm: 0,
};

export default ProfessorItem;
