"use client";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import {useState, useEffect} from "react";
import VariableFontAndCursor from "@/components/VariableFont";
import {useRef} from "react";
import {Newsreader} from "next/font/google";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Float from "@/components/Float";

const newsreader = Newsreader({subsets: ["latin"]});
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [isHeaderAnimated, setIsHeaderAnimated] = useState(false);

  setTimeout(() => {
    setShowChatBubble(true);
  }, 5000);
  useEffect(() => {
    if (showChat) setShowInstructions(true);
  }, [showChat]);

  const handleClick = () => {
    setFadeOut(true);
    setIsHeaderAnimated(true);
    localStorage.setItem("isHeaderAnimated", "true");
    setShowChatBubble(false);
    setTimeout(() => {
      setShowChat(true);
    }, 1000); // Match this duration with the CSS transition duration
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header showAnimation={isHeaderAnimated} />
      <main className="flex-grow flex items-center justify-center flex w-full">
        {showChat ? (
          <div className="flex flex-col items-center justify-center w-3/4">
            <p
              className={`text-lime-700 text-3xl w-fit mb-20 transition-opacity duration-1000 ease-in-out ${
                newsreader.className
              } ${showInstructions ? "opacity-100" : "opacity-0"}`}
            >
              Write a question about Rafael
            </p>
            <Chat showChat={showChat} />
          </div>
        ) : (
          <div
            className={`overflow-visible w-full h-full rounded-lg items-center justify-center ${newsreader.className} p-24 relative overflow-hidden`}
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
            <div
              className={`flex justify-end absolute bottom-0 right-1/4 transition-opacity duration-1000 ${
                showChatBubble ? "opacity-100" : "opacity-0"
              }`}
            >
              <Float amplitude={[10, 7, 10]} speed={0.3}>
                <div className="relative" onClick={handleClick}>
                  <ChatBubbleIcon
                    className="text-lime-600"
                    sx={{fontSize: 100}}
                  />
                  <span className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                    Click Here!
                  </span>
                </div>
              </Float>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
