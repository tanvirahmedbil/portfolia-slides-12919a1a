import { ArrowDown, Briefcase } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.png";
interface HeroSectionProps {
  onNavigate: (index: number) => void;
}
const HeroSection = ({
  onNavigate
}: HeroSectionProps) => {
  return <section id="home" className="slide-section relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                
                
                
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{personalInfo.experience} Experience</span>
              </div>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="animate-fade-in-up animation-delay-200 text-xl md:text-2xl font-display text-primary mb-6">
              {personalInfo.title}
              <span className="block text-lg text-muted-foreground font-body font-normal mt-1">
                {personalInfo.subtitle}
              </span>
            </h2>

            <p className="animate-fade-in-up animation-delay-300 text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {personalInfo.tagline}
            </p>

            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap gap-4">
              <button onClick={() => onNavigate(1)} className="btn-primary">
                View Portfolio
                <ArrowDown className="w-4 h-4" />
              </button>
              <a href="mailto:tanvirahmed.mt@gmail.com" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow-effect animate-fade-in-up">
                <img src={profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => onNavigate(1)} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to portfolio">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>;
};
export default HeroSection;