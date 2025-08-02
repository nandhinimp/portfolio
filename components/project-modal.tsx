"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: "completed" | "ongoing"
  image?: string
  github?: string
  demo?: string
  details: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {project.image ? (
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/50 hover:bg-background/70 text-foreground"
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="absolute top-4 left-4">
                  {project.status === "ongoing" ? (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      <Rocket className="w-3 h-3 mr-1" />
                      In Progress
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start p-6 pb-0">
                <div>
                  {project.status === "ongoing" ? (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      <Rocket className="w-3 h-3 mr-1" />
                      In Progress
                    </Badge>
                  ) : (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-background/50 hover:bg-background/70 text-foreground"
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.details}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-accent bg-transparent"
                    onClick={() => window.open(project.github!, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-primary-foreground"
                    onClick={() => window.open(project.demo!, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}