import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weboin Agency | Crafting Digital Experiences",
  description: "We are a creative design agency specializing in UI/UX design, web development, mobile apps, and digital branding.",
  keywords: ["Design Agency", "Web Development", "UI/UX", "Branding", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-200 bg-slate-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
