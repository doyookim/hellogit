import React from "react";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <h1>연습문제 12</h1>
      <hr />
      <h2>Redux News Viewer</h2>
      <hr />
      <News />
    </div>
  );
};

export default React.memo(App);
