import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="mb-2">Design Engineer</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Design engineer and builder
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                I'm Selene, a design engineer at FLY, where I craft intuitive user experiences that bridge the gap between design and development.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <Button size="lg" className="gap-2" variant="outline">
                Contact me <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-2">
                View my work <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-md aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1600699260196-aca47e6d2125?w=500&auto=format&fit=crop&q=60"
                alt="Design work sample 1"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md row-span-2">
              <Image 
                src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=500&auto=format&fit=crop&q=60"
                alt="Design work sample 2"
                width={400}
                height={800}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-md aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&auto=format&fit=crop&q=60"
                alt="Design work sample 3"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 