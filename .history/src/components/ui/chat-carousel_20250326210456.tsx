"use client"

import { useState, FormEvent } from "react"
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "@/components/ui/chat-message-list"

export function ChatCarousel() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi there! How can I help you today?",
      sender: "ai",
    },
    {
      id: 2,
      content: "I'm interested in AI development. Can you tell me more?",
      sender: "user",
    },
    {
      id: 3,
      content: "Sure! I'd be happy to discuss AI development. What specific aspects are you curious about?",
      sender: "ai",
    },
  ])

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "Thank you for your message. I'll get back to you soon with more information.",
          sender: "ai",
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  const handleAttachFile = () => {
    //
  }

  const handleMicrophoneClick = () => {
    //
  }

  return (
    <div className="w-full mx-auto px-4 mb-16 relative z-30">
      <div className="h-[450px] relative">
        <ExpandableChat
          size="lg"
          position="bottom-right"
          icon={<Bot className="h-6 w-6" />}
          className="bg-black/90 text-white border-gray-800"
        >
          <ExpandableChatHeader className="flex-col text-center justify-center bg-black/95 border-gray-800">
            <h1 className="text-xl font-semibold text-white">Chat with AI ✨</h1>
            <p className="text-sm text-gray-400">
              Ask me anything about AI development
            </p>
          </ExpandableChatHeader>

          <ExpandableChatBody className="bg-black/95">
            <ChatMessageList>
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    className="h-8 w-8 shrink-0"
                    src={
                      message.sender === "user"
                        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                        : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                    }
                    fallback={message.sender === "user" ? "US" : "AI"}
                  />
                  <ChatBubbleMessage
                    variant={message.sender === "user" ? "sent" : "received"}
                    className={message.sender === "user" ? "bg-indigo-600" : "bg-gray-800 text-white"}
                  >
                    {message.content}
                  </ChatBubbleMessage>
                </ChatBubble>
              ))}

              {isLoading && (
                <ChatBubble variant="received">
                  <ChatBubbleAvatar
                    className="h-8 w-8 shrink-0"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                    fallback="AI"
                  />
                  <ChatBubbleMessage 
                    isLoading 
                    className="bg-gray-800"
                  />
                </ChatBubble>
              )}
            </ChatMessageList>
          </ExpandableChatBody>

          <ExpandableChatFooter className="bg-black/95 border-gray-800">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-lg border border-gray-800 bg-gray-900 focus-within:ring-1 focus-within:ring-indigo-500 p-1"
            >
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-h-12 resize-none rounded-lg bg-transparent border-0 p-3 shadow-none focus-visible:ring-0 text-white placeholder:text-gray-500"
              />
              <div className="flex items-center p-3 pt-0 justify-between">
                <div className="flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    onClick={handleAttachFile}
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <Paperclip className="size-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    onClick={handleMicrophoneClick}
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <Mic className="size-4" />
                  </Button>
                </div>
                <Button 
                  type="submit" 
                  size="sm" 
                  className="ml-auto gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Send
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </ExpandableChatFooter>
        </ExpandableChat>
      </div>
    </div>
  )
} 