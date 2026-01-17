import { useState, useEffect } from "react";
import { Download, Mail, ChevronUp, ChevronDown, Menu, X } from "lucide-react";
import { sections } from "@/data/portfolioData";
import navLogo from "@/assets/nav-logo.jpeg";

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navigation = ({
  currentSection,
  onNavigate
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsMobileMenuOpen(false);
  };

  const goToPrev = () => {
    if (currentSection > 0) {
      onNavigate(currentSection - 1);
    }
  };

  const goToNext = () => {
    if (currentSection < sections.length - 1) {
      onNavigate(currentSection + 1);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <button onClick={() => handleNavigate(0)} className="transition-opacity opacity-100 font-extralight">
            <img src={navLogo} alt="Tanvir Ahmed" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleNavigate(index)}
                className={`nav-link ${currentSection === index ? "nav-link-active" : ""}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="mailto:tanvirahmed.mt@gmail.com" className="btn-outline text-sm hidden sm:inline-flex py-2 px-3">
              <Mail className="w-4 h-4" />
              <span className="hidden lg:inline">Contact</span>
            </a>
            <a href="/Tanvir_Ahmed_CV_Resume.pdf" download className="btn-primary text-sm py-2 px-3">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-4 space-y-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigate(index)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentSection === index 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <a
                href="mailto:tanvirahmed.mt@gmail.com"
                className="block w-full text-left px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted hover:text-foreground sm:hidden"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Progress Indicator (Right Side) - Hidden on mobile */}
      <div className="progress-indicator">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`progress-dot ${currentSection === index ? "progress-dot-active" : ""}`}
            aria-label={`Go to ${sections[index].label}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Bottom Right) - Smaller on mobile */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-2">
        <button
          onClick={goToPrev}
          disabled={currentSection === 0}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          aria-label="Previous section"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          aria-label="Next section"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide Counter (Bottom Left) - Smaller on mobile */}
      <div className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-50 text-xs sm:text-sm font-medium text-muted-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border shadow-lg">
        <span className="text-primary">{String(currentSection + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(sections.length).padStart(2, "0")}</span>
      </div>
    </>
  );
};

export default Navigation;