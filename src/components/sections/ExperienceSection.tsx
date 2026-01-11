import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="slide-section">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work History</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`timeline-item animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="timeline-dot" />
              
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="grid sm:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
