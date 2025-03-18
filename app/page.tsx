"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useRef} from "react";
import {Newsreader} from "next/font/google";
import VariableFontAndCursor from "@/components/VariableFont";
import Link from "next/link";

const newsreader = Newsreader({subsets: ["latin"]});
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-whitesand/80 dark:bg-slate-900/80 transition-colors duration-1000">
      <Header />
      <main className="flex-grow flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <div
          className={`w-full max-w-6xl mx-auto rounded-lg items-center justify-center ${newsreader.className} py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative overflow-hidden`}
          ref={containerRef}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.05),transparent_70%)]"></div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
              <span className="text-gray-800 dark:text-gray-100">
                {"Building the backbone of "}
              </span>
              <VariableFontAndCursor
                label="innovation."
                className="text-lime-700 dark:text-lime-300 inline-block"
                fontVariationMapping={{
                  y: {name: "wght", min: 100, max: 900},
                  x: {name: "slnt", min: 0, max: -10},
                }}
                containerRef={containerRef}
              />
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-12">
              Backend developer passionate about creating strong, reliable, and
              effective solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-lime-700 hover:bg-lime-600 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                tabIndex={0}
                aria-label="Learn more about Rafael"
              >
                Learn More
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 bg-transparent border-2 border-lime-700 dark:border-lime-300 text-lime-700 dark:text-lime-300 hover:bg-lime-700/10 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                tabIndex={0}
                aria-label="View projects"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
