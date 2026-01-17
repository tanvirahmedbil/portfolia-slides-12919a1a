import { useState, useEffect } from "react";
import { Download, Mail, ChevronUp, ChevronDown } from "lucide-react";
import { sections } from "@/data/portfolioData";
import navLogo from "@/assets/nav-logo.jpeg";

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => onNavigate(0)}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={navLogo} alt="Tanvir Ahmed" className="w-10 h-10 rounded-full object-cover" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onNavigate(index)}
                className={`nav-link ${currentSection === index ? "nav-link-active" : ""}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:tanvirahmed.mt@gmail.com"
              className="btn-outline text-sm hidden sm:inline-flex"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
            <a
              href="#"
              className="btn-primary text-sm"
              onClick={(e) => {
                e.preventDefault();
                // In production, this would link to actual CV file
                alert("CV download would be triggered here. Add your CV file path.");
              }}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Progress Indicator (Right Side) */}
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

      {/* Navigation Arrows (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        <button
          onClick={goToPrev}
          disabled={currentSection === 0}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous section"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentSection === sections.length - 1}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next section"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter (Bottom Left) */}
      <div className="fixed bottom-8 left-8 z-50 text-sm font-medium text-muted-foreground">
        <span className="text-primary">{String(currentSection + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(sections.length).padStart(2, "0")}</span>
      </div>
    </>
  );
};

export default Navigation;
