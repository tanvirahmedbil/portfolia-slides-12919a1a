import { TrendingUp, Target, ArrowUpRight } from "lucide-react";
import { featuredProjects, moreProjects } from "@/data/portfolioData";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="slide-section">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Project Grid - Stack on mobile, 2x2 on larger */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Logo */}
                  <div
                    className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center overflow-hidden p-1.5 sm:p-2 rounded-lg border border-border/50 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                    style={{ backgroundColor: project.logoBg || '#6574ae' }}
                  >
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.client} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-lg sm:text-xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                        {project.client.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-display font-semibold text-foreground truncate">
                      {project.client}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                      {project.intro}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {(Array.isArray(project.type) ? project.type : [project.type]).map((t) => (
                    <span
                      key={t}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full ${
                        t === "PPC"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-foreground/70"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strategy & Outcome */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Strategy */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                    <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Strategy
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {project.strategy.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3 sm:pl-4 relative before:absolute before:left-0 before:top-1.5 sm:before:top-2 before:w-1 sm:before:w-1.5 before:h-1 sm:before:h-1.5 before:rounded-full before:bg-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Outcome
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {project.outcome.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3 sm:pl-4 relative before:absolute before:left-0 before:top-1.5 sm:before:top-2 before:w-1 sm:before:w-1.5 before:h-1 sm:before:h-1.5 before:rounded-full before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects */}
        <div className="animate-fade-in-up animation-delay-400">
          <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4">
            More Projects
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {moreProjects.map((project) => (
              <span key={project} className="skill-tag cursor-default">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;