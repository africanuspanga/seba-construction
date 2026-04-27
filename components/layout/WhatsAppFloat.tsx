"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        
        {/* Button - PNG fills entire area */}
        <div className="relative w-16 h-16 rounded-full shadow-lg overflow-hidden cursor-pointer">
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            fill
            className="object-cover"
          />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </motion.div>
    </motion.a>
  );
}
