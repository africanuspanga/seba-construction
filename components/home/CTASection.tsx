"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. Let&apos;s discuss how SEBA can deliver 
            exceptional results for your drilling or construction needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${COMPANY.phone1.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Phone size={18} />
              {COMPANY.phone1}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm">
            <Mail size={16} />
            <span>{COMPANY.email}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
