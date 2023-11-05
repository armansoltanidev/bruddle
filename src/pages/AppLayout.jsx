import Sidebar from "@/features/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="bg-cream-primary">
        <Outlet />
      </div>
    </div>
  );
}
