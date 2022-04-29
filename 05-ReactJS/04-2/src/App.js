import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Department from "./pages/Department";
import Professor from "./pages/Professor";
import Student from "./pages/Student";
import "./assets/css/menu.css";
function App() {
  const myStyle = {
    fontWeight: "bold",
    color: "#04AA6D",
    textDecoration: "none",
    marginRight: "10px",
  };
  return (
    <div>
      <h1 style={myStyle}>리액트 컴포넌트 예제</h1>
      <nav>
        <NavLink className="normalLink" to="/department">
          학과목록
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink className="normalLink" to="/professor">
          교수목록
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink className="normalLink" to="/student">
          학생목록
        </NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/department" element={<Department />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
