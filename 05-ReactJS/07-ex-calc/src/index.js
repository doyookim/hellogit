import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Meta from "./Meta";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Meta />
    <App />
  </React.StrictMode>
);
