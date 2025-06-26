import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import Footer from "@/components/footer";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("about");

  const handleDownload = () => {
    // Simply navigate to the download route - the server will handle the download
    window.open('/download/resume', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "education"];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If user is near the bottom of the page, set education as active
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("education");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set document title
    document.title = "Russel Tagaca - Software Engineer Resume";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional resume of Russel Tagaca, Software Test Engineer and Backend Developer with expertise in automation, cloud technologies, and full-stack development.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Russel Tagaca - Software Engineer Resume';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Professional resume showcasing experience in test automation, cloud technologies, and backend development at General Motors and other leading companies.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} />
      <main className="pt-20">
        <HeroSection />
        <ExperienceSection />
        
        {/* Download PDF Section */}
        <section className="py-12 bg-gray-50 no-print">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
                Download Resume
              </h3>
              <p className="text-gray-medium mb-6">
                Get a PDF copy of this resume for your records
              </p>
              <Button 
                onClick={handleDownload}
                className="bg-blue-primary text-white hover:bg-navy transition-colors px-8 py-3 text-lg"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </motion.div>
          </div>
        </section>
        
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  );
}
