import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Board from "./pages/Board";
import { GlobalStyles } from "./Globals";
import { ThemeProvider } from "styled-components";
import { useBoard } from "./context/useBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
]);

const lightMode = {
  primary: {
    bgColor: "#fff",
    txtColor: "#000112",
    border: "#E4EBFA",
  },

  body: {
    bgColor: "#F4F7FD",
  },
};

const darkMode = {
  primary: {
    bgColor: "#2B2C37",
    txtColor: "#FFFFFF",
    border: "#3E3F4E",
  },

  body: {
    bgColor: "#20212C",
  },
};

export default function App() {
  const { isDarkMode } = useBoard();

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
