import React from "react";
import {Button} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {mainTheme} from "@/lib/theme";

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
      className={`transition-all duration-1000 ease-in-out content-center w-fit space-x-4 ${
        isAnimated ? "opacity-1000 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      <ThemeProvider theme={mainTheme}>
        {menuItems.map((item) => (
          <Button
            color="secondary"
            key={item.label}
            href={item.path}
            sx={{backgroundColor: "#426B1F", borderRadius: "8px"}}
          >
            {item.label}
          </Button>
        ))}
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
