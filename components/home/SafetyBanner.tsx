"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, HardHat, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SAFETY_POLICY } from "@/lib/data";

export default function SafetyBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Glowing Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-4 md:inset-x-12 top-0 h-1 bg-gradient-to-r from-transparent via-safety to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-safety/10 border-2 border-safety/30">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <AlertTriangle size={24} className="text-safety" />
            </motion.div>
            <span className="text-safety font-bold text-sm md:text-base tracking-wide uppercase">
              Our Top Priority
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <AlertTriangle size={24} className="text-safety" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Safety is the{" "}
            <span className="text-safety">Most Important</span>
            <br className="hidden md:block" />
            {" "}Attribute to All Our Activities
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-1 w-16 bg-safety rounded-full" />
            <ShieldCheck size={28} className="text-secondary" />
            <div className="h-1 w-16 bg-safety rounded-full" />
          </div>
        </motion.div>

        {/* Policy Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {SAFETY_POLICY.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-secondary" />
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { icon: HardHat, label: "2 HSE Officers", sub: "On Staff" },
            { icon: ShieldCheck, label: "100%", sub: "Compliance Record" },
            { icon: HeartPulse, label: "Zero", sub: "Lost-Time Incidents" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-safety/10 border border-safety/30 flex items-center justify-center">
                <item.icon size={28} className="text-safety" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{item.label}</div>
                <div className="text-sm text-gray-400">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-4 md:inset-x-12 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"
      />
    </section>
  );
}
