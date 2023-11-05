import Logo from "@/ui/Logo";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="bg-black w-72 text-white px-6 py-8 flex flex-col gap-1">
      <Logo />
      <div className="mt-10">
        <p className="px-2 text-xs font-semibold text-stone-500">Navigation</p>
        <SidebarItem to="dashboard">Dashboard</SidebarItem>
        <SidebarItem>Projects</SidebarItem>
        <SidebarItem to="tasks">Tasks</SidebarItem>
        <SidebarItem>Kanban Desk</SidebarItem>
        <SidebarItem>File Manager</SidebarItem>
        <SidebarItem>Calendar</SidebarItem>
        <SidebarItem>Inbox</SidebarItem>
      </div>

      <div className="mt-10">
        <p className="px-2 text-xs font-semibold text-stone-500">
          Team Members
        </p>
        <SidebarItem>Alexander Pavia</SidebarItem>
        <SidebarItem>Thomas Surgey</SidebarItem>
        <SidebarItem>Jonas Crus</SidebarItem>
      </div>
    </div>
  );
}
