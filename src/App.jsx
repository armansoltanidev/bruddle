import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import AppLayout from "@/pages/AppLayout";
import NotFound from "@/pages/NotFound";

import Dashboard from "@/features/Dashboard/Dashboard";
import Tasks from "@/features/Tasks/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
