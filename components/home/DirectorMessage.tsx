"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ShieldCheck, Award, Clock } from "lucide-react";
import { COMPANY } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DirectorMessage() {
  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Message from the Director"
          subtitle="Leadership"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Director Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-primary">
                    {COMPANY.director.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">Director Photo</p>
              </div>
              
              {/* Name Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-6 right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100"
              >
                <h3 className="text-lg font-bold text-dark">{COMPANY.director}</h3>
                <p className="text-sm text-secondary font-medium">Managing Director</p>
                <p className="text-xs text-gray-500 mt-1">SEBA Construction & Drilling Ltd</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 lg:pl-8"
          >
            <div className="relative mb-8">
              <Quote size={48} className="text-secondary/20 absolute -top-4 -left-2" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10 pl-6">
                For over seventeen years, SEBA Construction & Drilling Ltd has stood at the forefront 
                of Tanzania&apos;s water and infrastructure development. Our journey from a small drilling 
                firm to a full-service construction and drilling company reflects our unwavering commitment 
                to excellence, innovation, and most importantly, <span className="font-semibold text-safety">the safety and wellbeing 
                of every person on our sites</span>.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              We understand that every project we undertake impacts communities, economies, and environments. 
              That is why we invest in modern equipment, continuous staff training, and rigorous safety protocols. 
              Whether we are drilling a borehole in a remote village or constructing a water supply scheme for 
              thousands, our standards never waver. We are experienced, we are ready, and we are committed to 
              delivering results that exceed expectations while keeping safety as our highest priority.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: "Excellence", desc: "In Every Project" },
                { icon: ShieldCheck, label: "Safety", desc: "Always First" },
                { icon: Clock, label: "Delivery", desc: "On Time, Every Time" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                >
                  <item.icon size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-sm font-bold text-dark">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
