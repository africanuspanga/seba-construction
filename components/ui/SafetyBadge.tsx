"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafetyBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SafetyBadge({ className, size = "md" }: SafetyBadgeProps) {
  const sizes = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className={cn(
        "inline-flex items-center rounded-full font-semibold tracking-wide",
        "bg-safety/10 text-safety border border-safety/20",
        sizes[size],
        className
      )}
    >
      <ShieldCheck size={iconSizes[size]} className="shrink-0" />
      Safety First
    </motion.span>
  );
}
