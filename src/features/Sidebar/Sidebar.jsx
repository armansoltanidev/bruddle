import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="bg-black w-72 text-white px-2 py-2 flex flex-col gap-1">
      <p className="px-2 text-xs font-semibold text-stone-500">Navigation</p>
      <SidebarItem>Dashboard</SidebarItem>
      <SidebarItem>Projects</SidebarItem>
      <SidebarItem>Tasks</SidebarItem>
      <SidebarItem>Kanban Desk</SidebarItem>
      <SidebarItem>File Manager</SidebarItem>
      <SidebarItem>Calendar</SidebarItem>
      <SidebarItem>Inbox</SidebarItem>
    </div>
  );
}
