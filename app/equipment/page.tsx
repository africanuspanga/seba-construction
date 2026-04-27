"use client";

import { motion } from "framer-motion";
import { Drill, ArrowRight, Wrench } from "lucide-react";
import Link from "next/link";
import { EQUIPMENT } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, React.ElementType> = {
  Drilling: Drill,
  Pumping: Wrench,
  Dewatering: Wrench,
  Civil: Wrench,
  Survey: Wrench,
};

export default function EquipmentPage() {
  const categories = Array.from(new Set(EQUIPMENT.map((e) => e.category)));

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/bg-images/istockphoto-2248616574-612x612.jpg')` }} />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/20 text-secondary">
              Our Fleet
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Modern Equipment
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              SEBA operates a comprehensive fleet of reliable, modern equipment
              maintained to the highest standards. From deep drilling rigs to
              precision survey instruments, our machinery enables us to deliver
              exceptional results across every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Equipment Inventory"
            subtitle="Reliable & Modern"
            centered
          />

          {categories.map((category, catIndex) => {
            const items = EQUIPMENT.filter((e) => e.category === category);
            const Icon = categoryIcons[category] || Wrench;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">{category}</h2>
                  <div className="flex-1 h-px bg-gray-200 ml-4" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image Placeholder */}
                      <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                          <Wrench size={40} className="mb-2 opacity-50" />
                          <span className="text-xs font-medium uppercase tracking-wider">
                            Equipment Image
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-3">
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
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Need Equipment for Your Project?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Contact us to discuss how our modern fleet can support your
              drilling, construction, or dewatering requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
