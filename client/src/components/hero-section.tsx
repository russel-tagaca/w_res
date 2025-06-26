import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/resume-data";

export default function HeroSection() {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="bg-gradient-to-br from-navy via-blue-primary to-cyan-accent text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {personalInfo.email}
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {personalInfo.location}
            </span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors group"
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              GitHub Profile
            </a>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={scrollToExperience}
              className="inline-flex items-center bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
            >
              View My Work
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
