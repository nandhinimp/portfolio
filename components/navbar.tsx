"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md py-4 px-6 shadow-lg border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nandhini
        </motion.a>

        <div className="flex items-center space-x-4">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
