"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart, ShieldCheck, HardHat, HeartPulse, Leaf, FileCheck } from "lucide-react";
import { COMPANY, TEAM, EQUIPMENT, SAFETY_POLICY } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building Tanzania Since {COMPANY.established}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A legacy of excellence in drilling, construction, and water infrastructure development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/Building Construction.jpg"
                  alt="SEBA Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div>
              <SectionHeading title="Our Story" subtitle="About SEBA" centered={false} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  Seba Drilling and Construction Ltd is a local firm established in {COMPANY.established}. 
                  In 2009, we began providing consultancy and services in geophysical, hydrogeological, 
                  and geological surveys, drilling and construction of water wells, pump installation 
                  and servicing, and design of small water supply schemes.
                </p>
                <p>
                  Today, our company deals with groundwater exploration, irrigation, drilling for sample 
                  collecting, diamond drilling, and blasting hole drilling. In 2012, we registered as a 
                  Civil and Building Contractor and began our journey in construction works.
                </p>
                <p>
                  Until 2024, we have undertaken water projects, irrigation scheme projects, building 
                  construction, dam construction, and numerous road construction projects across Tanzania.
                </p>
                <p className="font-medium text-dark">
                  We are dedicated to providing clients with personalized service unmatched in the industry, 
                  guaranteeing to meet project demands in a timely, cost-effective manner while upholding 
                  our standard of superiority.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
              <Target size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide good quality and on-time completion of all projects we undertake. 
                To be the preeminent provider of superior construction and drilling services by 
                consistently improving the quality of our projects. To add value for clients through 
                innovation, foresight, integrity, and aggressive performance.
              </p>
            </AnimatedCard>
            <AnimatedCard className="bg-gradient-to-br from-secondary/5 to-transparent border-secondary/10">
              <Eye size={40} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Transforming dreams and imagination into concrete reality. We aim to innovate, 
                inspire, and build a sustainable future for Tanzania. To serve our clients with 
                honor and remain fair and true in dealings with all employees, clients, and partners.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* HSE Policy */}
      <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Health, Safety & Environment"
            subtitle="HSE Policy"
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto">
              &ldquo;Safety to us is the <span className="text-safety">most important attribute</span> to all our activities.&rdquo;
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY_POLICY.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-safety/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} className="text-safety" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: "Safety Compliance", value: "100%" },
              { icon: HardHat, label: "HSE Officers", value: "2 Permanent" },
              { icon: HeartPulse, label: "Health Monitoring", value: "Daily" },
              { icon: Leaf, label: "Environmental Care", value: "Certified" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <item.icon size={32} className="mx-auto mb-3 text-secondary" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Key Technical Personnel" subtitle="Our Team" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Title</th>
                    <th className="px-6 py-4 font-semibold text-sm">Quantity</th>
                    <th className="px-6 py-4 font-semibold text-sm">Employment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {TEAM.map((member, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-dark">{member.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.qty}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {member.type}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Equipment" subtitle="Modern Fleet" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-5 rounded-xl bg-light border border-gray-100 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <FileCheck size={16} className="text-gray-400" />
                </div>
                <h4 className="font-bold text-dark mb-1">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
