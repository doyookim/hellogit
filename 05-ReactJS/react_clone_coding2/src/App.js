import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer";

import Main from "./pages/Main.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" export={true} element={<Main />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
