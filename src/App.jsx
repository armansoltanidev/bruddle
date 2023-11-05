import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import AppLayout from "@/pages/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <AppLayout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
