"use client";

import React, { useRef, useEffect } from "react";
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input";
import { motion, AnimatePresence } from "framer-motion";

export function ChatComponent() {
  const [message, setMessage] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState<{text: string, isUser: boolean}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat
      setChatMessages([...chatMessages, {text: message, isUser: true}]);
      
      // Here you would typically call an API for a response
      // For demo purposes, we'll just echo back after a delay
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: `Thanks for your message: "${message}"`,
          isUser: false
        }]);
      }, 1000);
      
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-8 flex flex-col items-center">
      <h2 className="text-xl mb-4 text-white">Chat</h2>
      
      {/* Messages would be displayed here when there are some */}
      <AnimatePresence>
        <div className="w-full space-y-3 mb-3">
          {chatMessages.map((msg, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`p-2 text-sm rounded-md max-w-[90%] ${
                  msg.isUser 
                    ? 'bg-zinc-800 text-white' 
                    : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </AnimatePresence>
      
      {/* Chat Input Component */}
      <div className="w-full relative flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Type a message..."
          className="w-full bg-zinc-900/60 border border-zinc-800 rounded-md py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-800 p-1.5 rounded-md text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4 20-7Z"/>
            <path d="M22 2 11 13"/>
          </svg>
        </button>
      </div>
    </div>
  );
} 