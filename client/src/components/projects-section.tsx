import { motion } from "framer-motion";
import { Eye, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/resume-data";

const iconMap = {
  eye: Eye,
  "shield-check": ShieldCheck
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-navy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Personal Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  className="project-card bg-white rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`rounded-lg p-3 mr-4 ${
                      index === 0 ? "bg-blue-primary" : "bg-cyan-accent"
                    }`}>
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">
                      {index === 0 ? "Key Features:" : "Architecture:"}
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <ArrowRight className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            index === 0 ? "text-blue-primary" : "text-cyan-accent"
                          }`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className={`${
                          index === 0 
                            ? "bg-blue-100 text-blue-primary" 
                            : "bg-cyan-100 text-cyan-accent"
                        } hover:scale-105 transition-transform`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
