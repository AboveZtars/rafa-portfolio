"use client";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Newsreader} from "next/font/google";
import Link from "next/link";

const newsreader = Newsreader({subsets: ["latin"]});

export default function Header() {
  return (
    <header className="bg-transparent transition-colors duration-1000 py-4 sticky top-0 z-50 backdrop-blur-sm bg-whitesand/80 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <Link
            href="/"
            className="flex items-center"
            tabIndex={0}
            aria-label="Go to homepage"
          >
            <h1
              className={`text-lime-700 dark:text-lime-300 ${newsreader.className} text-3xl sm:text-4xl`}
            >
              Rafael Molina
            </h1>
          </Link>
        </div>

        <div className="mt-4 sm:mt-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
