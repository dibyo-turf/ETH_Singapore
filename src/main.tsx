import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Root from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);
