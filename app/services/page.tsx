"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Drill, Search, Building2, Droplets, Gem, Waves, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";

const iconMap: Record<string, React.ElementType> = {
  Drill,
  Search,
  Building2,
  Droplets,
  Gem,
  Waves,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/bg-images/istockphoto-2202241340-612x612.jpg')` }} />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/20 text-secondary">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Drilling & Construction
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From groundwater exploration to civil construction, we deliver end-to-end solutions 
              with precision, safety, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Drill;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={28} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Process" subtitle="How We Work" />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Study", desc: "Technical team visits with geologists to identify optimal drilling points using ERT surveys." },
              { step: "02", title: "Drilling", desc: "DTH technology drilling with geological sampling at 1m intervals and constant monitoring." },
              { step: "03", title: "Casing & Development", desc: "UPVC casing installation, well development, and gravel packing for long-term integrity." },
              { step: "04", title: "Testing & Handover", desc: "Step drawdown and constant pumping tests with detailed completion reports." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full">
                    <ArrowRight size={24} className="text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
