"use client";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import {useState} from "react";
import {Newsreader} from "next/font/google";
import VariableFontAndCursor from "@/components/VariableFont";
import {useRef} from "react";

const newsreader = Newsreader({subsets: ["latin"]});
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowChat(true);
    }, 1000); // Match this duration with the CSS transition duration
  };

  return (
    <div className="flex flex-col min-h-screen" onClick={handleClick}>
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        {showChat ? (
          <Chat showChat={showChat} />
        ) : (
          <div
            className={`w-full h-full rounded-lg items-center justify-center ${newsreader.className} p-24 relative overflow-hidden`}
            ref={containerRef}
          >
            <div
              className={`w-full h-full items-center justify-center flex transition-opacity duration-1000 ease-in-out ${
                newsreader.className
              }  ${fadeOut ? "opacity-0" : "opacity-100"}`}
            >
              <span className="text-5xl">{"Building the backbone of "}</span>
              <VariableFontAndCursor
                label=" innovation."
                className="text-5xl sm:text-7xl md:text-5xl text-lime-700 px-4"
                fontVariationMapping={{
                  y: {name: "wght", min: 100, max: 900},
                  x: {name: "slnt", min: 0, max: -10},
                }}
                containerRef={containerRef}
              />
            </div>
          </div>

          // <div
          //   className={`text-center text-5xl text-lime-700 transition-opacity duration-1000 ease-in-out ${
          //     newsreader.className
          //   }  ${fadeOut ? "opacity-0" : "opacity-100"}`}
          // >
          //   Building the backbone of innovation, one line of code at a time.
          // </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
