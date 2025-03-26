"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  FileUp,
  Figma,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
} from "lucide-react";

// Custom hook for auto-resizing textarea
interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      // Temporarily shrink to get the right scrollHeight
      textarea.style.height = `${minHeight}px`;

      // Calculate new height
      const newHeight = Math.max(
        minHeight,
        Math.min(
          textarea.scrollHeight,
          maxHeight ?? Number.POSITIVE_INFINITY
        )
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    // Set initial height
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  // Adjust height on window resize
  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

export function ChatComponent() {
  const [message, setMessage] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState<{text: string, isUser: boolean}[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, {text: message, isUser: true}]);
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: `Thanks for your message: "${message}"`,
          isUser: false
        }]);
      }, 1000);
      setMessage("");
      adjustHeight(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto space-y-4 bg-zinc-900 text-white">
      <h1 className="text-[56px] font-bold text-center text-white">
        What can I help you ship?
      </h1>

      {chatMessages.length > 0 && (
        <div className="w-full space-y-3">
          <AnimatePresence>
            {chatMessages.map((msg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={cn(
                    "p-3 text-sm rounded-lg max-w-[90%]",
                    msg.isUser 
                      ? "bg-zinc-800 text-white" 
                      : "bg-zinc-800 text-white border border-zinc-700"
                  )}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="w-full">
        <div className="relative rounded-xl bg-zinc-800 border border-zinc-700">
          <div className="overflow-y-auto">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask v0 a question..."
              className={cn(
                "w-full px-4 py-[18px]",
                "resize-none",
                "bg-transparent",
                "border-none",
                "text-[15px]",
                "text-white",
                "placeholder:text-zinc-400",
                "focus:outline-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "overflow-hidden"
              )}
            />
          </div>

          <div className="flex items-center justify-between px-3 py-2 border-t border-zinc-700">
            <button
              type="button"
              className="group p-1.5 rounded-lg transition-colors text-zinc-400 hover:bg-zinc-700"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg text-sm transition-colors border border-dashed flex items-center gap-2 text-zinc-400 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
              >
                <PlusIcon className="w-4 h-4" />
                <span>Project</span>
              </button>
              <button
                type="button"
                onClick={handleSendMessage}
                className={cn(
                  "p-1.5 rounded-lg transition-colors flex items-center justify-center",
                  message.trim()
                    ? "bg-white hover:bg-zinc-200"
                    : "bg-zinc-700 hover:bg-zinc-600"
                )}
              >
                <ArrowUpIcon
                  className={cn(
                    "w-5 h-5",
                    message.trim()
                      ? "text-black"
                      : "text-zinc-400"
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <ActionButton
            icon={<ImageIcon className="w-4 h-4" />}
            label="Clone a Screenshot"
          />
          <ActionButton
            icon={<Figma className="w-4 h-4" />}
            label="Import from Figma"
          />
          <ActionButton
            icon={<FileUp className="w-4 h-4" />}
            label="Upload a Project"
          />
          <ActionButton
            icon={<MonitorIcon className="w-4 h-4" />}
            label="Landing Page"
          />
          <ActionButton
            icon={<CircleUserRound className="w-4 h-4" />}
            label="Sign Up Form"
          />
        </div>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors bg-zinc-800 text-zinc-400 border border-zinc-700 hover:bg-zinc-700 hover:text-white hover:border-zinc-600"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
} 