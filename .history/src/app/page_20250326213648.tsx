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
import { ChatComponent } from "@/components";

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
      
      {/* Chat Component */}
      <ChatComponent />
      
      <div className="mt-24">
        <Projects range={[2]} />
        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </div>
    </Column>
  );
}
