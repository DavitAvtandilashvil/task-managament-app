import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BoardContextProvider } from "./context/BoardContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BoardContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BoardContextProvider>
);
