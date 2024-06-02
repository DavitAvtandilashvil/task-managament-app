import { ReactNode, createContext, useState } from "react";
import data from "../../data.json";

interface BoardContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  boards: IBoards[];
  setBoards: React.Dispatch<React.SetStateAction<IBoards[]>>;
  choosenBoardCategory: string;
  setChoosenBoardCategory: React.Dispatch<React.SetStateAction<string>>;
  isBoardModalOpen: boolean;
  setIsBoardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: BoardContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
  boards: data.boards,
  setBoards: () => {},
  choosenBoardCategory: "Platform Launch",
  setChoosenBoardCategory: () => {},
  isBoardModalOpen: false,
  setIsBoardModalOpen: () => {},
};

const BoardContext = createContext<BoardContextType>(defaultValues);

interface BoardContextProviderProps {
  children: ReactNode;
}

function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [boards, setBoards] = useState<IBoards[]>(data.boards);
  const [choosenBoardCategory, setChoosenBoardCategory] =
    useState("Platform Launch");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  console.log(boards);

  return (
    <BoardContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        boards,
        setBoards,
        choosenBoardCategory,
        setChoosenBoardCategory,
        isBoardModalOpen,
        setIsBoardModalOpen,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContextProvider, BoardContext };
