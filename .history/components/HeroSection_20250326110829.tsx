import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start gap-4">
          <Badge variant="outline">
            Portfolio Showcase
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Showcase your creative work with style
          </h1>
          <p className="text-xl text-gray-600">
            Present your projects in a beautiful, modern portfolio that highlights
            your skills and accomplishments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
                className="h-full w-full"
                style={{
                  backgroundImage: `url(https://source.unsplash.com/random/300x300?portfolio&sig=${id})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 