import { Mail, Phone, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: personalInfo.twitter,
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: personalInfo.facebook,
    },
  ];

  return (
    <section id="contact" className="slide-section pb-24 sm:pb-16">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
            Ready to boost your search visibility and drive measurable results? Let's connect and discuss your project.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 glow-effect animate-fade-in-up animation-delay-100">
          {/* Primary Contact */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30 hover:from-primary/30 hover:to-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-medium text-sm sm:text-base break-all">{personalInfo.email}</div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30 hover:from-primary/30 hover:to-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Phone</div>
                <div className="text-foreground font-medium text-sm sm:text-base">{personalInfo.phone}</div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-6 sm:pt-8">
            <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Find me on</div>
            <div className="flex justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 animate-fade-in-up animation-delay-200">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Send Me a Message
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-xs sm:text-sm text-muted-foreground animate-fade-in-up animation-delay-300">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
