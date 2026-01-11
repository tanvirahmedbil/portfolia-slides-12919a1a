import { GraduationCap, Award, Calendar } from "lucide-react";
import { education } from "@/data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="slide-section">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div
                className={`bg-card border rounded-xl p-6 md:p-8 transition-all hover:border-primary/30 ${
                  edu.highlight ? "border-primary/40 glow-effect" : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        edu.highlight ? "bg-primary/20" : "bg-secondary"
                      }`}
                    >
                      <GraduationCap
                        className={`w-7 h-7 ${
                          edu.highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        edu.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <Award className="w-4 h-4" />
                      {edu.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
