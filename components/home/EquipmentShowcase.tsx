"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Drill, Droplets, Waves, Truck, Search, ArrowRight } from "lucide-react";
import { EQUIPMENT } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, React.ElementType> = {
  Drilling: Drill,
  Pumping: Waves,
  Dewatering: Droplets,
  Civil: Truck,
  Survey: Search,
};

const categoryColors: Record<string, string> = {
  Drilling: "bg-primary/10 text-primary",
  Pumping: "bg-cyan-500/10 text-cyan-600",
  Dewatering: "bg-blue-500/10 text-blue-600",
  Civil: "bg-orange-500/10 text-orange-600",
  Survey: "bg-purple-500/10 text-purple-600",
};

export default function EquipmentShowcase() {
  const categories = Array.from(new Set(EQUIPMENT.map((e) => e.category)));

  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Equipment Fleet"
          subtitle="Modern Machinery"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Category Cards */}
          {categories.map((category, catIndex) => {
            const items = EQUIPMENT.filter((e) => e.category === category);
            const Icon = categoryIcons[category] || Drill;
            const colorClass = categoryColors[category] || "bg-gray-100 text-gray-600";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="text-sm">
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        <p className="text-gray-500 text-xs mt-0.5">{item.spec}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Well Casing", desc: "UPVC casing installation to maintain well integrity and prevent collapse." },
            { title: "Well Development", desc: "Mechanical surging and air/water jetting to repair aquifer damage and remove fine particles." },
            { title: "Well Testing", desc: "Step drawdown and constant pumping tests with chemical analysis for yield verification." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-dark mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark/90 transition-colors"
          >
            View Full Equipment List
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
