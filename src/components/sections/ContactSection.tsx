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
    <section id="contact" className="slide-section">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to boost your search visibility and drive measurable results? Let's connect and discuss your project.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 glow-effect animate-fade-in-up animation-delay-100">
          {/* Primary Contact */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-medium">{personalInfo.email}</div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="text-foreground font-medium">{personalInfo.phone}</div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-8">
            <div className="text-sm text-muted-foreground mb-6">Find me on</div>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 animate-fade-in-up animation-delay-200">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-lg px-8 py-4"
          >
            Send Me a Message
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground animate-fade-in-up animation-delay-300">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
