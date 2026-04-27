"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/10 text-secondary">
        {subtitle}
      </span>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-20 rounded-full",
          centered && "mx-auto",
          light ? "bg-secondary" : "bg-primary"
        )}
      />
    </motion.div>
  );
}
