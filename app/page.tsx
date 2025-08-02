"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

import portfolioData from "@/data/portfolio.json"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScroll({ container: containerRef })
  const { theme } = useTheme()

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen overflow-x-hidden",
        theme === "dark" ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" : "bg-background",
      )}
    >
      <Navbar />
      <HeroSection
        name={portfolioData.hero.name}
        intro={portfolioData.hero.intro}
        linkedinUrl={portfolioData.contact.linkedin}
        githubUrl={portfolioData.contact.github}
        emailUrl={portfolioData.contact.email}
        profileImage={portfolioData.hero.profileImage}
      />
      <AboutSection 
        summary={portfolioData.about.summary} 
        techStack={portfolioData.about.techStack as any}
        profileImage={portfolioData.hero.profileImage}
      />
      <ProjectsSection projects={portfolioData.projects as any} />
      <ContactSection
        email={portfolioData.contact.email}
        linkedinUrl={portfolioData.contact.linkedin}
        calendlyUrl={portfolioData.contact.calendly}
      />
      <Footer />
    </div>
  )
}