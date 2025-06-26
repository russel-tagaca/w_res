import { motion } from "framer-motion";
import { Code, Cloud, FlaskRound, Globe, Database, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillCategories, interests } from "@/lib/resume-data";

const iconMap = {
  code: Code,
  cloud: Cloud,
  vial: FlaskRound,
  globe: Globe,
  database: Database,
  language: Languages
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-navy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`bg-gradient-to-br ${category.gradient} rounded-xl p-6 mb-4 inline-block`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary"
                          className="skill-badge bg-blue-100 text-blue-primary px-3 py-2 text-sm font-medium hover:shadow-lg"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Areas of Interest</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    className="skill-badge bg-gradient-to-r from-blue-primary to-cyan-accent text-white px-4 py-2 font-medium hover:shadow-lg"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
