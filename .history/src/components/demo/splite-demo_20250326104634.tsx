"use client";

import { useState } from "react";
import { 
  Splite, 
  SpliteHeader, 
  SpliteTabsList, 
  SpliteTabsTrigger, 
  SpliteContent, 
  SpliteCopyButton 
} from "@/components/ui/splite";
import { HeartIcon, PackageIcon } from "lucide-react";

export default function SpliteDemo() {
  const commands = [
    {
      label: "npm",
      icon: HeartIcon,
      code: "npm install @shadcn/ui",
    },
    {
      label: "pnpm",
      icon: PackageIcon,
      code: "pnpm add @shadcn/ui",
    },
    {
      label: "yarn",
      icon: PackageIcon,
      code: "yarn add @shadcn/ui",
    },
  ];

  const [value, setValue] = useState(commands[0].label);

  return (
    <Splite 
      value={value} 
      onValueChange={setValue} 
      commands={commands}
      className="w-full max-w-md"
    >
      <SpliteHeader>
        <SpliteTabsList>
          {commands.map((command) => (
            <SpliteTabsTrigger key={command.label} value={command.label}>
              {command.icon && <command.icon size={14} />}
              <span>{command.label}</span>
            </SpliteTabsTrigger>
          ))}
        </SpliteTabsList>
        <SpliteCopyButton />
      </SpliteHeader>
      
      {commands.map((command) => (
        <SpliteContent key={command.label} value={command.label}>
          {command.code}
        </SpliteContent>
      ))}
    </Splite>
  );
} 