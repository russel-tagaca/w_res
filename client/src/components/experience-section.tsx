import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";
import { experiences } from "@/lib/resume-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-navy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="relative">
            <div className="timeline-line" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="timeline-item relative pl-12 pb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow project-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{experience.title}</h3>
                      <h4 className="text-xl text-blue-primary font-semibold">{experience.company}</h4>
                      <p className="text-gray-medium">{experience.location}</p>
                    </div>
                    <span className={`flex items-center px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                      experience.current 
                        ? "bg-blue-primary text-white" 
                        : "bg-gray-500 text-white"
                    }`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 text-gray-700">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <motion.li 
                        key={respIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
