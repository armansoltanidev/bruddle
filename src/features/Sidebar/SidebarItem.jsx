import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function SidebarItem({ children, to }) {
  return (
    <NavLink
      to={to}
      className="cursor-pointer rounded-sm duration-300 delay-75 transition-colors hover:bg-poor-black px-3 py-2 flex items-center font-semibold text-sm tracking-wide"
    >
      {children}
    </NavLink>
  );
}
