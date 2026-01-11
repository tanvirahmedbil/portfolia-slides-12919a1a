import { Zap, Wrench, Trophy } from "lucide-react";
import { skills } from "@/data/portfolioData";

const SkillsSection = () => {
  return (
    <section id="skills" className="slide-section">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Expertise & Tools</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Core Strengths */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors animate-fade-in-up animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                Core Strengths
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                Tools & Software
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span key={tool} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-1 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.strengths.map((strength) => (
                <span key={strength} className="skill-tag">
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-display font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">SEO Projects Managed</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-display font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-display font-bold text-primary mb-2">47%</div>
            <div className="text-sm text-muted-foreground">CPI Reduction (PPC)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
