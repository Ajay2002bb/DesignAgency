"use client";

import { motion } from "framer-motion";
import { Paintbrush, Code, Megaphone, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="w-8 h-8 text-emerald-500" />,
    title: "UI/UX Design",
    description: "Data-driven UI/UX design that prioritizes user retention and converts visitors into loyal customers."
  },
  {
    icon: <Code className="w-8 h-8 text-purple-500" />,
    title: "Web Development",
    description: "Custom frontend and backend solutions built on React, Node, and modern cloud architectures."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: "Branding",
    description: "Positioning and visual identity systems that help companies stand out in crowded markets."
  },
  {
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase conversions and grow your online presence."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Core Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-zinc-400 text-lg"
          >
            We deliver tailored solutions that empower your business to thrive in a competitive digital landscape.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/50 p-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="mb-6 p-4 bg-slate-100 dark:bg-zinc-900/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
