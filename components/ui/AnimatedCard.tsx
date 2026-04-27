"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
