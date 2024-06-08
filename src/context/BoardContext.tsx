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
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  whichModalIsOpen: string;
  setWhichModalIsOpen: React.Dispatch<React.SetStateAction<string>>;
  clickedBoard: IContent;
  setClickedBoard: React.Dispatch<React.SetStateAction<IContent>>;
}

const defaultClickedBoard: IContent = {
  title: "",
  description: "",
  status: "",
  subtasks: [],
};

const defaultValues: BoardContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
  boards: data.boards,
  setBoards: () => {},
  choosenBoardCategory: "Platform Launch",
  setChoosenBoardCategory: () => {},
  isBoardModalOpen: false,
  setIsBoardModalOpen: () => {},
  isEditModalOpen: false,
  setIsEditModalOpen: () => {},
  whichModalIsOpen: "",
  setWhichModalIsOpen: () => {},
  clickedBoard: defaultClickedBoard,
  setClickedBoard: () => {},
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [whichModalIsOpen, setWhichModalIsOpen] = useState("");
  const [clickedBoard, setClickedBoard] =
    useState<IContent>(defaultClickedBoard);

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
        isEditModalOpen,
        setIsEditModalOpen,
        whichModalIsOpen,
        setWhichModalIsOpen,
        clickedBoard,
        setClickedBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContextProvider, BoardContext };
