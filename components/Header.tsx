"use client";

import Link from "next/link";
import {Newsreader} from "next/font/google";
import {useState, useEffect} from "react";
import {buttonCss} from "@/lib/utils";

const newsreader = Newsreader({subsets: ["latin"]});
export default function Header() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(false);
    const handleClick = () => {
      setIsAnimated((prev) => !prev);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="bg-white shadow-md">
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
              className={`transition-all duration-1000 ease-in-out text-lime-700 w-fit ${
                newsreader.className
              } ${isAnimated ? "text-5xl" : "text-7xl"}`}
            >
              Rafael Molina
            </h1>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <nav
            className={`transition-all duration-1000 ease-in-out content-center w-fit ${
              isAnimated
                ? "opacity-1000 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <ul className="flex space-x-4 justify-between">
              <li className="w-24 h-10 flex items-center justify-center">
                <Link className={buttonCss} href="/">
                  Home
                </Link>
              </li>
              <li className="w-24 h-10 flex items-center justify-center">
                <Link className={buttonCss} href="/about">
                  About
                </Link>
              </li>
              <li className="w-24 h-10 flex items-center justify-center">
                <Link className={buttonCss} href="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
