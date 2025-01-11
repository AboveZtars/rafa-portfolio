import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeSwitch";

interface NavbarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isAnimated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({isAnimated = false}) => {
  const menuItems = [
    {label: "Home", path: "/"},
    {label: "About", path: "/about"},
    {label: "Projects", path: "/projects"},
  ];

  return (
    <div
      className={`flex items-center transition-all duration-1000 ease-in-out w-fit space-x-4 ${
        isAnimated ? "opacity-1000 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          className={`
            inline-flex items-center px-4 py-2
            text-sm font-medium
            rounded-lg
            text-white
            transition-colors
            duration-1000
            bg-lime-700
            hover:bg-lime-600
            dark:bg-lime-300
            dark:hover:bg-lime-400
            dark:text-black
            `}
          tabIndex={0}
          role="button"
          aria-label={`Navigate to ${item.label}`}
        >
          {item.label}
        </Link>
      ))}
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
