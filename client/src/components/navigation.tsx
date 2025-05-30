import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, User, Briefcase, Code, Award, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Main Header - visible when not scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav 
            className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 no-print"
            initial={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <motion.div 
                  className="text-xl font-bold text-navy cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => scrollToSection("about")}
                >
                  Russel Tagaca
                </motion.div>
                
                <div className="hidden md:flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link font-medium transition-colors ${
                        activeSection === item.id ? "text-navy active" : "text-gray-medium hover:text-navy"
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button 
                      onClick={handlePrint}
                      className="bg-blue-primary text-white hover:bg-navy transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </motion.div>
                </div>
                
                <button
                  className="md:hidden text-navy"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    className="md:hidden bg-white border-t border-gray-200 px-6 py-4 absolute left-0 right-0 top-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`nav-link text-left font-medium transition-colors ${
                            activeSection === item.id ? "text-navy" : "text-gray-medium hover:text-navy"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                      <Button 
                        onClick={handlePrint}
                        className="bg-blue-primary text-white hover:bg-navy transition-colors w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Milestone Sidebar - visible when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 no-print hidden lg:block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4">
              <div className="space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  const isCompleted = navItems.findIndex(nav => nav.id === activeSection) > index;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative flex items-center p-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? "bg-blue-primary text-white shadow-md" 
                          : isCompleted
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                        isActive 
                          ? "bg-white/20" 
                          : isCompleted
                          ? "bg-green-200"
                          : "bg-white/50"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                        {isCompleted && !isActive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white">
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Tooltip */}
                      <div className={`absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
                        isActive ? "bg-blue-primary" : ""
                      }`}>
                        {item.label}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full border-4 border-transparent border-r-gray-900"></div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((navItems.findIndex(nav => nav.id === activeSection) + 1) / navItems.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-blue-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((navItems.findIndex(nav => nav.id === activeSection) + 1) / navItems.length) * 100}%` 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating menu when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 no-print lg:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-blue-primary text-white hover:bg-navy w-14 h-14 rounded-full shadow-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
            
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4 min-w-48"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-2">
                    {navItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            scrollToSection(item.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                            activeSection === item.id 
                              ? "bg-blue-primary text-white" 
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <IconComponent className="w-4 h-4 mr-3" />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
