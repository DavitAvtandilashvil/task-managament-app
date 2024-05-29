import { useContext } from "react";
import { BoardContext } from "./BoardContext";

function useBoard() {
  const context = useContext(BoardContext);
  if (!context) throw new Error("Context was used outside the context box");
  return context;
}

export { useBoard };
