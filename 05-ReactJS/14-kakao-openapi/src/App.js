import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import KaKaoSearch from "./pages/KaKaoSearch";

const App = memo(() => {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/:api" element={<KaKaoSearch />} />
      </Routes>
    </div>
  );
});

export default App;
