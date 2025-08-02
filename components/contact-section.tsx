"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  email: string
  linkedinUrl: string
  calendlyUrl?: string
}

export function ContactSection({ email, linkedinUrl, calendlyUrl }: ContactSectionProps) {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setContactForm({ name: "", email: "", message: "" })
    alert("Message sent! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to bring your ideas to life? Let's connect and discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-background min-h-[120px] transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-primary-foreground py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Other Ways to Connect</h3>
            </div>

            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
              <div>
                <p className="text-foreground font-medium">LinkedIn</p>
                <p className="text-muted-foreground text-sm">Professional networking</p>
              </div>
              <Mail className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-6 h-6 text-purple-400 mr-4" />
              <div>
                <p className="text-foreground font-medium">Email</p>
                <p className="text-muted-foreground text-sm">{email}</p>
              </div>
              <Mail className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </motion.a>

            {calendlyUrl && (
              <motion.a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-6 h-6 text-green-400 mr-4" />
                <div>
                  <p className="text-foreground font-medium">Schedule a Call</p>
                  <p className="text-muted-foreground text-sm">Book a 30-minute chat</p>
                </div>
                <Mail className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
