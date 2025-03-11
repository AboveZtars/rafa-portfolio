"use client";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import {useState, useEffect} from "react";
import VariableFontAndCursor from "@/components/VariableFont";
import {useRef} from "react";
import {Newsreader} from "next/font/google";
import Float from "@/components/Float";
import {MessageSquare} from "lucide-react";
import Link from "next/link";

const newsreader = Newsreader({subsets: ["latin"]});
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);

  useEffect(() => {
    // Show chat bubble after 5 seconds
    const timer = setTimeout(() => {
      setShowChatBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showChat) setShowInstructions(true);
  }, [showChat]);

  const handleClick = () => {
    setShowChatBubble(false);
    setTimeout(() => {
      setShowChat(true);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-whitesand/80 dark:bg-slate-900/80  transition-colors duration-1000">
      <Header />
      <main className="flex-grow flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        {showChat ? (
          <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
            <p
              className={`text-lime-700 dark:text-lime-300 text-3xl w-fit mb-10 transition-all duration-1000 ease-in-out ${
                newsreader.className
              } ${showInstructions ? "opacity-100" : "opacity-0"}`}
            >
              Write a question about Rafael
            </p>
            <Chat showChat={showChat} />
          </div>
        ) : (
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
                Front-end developer specializing in creating beautiful,
                responsive, and accessible web experiences.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className="px-6 py-3 bg-lime-700 hover:bg-lime-600 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                  onClick={handleClick}
                  tabIndex={0}
                  aria-label="Learn more about Rafael"
                  onKeyDown={(e) => e.key === "Enter" && handleClick()}
                >
                  Learn More
                </button>
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

            <div
              className={`absolute bottom-8 right-8 sm:bottom-12 sm:right-12 transition-all duration-300 ${
                showChatBubble
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Float amplitude={[5, 5, 5]} speed={0.2}>
                <button
                  className="group relative flex items-center justify-center w-16 h-16 bg-lime-600 hover:bg-lime-500 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50"
                  onClick={handleClick}
                  tabIndex={0}
                  aria-label="Chat with Rafael"
                  onKeyDown={(e) => e.key === "Enter" && handleClick()}
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="absolute -top-10 right-0 bg-white dark:bg-slate-700 text-lime-700 dark:text-lime-300 px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                    Chat with me!
                  </span>
                </button>
              </Float>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
