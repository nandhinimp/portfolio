"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-foreground hover:text-primary hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: theme === "light" ? 90 : -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: theme === "light" ? -90 : 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.div>
    </Button>
  )
}
