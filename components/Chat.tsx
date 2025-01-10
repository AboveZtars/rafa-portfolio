"use client";

import {useState, useEffect, useRef} from "react";
import {sendMessage} from "@/app/services/chatService";
import {useBackendStatus} from "@/app/services/statusService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Button} from "./Button";
import {chatCTA} from "@/app/data/about";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  animate?: boolean;
}

interface ChatProps {
  showChat?: boolean;
}

export default function Chat({showChat = false}: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const isBackendAvailable = useBackendStatus();
  const [hasShownCTA, setHasShownCTA] = useState(false);

  useEffect(() => {
    if (showChat) {
      setShowAnimation(true);
    }
  }, [showChat]);

  useEffect(() => {
    if (isBackendAvailable && !hasShownCTA) {
      const timer = setTimeout(() => {
        const ctaMessage: Message = {
          id: Date.now(),
          text: chatCTA,
          sender: "bot",
          animate: false,
        };
        setMessages([ctaMessage]);
        setHasShownCTA(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isBackendAvailable, hasShownCTA]);

  useEffect(() => {
    if (messages.length > 0) {
      if (messages.every((message) => message.animate)) return;
      setMessages((prevMessages) =>
        prevMessages.map((message) => ({...message, animate: true}))
      );
    }
  }, [messages]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      animate: false,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await sendMessage(input);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl bg-whitesand rounded-lg shadow-lg overflow-hidden transition-opacity duration-1000 ease-in-out ${
        showAnimation ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#1F6B36] text-white"
                  : "bg-[#D0EBB9] text-gray-800"
              } ${message.animate ? "animate-fade-in-down" : ""}`}
            >
              <Markdown remarkPlugins={[remarkGfm]}>{message.text}</Markdown>
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            disabled={!isBackendAvailable}
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={!isBackendAvailable}
          >
            {isBackendAvailable ? "Send" : "Backend Unavailable"}
          </Button>
        </div>
      </form>
    </div>
  );
}
