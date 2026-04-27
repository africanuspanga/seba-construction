"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientLogos() {
  const doubledLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-16 md:py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          title="Clients We Work With"
          subtitle="Trusted Partners"
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-light to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex animate-marquee"
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 px-6 mx-4 bg-white rounded-xl shadow-sm border border-gray-100 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
