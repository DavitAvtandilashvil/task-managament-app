import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Board from "./pages/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
