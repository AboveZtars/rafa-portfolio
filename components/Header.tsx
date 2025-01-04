"use client";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Newsreader} from "next/font/google";
const newsreader = Newsreader({subsets: ["latin"]});

export default function Header({
  showAnimation = true,
}: {
  showAnimation?: boolean;
}) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (showAnimation) {
      setIsAnimated(true);
    }
  }, [showAnimation]);

  return (
    <header className="bg-white">
      <div className={`container mx-auto flex justify-between`}>
        <div
          className={`transition-all duration-1000 ease-in-out w-full ${
            isAnimated ? "translate-x-0" : "translate-x-1/2"
          }`}
        >
          <div
            className={`transition-all duration-1000 flex justify-center ${
              isAnimated ? "-translate-x-1/4" : ""
            }`}
          >
            <h1
              className={`transition-all duration-1000 ease-in-out text-lime-700 w-fit pt-2 ${
                newsreader.className
              } ${isAnimated ? "text-5xl" : "text-7xl"}`}
            >
              Rafael Molina
            </h1>
          </div>
        </div>

        <div className={`flex justify-end w-full `}>
          <Navbar isAnimated={isAnimated} />
        </div>
      </div>
    </header>
  );
}
