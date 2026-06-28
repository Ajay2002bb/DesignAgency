import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-transparent text-slate-600 dark:text-zinc-400 py-12 border-t border-slate-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Nova<span className="text-emerald-500"> Agency</span></span>
          </div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nova Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
