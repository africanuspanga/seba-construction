"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Safety is our highest priority. With 2 dedicated HSE officers and a 100% compliance record, we ensure every project site meets the strictest safety standards.",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines. Our project management expertise ensures on-time completion without compromising quality or safety.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team includes 3 Civil Engineers, 5 Drilling Experts, a Geology Engineer, and dedicated HSE Officers — all permanent staff with deep expertise.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "From 800m diamond drilling rigs to ABEM Terrameter survey equipment, we invest in the best tools to deliver precise, efficient results.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose SEBA"
          subtitle="Our Advantages"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={reason.title}
              delay={index * 0.1}
              className={reason.highlight ? "border-safety/20 bg-gradient-to-br from-white to-safety/5" : ""}
            >
              <div className="flex items-start gap-5">
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                  ${reason.highlight ? "bg-safety/10" : "bg-primary/10"}
                `}>
                  <reason.icon size={28} className={reason.highlight ? "text-safety" : "text-primary"} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-dark">{reason.title}</h3>
                    {reason.highlight && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-safety text-white rounded-full">
                        Priority
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
