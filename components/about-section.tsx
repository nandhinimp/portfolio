"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Server, Globe, Cpu, Zap, Cloud, Palette } from "lucide-react"
import Image from "next/image"

interface AboutSectionProps {
  summary: string[]
  techStack: { name: string; icon: string; color: string }[]
  profileImage?: string
}

const iconMap: { [key: string]: React.ElementType } = {
  Code,
  Database,
  Server,
  Globe,
  Cpu,
  Zap,
  Cloud,
  Palette,
}

export function AboutSection({ summary, techStack, profileImage }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Photo - LEFT SIDE */}
          {profileImage && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <motion.div
                className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-2xl">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                    <Image
                      src={profileImage}
                      alt="Nandhini"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>
          )}

          {/* Content - RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            {summary.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Tech Stack */}
            <h3 className="text-2xl font-semibold mb-4 text-foreground mt-8">My Tech Stack</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => {
                const IconComponent = iconMap[tech.icon]
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center p-4 bg-card rounded-xl backdrop-blur-sm border border-border hover:border-primary transition-all duration-300"
                  >
                    {IconComponent && <IconComponent className={`w-8 h-8 mb-2 ${tech.color}`} />}
                    <span className="text-sm text-muted-foreground">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}