"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "./project-modal"

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

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from completed applications to exciting projects in development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="bg-card border-border backdrop-blur-sm hover:bg-accent hover:border-primary transition-all duration-300 overflow-hidden">
                {project.image && (
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      {project.status === "ongoing" ? (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        >
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            <Rocket className="w-3 h-3 mr-1" />
                            In Progress
                          </Badge>
                        </motion.div>
                      ) : (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className={`p-6 ${!project.image ? 'pt-4' : ''}`}>
                  {!project.image && (
                    <div className="mb-4">
                      {project.status === "ongoing" ? (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        >
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            <Rocket className="w-3 h-3 mr-1" />
                            In Progress
                          </Badge>
                        </motion.div>
                      ) : (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
                      )}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm group-hover:text-primary/80 transition-colors">
                      View Details →
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                      {project.demo && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}