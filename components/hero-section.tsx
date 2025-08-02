"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Linkedin, Github, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import Image from "next/image"

interface HeroSectionProps {
  name: string
  intro: string
  linkedinUrl: string
  githubUrl: string
  emailUrl: string
  profileImage?: string
}

export function HeroSection({ name, intro, linkedinUrl, githubUrl, emailUrl, profileImage }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Animated Background Blobs/Layers */}
      <motion.div className="fixed inset-0 opacity-20 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce delay-1000" />
      </motion.div>

      <div className="max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ y: textY }}
        >
          {/* Text Content - LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {name}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(linkedinUrl, "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary-foreground/25 transition-all duration-300 transform hover:scale-105 bg-transparent"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-primary-foreground/25 transition-all duration-300 transform hover:scale-105 bg-transparent"
                onClick={() => window.open(`mailto:${emailUrl}`, "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo - RIGHT SIDE - Square with Rounded Corners */}
          {profileImage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-3xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                    <Image
                      src="./image.png"
                      alt={name}
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronRight className="w-6 h-6 rotate-90 text-muted-foreground" />
      </motion.div>
    </section>
  )
}