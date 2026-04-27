"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Calendar, Building2, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { ALL_PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category)))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/bg-images/istockphoto-2204989191-612x612.jpg')` }} />
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Projects Completed
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive showcase of our drilling, construction, and water infrastructure projects across Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { value: ALL_PROJECTS.length.toString(), label: "Total Projects" },
              { value: "17+", label: "Years Active" },
              { value: "12+", label: "Districts Served" },
              { value: "100%", label: "Completion Rate" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            <Filter size={18} className="text-gray-400 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                      <Building2 size={40} className="mb-2 opacity-50" />
                      <span className="text-xs font-medium uppercase tracking-wider">Project Image</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-secondary text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-dark rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Building2 size={14} className="text-secondary" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar size={14} className="text-secondary" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how SEBA can deliver exceptional results for your next drilling or construction project.
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
