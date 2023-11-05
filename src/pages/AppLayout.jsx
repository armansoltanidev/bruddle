import Sidebar from "@/features/Sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div className="bg-slate-500 h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="bg-cream-primary">App Content</div>
    </div>
  );
}
