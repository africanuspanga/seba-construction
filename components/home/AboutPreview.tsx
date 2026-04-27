"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, HardHat, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/Drilling Works.png"
                alt="SEBA Drilling Operations"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar className="text-secondary" size={28} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark">{new Date().getFullYear() - COMPANY.established}+</div>
                  <div className="text-sm text-gray-500">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <SectionHeading
              title="About SEBA"
              subtitle="Who We Are"
              centered={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              Established in {COMPANY.established}, SEBA Construction & Drilling Ltd is a Tanzanian-owned firm 
              delivering excellence in groundwater exploration, borehole drilling, and civil construction. 
              Registered as a Civil and Building Contractor since 2012, we have built a reputation for 
              quality, safety, and timely project completion across the nation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              Our team of qualified engineers, geologists, and drilling experts is dedicated to providing 
              personalized service unmatched in the industry. We guarantee to meet your project demands 
              in a timely, cost-effective manner while upholding our standard of superiority.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: Award, text: "Certified Contractor" },
                { icon: Users, text: "Expert Team" },
                { icon: HardHat, text: "Safety First" },
                { icon: Calendar, text: "On-Time Delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
