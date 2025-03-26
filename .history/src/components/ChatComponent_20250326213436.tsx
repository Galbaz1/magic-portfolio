"use client";

import React from "react";
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input";

export function ChatComponent() {
  const [message, setMessage] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState<{text: string, isUser: boolean}[]>([]);
  
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
    <>
      {/* Chat Messages Display */}
      <div className="w-full max-w-2xl mx-auto mt-8 space-y-4">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-lg ${msg.isUser ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200 dark:bg-gray-800'} max-w-[80%]`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      {/* Chat Input Component */}
      <div className="w-full max-w-2xl mx-auto mt-4 mb-8">
        <ChatInput 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onSubmit={handleSendMessage}
          className="border-gray-300 dark:border-gray-700"
        >
          <ChatInputTextArea placeholder="Type a message..." />
          <ChatInputSubmit />
        </ChatInput>
      </div>
    </>
  );
} 