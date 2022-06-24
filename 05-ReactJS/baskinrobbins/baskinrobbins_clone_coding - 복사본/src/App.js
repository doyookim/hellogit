import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Articles from "./pages/Articles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" export={true} element={<Articles />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
