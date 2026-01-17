import { ArrowDown, Briefcase, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.png";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const HeroSection = ({
  onNavigate
}: HeroSectionProps) => {
  return (
    <section id="home" className="slide-section relative pt-24 sm:pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      
      {/* Decorative Elements - Hidden on small screens */}
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm text-muted-foreground">{personalInfo.experience} Experience</span>
              </div>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-3 sm:mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl md:text-2xl font-display text-primary mb-4 sm:mb-6">
              {personalInfo.title}
              <span className="block text-sm sm:text-lg text-muted-foreground font-body font-normal mt-1">
                {personalInfo.subtitle}
              </span>
            </h2>

            <p className="animate-fade-in-up animation-delay-300 text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="/Tanvir_Ahmed_CV_Resume.pdf" download className="btn-primary">
                Download My Resume
                <Download className="w-4 h-4" />
              </a>
              <a href="mailto:tanvirahmed.mt@gmail.com" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow-effect animate-fade-in-up">
                <img src={profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative Border - Hidden on very small screens */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full rounded-2xl border-2 border-primary/30 -z-10 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint - Hidden on mobile */}
      <div className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <button onClick={() => onNavigate(1)} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to portfolio">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;