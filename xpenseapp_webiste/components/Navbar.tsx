"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Features");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active tab based on current route
  useEffect(() => {
    if (pathname === "/features") setActiveTab("Features");
    else if (pathname === "/about") setActiveTab("About");
    else if (pathname === "/contact") setActiveTab("Contact");
    else if (pathname === "/") setActiveTab("Features"); // Default for home
  }, [pathname]);

  return (
    <header
      className={`fixed top-4 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "px-4 sm:px-6" : "px-4 sm:px-8"
      }`}
    >
      <nav
        className={`flex items-center justify-between w-full max-w-5xl rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300 ${
          scrolled
            ? "bg-white/70 dark:bg-ink-900/70 backdrop-blur-xl shadow-lg border border-ink-200/50 dark:border-ink-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="flex-shrink-0">
          <Logo size={32} />
        </div>

        <div className="hidden md:flex items-center gap-1 bg-ink-100/50 dark:bg-ink-800/50 rounded-full p-1 border border-ink-200/50 dark:border-ink-700/50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
            >
              <span
                className={`relative z-10 ${
                  activeTab === item.name
                    ? "text-ink-950 dark:text-white"
                    : "text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100"
                }`}
              >
                {item.name}
              </span>
              {activeTab === item.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white dark:bg-ink-700 rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-ink-600 dark:text-ink-300 hover:bg-ink-200/50 dark:hover:bg-ink-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-full bg-brand-500 text-white shadow-glow hover:bg-brand-600 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
