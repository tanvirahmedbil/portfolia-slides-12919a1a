import { TrendingUp, Target, ArrowUpRight } from "lucide-react";
import { featuredProjects, moreProjects } from "@/data/portfolioData";
const PortfolioSection = () => {
  return <section id="portfolio" className="slide-section">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Project Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {featuredProjects.map((project, index) => <article key={project.id} className={`project-card animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="w-16 h-16 border-2 flex items-center justify-center overflow-hidden p-2.5 transition-transform duration-200 hover:scale-105 bg-[#58297f] rounded-full shadow-lg border-muted">
                    {project.logo ? <img src={project.logo} alt={`${project.client} logo`} className="w-full h-full object-contain drop-shadow-md" /> : <span className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                        {project.client.charAt(0)}
                      </span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {project.client}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {project.intro}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(Array.isArray(project.type) ? project.type : [project.type]).map(t => <span key={t} className={`px-3 py-1 text-xs font-medium rounded-full ${t === "PPC" ? "bg-primary/20 text-primary" : "bg-secondary text-foreground/70"}`}>
                      {t}
                    </span>)}
                </div>
              </div>

              {/* Strategy & Outcome */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Strategy */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Target className="w-4 h-4" />
                    Strategy
                  </div>
                  <ul className="space-y-2">
                    {project.strategy.map((item, idx) => <li key={idx} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-border">
                        {item}
                      </li>)}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <TrendingUp className="w-4 h-4" />
                    Outcome
                  </div>
                  <ul className="space-y-2">
                    {project.outcome.map((item, idx) => <li key={idx} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
            </article>)}
        </div>

        {/* More Projects */}
        <div className="animate-fade-in-up animation-delay-400">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">
            More Projects
          </h4>
          <div className="flex flex-wrap gap-3">
            {moreProjects.map(project => <span key={project} className="skill-tag cursor-default">
                {project}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;