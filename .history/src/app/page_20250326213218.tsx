import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ParticleAnimation } from "@/components/hero/ParticleAnimation";
import { GradientText } from "@/components/hero/GradientText";
import { GlowButton } from "@/components/hero/GlowButton";
import { motion } from "framer-motion";
import { ModernHero } from "@/components/hero/ModernHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
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
    <Column maxWidth="m" gap="0" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      
      <ModernHero 
        title="Nice to Meet You"
        subtitle="I am Fausto, AI Engineer at Step Into Liquid and Community Lead of the AI Builders Club Amsterdam."
      />
      
      <CaseStudyCard />
      
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
      
      <div className="mt-24">
        <Projects range={[2]} />
        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </div>
    </Column>
  );
}
