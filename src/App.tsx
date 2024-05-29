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
  },

  body: {
    bgColor: "#F4F7FD",
  },
};

const darkMode = {
  primary: {
    bgColor: "#2B2C37",
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
