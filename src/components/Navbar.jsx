"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Hexagon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-emerald-500 group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Nova<span className="text-emerald-500"> Agency</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Start a Project
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
