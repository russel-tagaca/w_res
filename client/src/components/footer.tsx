import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 no-print">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h3>
          
          <motion.p 
            className="text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in discussing new opportunities, innovative projects, and technological challenges. Feel free to reach out!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center bg-blue-primary hover:bg-blue-light px-6 py-3 rounded-lg transition-colors group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Send Email
            </a>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-cyan-accent hover:bg-cyan-600 px-6 py-3 rounded-lg transition-colors group"
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View GitHub
            </a>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center bg-gray-600 hover:bg-gray-500 px-6 py-3 rounded-lg transition-colors group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Call Now
            </a>
          </motion.div>
          
          <motion.div 
            className="text-blue-100 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Russel Tagaca. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
