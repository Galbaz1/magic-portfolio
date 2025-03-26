import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col items-start gap-4">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
          Portfolio Showcase
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Showcase your creative work with style
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Present your projects in a beautiful, modern portfolio that highlights
          your skills and accomplishments.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row mt-4">
          <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md text-base" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button className="bg-white hover:bg-gray-100 text-black border border-gray-300 px-6 py-3 rounded-md text-base" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="aspect-square overflow-hidden rounded-lg bg-gray-200"
          >
            <div
              className="h-full w-full bg-gray-200"
              style={{
                backgroundImage: `url(https://source.unsplash.com/random/300x300?portfolio&sig=${id})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
} 