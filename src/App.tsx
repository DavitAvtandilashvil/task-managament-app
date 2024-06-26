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
    txtOpacity: "rgba(0, 1, 18, 0.5)",
  },

  secondary: {
    bgColor:
      "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)",
    txtColor: "#828FA3",
  },

  button: {
    bgColor: "rgba(99, 95, 199, 0.10)",
  },

  hover: {
    primary: {
      bgColor: "rgba(99, 95, 199, 0.1)",
    },
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
    txtOpacity: "rgba(255, 255, 255, 0.5)",
  },

  secondary: {
    bgColor:
      "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)",
    txtColor: "#FFFFFF",
  },

  button: {
    bgColor: "#fff",
  },

  hover: {
    primary: {
      bgColor: "#FFFFFF",
    },
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
