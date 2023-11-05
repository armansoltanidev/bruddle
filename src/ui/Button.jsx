/* eslint-disable react/prop-types */
import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";

const baseStyle = tv({
  base: "px-3 py-1 text-xs font-bold rounded-sm",

  variants: {
    color: {
      purple:
        "bg-purple-primary border border-black hover:bg-purple-primary/80",
      black: "bg-black text-white border border-black",
      ghost: "bg-transparent border border-black",
      outline:
        "bg-transparent border border-black hover:bg-black hover:text-white",
    },

    transition: {
      color: "transition-colors duration-300 delay-150 ease-out",
    },

    size: {
      sm: "px-3 py-1",
      md: "px-5 py-2",
      lg: "px-7 py-3 text-base",
    },

    shadow: {
      lg: "shadow-lg",
    },
  },

  defaultVariants: {
    color: "purple",
    transition: "color",
    size: "md",
  },
});

export default function Button({
  children,
  className,
  color,
  transition,
  size,
  shadow,
  to,
}) {
  return (
    <Link
      to={to}
      className={baseStyle({
        class: className,
        color,
        transition,
        size,
        shadow,
      })}
    >
      {children}
    </Link>
  );
}
