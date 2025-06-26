import { motion } from "framer-motion";
import { GraduationCap, Award, Check, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { education, certifications } from "@/lib/resume-data";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-navy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education & Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-navy rounded-lg p-3 mr-4">
                  <GraduationCap className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{education.degree}</h3>
                  <p className="text-blue-primary font-semibold">{education.institution}</p>
                  <p className="text-gray-medium">{education.location} • {education.date}</p>
                </div>
              </div>
              
              <h4 className="font-semibold text-navy mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-1 gap-2">
                {education.courses.map((course, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="w-4 h-4 text-blue-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-primary rounded-lg p-3 mr-4">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Certifications</h3>
                  <p className="text-gray-medium">Professional Credentials</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="border-l-4 border-blue-primary pl-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-bold text-navy text-lg">{cert.name}</h4>
                    <p className="text-blue-primary font-medium">Certificate #{cert.certificateId}</p>
                    <p className="text-gray-medium">Earned: {cert.dateEarned}</p>
                    <div className="mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-primary">
                        Azure Fundamentals
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-6 p-4 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-primary mr-2" />
                  <span className="text-blue-primary font-semibold">Recently Certified</span>
                </div>
                <p className="text-gray-700 text-sm mt-1">
                  Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
