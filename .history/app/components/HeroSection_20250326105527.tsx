import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 