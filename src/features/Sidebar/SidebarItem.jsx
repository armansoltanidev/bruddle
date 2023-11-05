/* eslint-disable react/prop-types */
export default function SidebarItem({ children }) {
  return (
    <div className="cursor-pointer rounded-sm duration-300 delay-75 transition-colors hover:bg-poor-black px-2 py-2 flex items-center">
      <p className="font-semibold text-sm tracking-wide">{children}</p>
    </div>
  );
}
