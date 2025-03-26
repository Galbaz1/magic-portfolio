import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Magic Portfolio",
  description: "Showcase your creative work with style",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
} 