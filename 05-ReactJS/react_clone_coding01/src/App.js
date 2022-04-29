import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Heaeder from "./components/Heaeder";
import Footer from "./components/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <NavBar />
      <Heaeder />
      <Routes>
        <Route path="/" export={true} element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
