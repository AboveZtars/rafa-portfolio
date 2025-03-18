import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";

// Utility function to get initial theme
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialTheme());

  useEffect(() => {
    // Apply theme immediately on mount
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      tabIndex={0}
      className="relative p-2 rounded-lg transition-all duration-300 
                bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
      onKeyDown={(e) => e.key === "Enter" && handleToggle()}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`w-5 h-5 absolute inset-0 transition-all duration-300 transform 
                     text-lime-700 dark:text-lime-300
                     ${
                       isDarkMode
                         ? "scale-0 rotate-90 opacity-0"
                         : "scale-100 rotate-0 opacity-100"
                     }`}
          aria-hidden="true"
        />
        <Moon
          className={`w-5 h-5 absolute inset-0 transition-all duration-300 transform 
                     text-lime-700 dark:text-lime-300
                     ${
                       isDarkMode
                         ? "scale-100 rotate-0 opacity-100"
                         : "scale-0 -rotate-90 opacity-0"
                     }`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
