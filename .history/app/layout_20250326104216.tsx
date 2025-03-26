import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpliteDemo from "@/components/demo/splite-demo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SpliteDemo />
          {children}
        </main>
      </body>
    </html>
  );
} 