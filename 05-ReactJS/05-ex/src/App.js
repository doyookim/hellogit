import React from "react";
import Header from "./components/Header";
import Content from "./page/Content";
import Footer from "./components/Footer";

function App() {
  const myStyle = {
    fontFamily: "Noto Sans KR",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={myStyle}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
