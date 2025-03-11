import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeSwitch";
import {usePathname} from "next/navigation";

interface NavbarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();

  const menuItems = [
    {label: "Home", path: "/"},
    {label: "About", path: "/about"},
    {label: "Projects", path: "/projects"},
  ];

  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <nav className="flex items-center space-x-1 sm:space-x-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`
                inline-flex items-center px-3 py-2
                text-sm font-medium
                rounded-lg
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-lime-700 text-white dark:bg-lime-300 dark:text-black"
                    : "text-gray-700 hover:bg-lime-700/10 dark:text-gray-300 dark:hover:bg-lime-300/10"
                }
                focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50
              `}
              tabIndex={0}
              role="button"
              aria-label={`Navigate to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-l border-gray-300 dark:border-gray-700 h-6 mx-1"></div>

      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
