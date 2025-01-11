import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);

    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={handleToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-lg hover:scale-110 active:scale-95 transition-all duration-200 
                hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-blue-500"
    >
      <Sun
        className={`w-5 h-5 transition-all duration-300 transform text-yellow-500
                   ${
                     isDarkMode ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                   }`}
        aria-hidden="true"
      />
      <Moon
        className={`w-5 h-5 transition-all duration-300 transform absolute top-2 text-blue-300
                   ${
                     isDarkMode
                       ? "rotate-0 opacity-100"
                       : "-rotate-90 opacity-0"
                   }`}
        aria-hidden="true"
      />
    </button>
  );
};

export default DarkModeToggle;
