import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Check for stored preference
    const storedTheme = localStorage.getItem("theme");
    const userPreference =
      storedTheme === "dark" || (storedTheme === null && prefersDark);

    setIsDarkMode(userPreference);

    if (userPreference) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
