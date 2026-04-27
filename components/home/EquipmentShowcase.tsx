"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const HIGHLIGHTED_EQUIPMENT = [
  {
    name: "Drilling Rig (DTH)",
    spec: "350m max depth — DTH (Down-The-Hole) Method",
    category: "Drilling",
  },
  {
    name: "RC Drilling Rig",
    spec: "450m max — Multipurpose RC & Diamond drilling",
    category: "Drilling",
  },
  {
    name: "Diamond Drilling Rig (DD)",
    spec: "800m max depth — Precision core sampling",
    category: "Drilling",
  },
  {
    name: "Submersible Pump",
    spec: '6" diameter — 100,000 L/hr capacity for pumping tests',
    category: "Pumping",
  },
  {
    name: "Excavator",
    spec: "Heavy earthworks and trenching",
    category: "Civil",
  },
  {
    name: "ABEM Terrameter SAS 1000",
    spec: "Resistivity measurement for hydrogeological survey",
    category: "Survey",
  },
];

const categoryColors: Record<string, string> = {
  Drilling: "bg-primary/10 text-primary",
  Pumping: "bg-cyan-500/10 text-cyan-600",
  Dewatering: "bg-blue-500/10 text-blue-600",
  Civil: "bg-orange-500/10 text-orange-600",
  Survey: "bg-purple-500/10 text-purple-600",
};

export default function EquipmentShowcase() {
  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Equipment"
          subtitle="Modern Machinery"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {HIGHLIGHTED_EQUIPMENT.map((item, index) => {
            const colorClass =
              categoryColors[item.category] || "bg-gray-100 text-gray-600";

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <Wrench size={36} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Equipment Image
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span
                    className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 ${colorClass}`}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.spec}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to full equipment page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark/90 transition-colors"
          >
            View Full Equipment Fleet
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
