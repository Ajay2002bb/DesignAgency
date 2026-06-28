import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nova Agency | Crafting Digital Experiences",
  description: "We are a creative design agency specializing in UI/UX design, web development, mobile apps, and digital branding.",
  keywords: ["Design Agency", "Web Development", "UI/UX", "Branding", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-slate-900 bg-slate-50 dark:text-zinc-200 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-950 dark:to-black min-h-screen transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
