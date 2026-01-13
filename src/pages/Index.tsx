import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import GrowthSection from "@/components/sections/GrowthSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { sections } from "@/data/portfolioData";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const navigateToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    const sectionId = sections[index].id;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    setTimeout(() => setIsScrolling(false), 800);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigateToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigateToSection(currentSection - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        navigateToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        navigateToSection(sections.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, navigateToSection]);

  // Hash-based navigation on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const index = sections.findIndex((s) => s.id === hash);
      if (index !== -1) {
        setTimeout(() => navigateToSection(index), 100);
      }
    }
  }, [navigateToSection]);

  return (
    <main className="relative">
      <Navigation currentSection={currentSection} onNavigate={navigateToSection} />
      
      <HeroSection onNavigate={navigateToSection} />
      <PortfolioSection />
      <GrowthSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
