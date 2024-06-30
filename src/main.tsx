import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import App1 from "./App1.tsx";
import "./index.css";

let AppToDisplay = App;

if (import.meta.env.VITE_APP_NAME === "APP_1") {
  AppToDisplay = App1;
} ekse 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppToDisplay />
  </React.StrictMode>
);
