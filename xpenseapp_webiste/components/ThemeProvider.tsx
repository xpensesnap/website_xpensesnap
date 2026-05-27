"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { flushSync } from "react-dom";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark"); // Default dark or checking system preference

  useEffect(() => {
    const savedTheme = localStorage.getItem("xpense-theme") as Theme | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Standard fallback if View Transitions API is not supported
    if (!document.startViewTransition) {
      applyTheme(newTheme);
      return;
    }

    // Determine the origin of the circle based on target theme
    // Dark mode: top-left (0, 0)
    // Light mode: bottom-right (innerWidth, innerHeight)
    const x = newTheme === "dark" ? 0 : window.innerWidth;
    const y = newTheme === "dark" ? 0 : window.innerHeight;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        applyTheme(newTheme);
      });
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 800,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("xpense-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
