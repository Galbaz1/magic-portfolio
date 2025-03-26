import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container grid items-center justify-center gap-8 pb-8 pt-12 md:grid-cols-2 md:py-16">
      <div className="flex flex-col items-start gap-4">
        <Badge variant="outline" className="text-sm">
          Portfolio Showcase
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Showcase your creative work with style
        </h1>
        <p className="text-xl text-muted-foreground">
          Present your projects in a beautiful, modern portfolio that highlights
          your skills and accomplishments.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
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
            className="aspect-square overflow-hidden rounded-lg bg-muted"
          >
            <div
              className="h-full w-full bg-muted"
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