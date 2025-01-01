"use client";

import {useState, useEffect, useRef} from "react";
import {sendMessage} from "@/app/services/chatService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Button} from "./Button";
import {Newsreader} from "next/font/google";

const newsreader = Newsreader({subsets: ["latin"]});

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatProps {
  showChat?: boolean;
}

export default function Chat({showChat = false}: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    if (showChat) {
      setShowAnimation(true);
    }
  }, [showChat]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {id: Date.now(), text: input, sender: "user"};
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
                  ? "bg-[#1F6B36] text-white" //2C2C2E
                  : "bg-[#D0EBB9] text-gray-800"
              }`}
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
          />
          <Button type="submit" variant="primary" size="md">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
