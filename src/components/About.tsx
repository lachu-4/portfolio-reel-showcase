import { MapPin, Briefcase, Download, Github, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Content */}
            <div>
              {/* Availability badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-sm mb-8 border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for freelance work
              </span>

              {/* Main heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm Amine
              </h2>

              {/* Subtitle */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Frontend Developer
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
                I create beautiful, functional, and user-centered digital experiences. With
                2+ years of experience in web Development, I bring ideas to life through
                clean code and thoughtful design.
              </p>

              {/* Status badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  Based in Algeria
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase size={16} className="text-primary" />
                  Available Now
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium
                             hover:opacity-90 transition-all duration-300 glow-primary"
                >
                  <MessageCircle size={18} />
                  Hire Me
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border font-medium
                             hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground">Follow me:</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Avatar */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3" />
                
                {/* Avatar container */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border-2 border-primary/30">
                  {/* Placeholder avatar - anime style silhouette */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-secondary">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                        <span className="text-4xl font-bold">A</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/30 rounded-xl" />
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-accent/30 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
