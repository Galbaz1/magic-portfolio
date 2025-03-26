"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpliteContextType {
  value: string;
  onValueChange: (value: string) => void;
  commands: Command[];
}

interface Command {
  label: string;
  code: string;
  icon?: React.ElementType;
}

const SpliteContext = createContext<SpliteContextType | undefined>(undefined);

export function useSplite() {
  const context = useContext(SpliteContext);
  if (!context) {
    throw new Error("useSplite must be used within a SpliteProvider");
  }
  return context;
}

interface SpliteProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
  commands: Command[];
}

export function Splite({
  children,
  className,
  value,
  onValueChange,
  commands,
}: SpliteProps) {
  return (
    <SpliteContext.Provider value={{ value, onValueChange, commands }}>
      <div
        className={cn(
          "group overflow-hidden rounded-md border border-border bg-background shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </SpliteContext.Provider>
  );
}

export function SpliteHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between border-b border-border bg-secondary/50 p-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SpliteTabsList({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md bg-secondary p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function SpliteTabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { value: selectedValue, onValueChange } = useSplite();
  const isActive = selectedValue === value;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:bg-secondary/80",
        className
      )}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SpliteContent({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: selectedValue } = useSplite();
  const isActive = selectedValue === value;

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn("overflow-hidden", className)}
          {...props}
        >
          <pre className="p-4 text-sm">{children}</pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface SpliteCopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  timeout?: number;
}

export function SpliteCopyButton({
  className,
  timeout = 2000,
  ...props
}: SpliteCopyButtonProps) {
  const { value, commands } = useSplite();
  const [isCopied, setIsCopied] = useState(false);
  
  const activeCommand = commands.find((command) => command.label === value);
  const codeValue = activeCommand?.code || "";

  const copyToClipboard = () => {
    if (typeof navigator === "undefined" || !codeValue) {
      return;
    }

    navigator.clipboard.writeText(codeValue).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copyToClipboard}
      className={cn(
        "h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100",
        className
      )}
      {...props}
    >
      {isCopied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
    </Button>
  );
} 