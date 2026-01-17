import { GraduationCap, Award, Calendar } from "lucide-react";
import { education } from "@/data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="slide-section">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {/* Education Cards */}
        <div className="grid gap-4 sm:gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div
                className={`bg-card border rounded-xl p-4 sm:p-6 md:p-8 transition-all hover:border-primary/30 ${
                  edu.highlight ? "border-primary/40 glow-effect" : "border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center ${
                        edu.highlight ? "bg-primary/20" : "bg-secondary"
                      }`}
                    >
                      <GraduationCap
                        className={`w-5 h-5 sm:w-7 sm:h-7 ${
                          edu.highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-display font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 sm:text-right pl-13 sm:pl-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {edu.period}
                    </div>
                    <div
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                        edu.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-foreground/70"
                      }`}
                    >
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
