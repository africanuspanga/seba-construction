"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { ALL_PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const featuredProjects = ALL_PROJECTS.slice(0, 6);

export default function ProjectsHighlight() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Our Work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-light rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <Building2 size={36} className="mb-2 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-wider">Project Image</span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white rounded-full">
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-dark rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-dark mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {project.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Building2 size={12} className="text-secondary" />
                    {project.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-secondary" />
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-dark/90 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
