"use client";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import {useState} from "react";
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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
            className={`text-center text-2xl transition-opacity duration-1000 ease-in-out ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            Click me!
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
