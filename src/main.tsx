import React from "react";
import ReactDOM from "react-dom/client";
import { BoardContextProvider } from "./context/BoardContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BoardContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BoardContextProvider>
);
