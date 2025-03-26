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
    <div className="w-full max-w-2xl mx-auto my-12 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-zinc-800/50">
      <div className="p-4 border-b border-zinc-800/50">
        <h3 className="text-lg font-medium text-zinc-100">Chat</h3>
      </div>
      
      {/* Chat Messages Display */}
      <div className="w-full p-6 space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        <AnimatePresence>
          {chatMessages.map((msg, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`p-3 rounded-2xl max-w-[80%] ${
                  msg.isUser 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-sm' 
                    : 'bg-zinc-800 text-zinc-100 rounded-tl-sm border border-zinc-700/50'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat Input Component */}
      <div className="p-4 bg-zinc-900/50">
        <ChatInput 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onSubmit={handleSendMessage}
          variant="default"
          className="border-zinc-700/50 bg-zinc-800/30 focus-within:ring-indigo-500/30 rounded-xl backdrop-blur-sm"
        >
          <ChatInputTextArea 
            placeholder="Type a message..." 
            className="bg-transparent text-zinc-100 placeholder-zinc-500 min-h-[40px]"
          />
          <ChatInputSubmit className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-md shadow-indigo-600/20" />
        </ChatInput>
      </div>
    </div>
  );
} 