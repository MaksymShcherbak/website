"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  if (!mounted) return null;

  return (
    <button
      onClick={cycleTheme}
      className="absolute right-5 top-5 p-5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
      aria-label="Toggle theme"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
