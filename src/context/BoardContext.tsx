import { ReactNode, createContext, useState } from "react";

interface BoardContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: BoardContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

const BoardContext = createContext<BoardContextType>(defaultValues);

interface BoardContextProviderProps {
  children: ReactNode;
}

function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BoardContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContextProvider, BoardContext };
