"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-muted-foreground"
        >
          © 2024 Nandhini. Crafted with passion and cutting-edge technology.
        </motion.p>
      </div>
    </footer>
  )
}
