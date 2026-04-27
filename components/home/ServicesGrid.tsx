"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Drill, Search, Building2, Droplets, Gem, Waves } from "lucide-react";
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

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="What We Do"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Drill;
            return (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <div className="relative h-48 -mx-6 -mt-6 mb-6 rounded-t-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </AnimatedCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark/90 transition-colors"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
