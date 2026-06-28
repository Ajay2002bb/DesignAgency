"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start a project?</h2>
            <p className="text-slate-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
              Drop us a line to discuss your requirements. We're currently taking on new clients for upcoming quarters.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Email Us</span>
                <a href="mailto:ajay@gmail.com" className="text-xl font-medium hover:text-emerald-400 transition-colors">ajay@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Call Us</span>
                <a href="tel:+1234567890" className="text-xl font-medium hover:text-emerald-400 transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Visit Us</span>
                <p className="text-xl font-medium text-slate-700 dark:text-zinc-300">Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-800/50 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-zinc-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full bg-slate-50 dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
