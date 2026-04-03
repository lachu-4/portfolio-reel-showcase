import { MapPin, Briefcase, Download, Github, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpeg';

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
    <section id="home" ref={sectionRef} className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            {/* Availability badge - slide from left */}
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-sm mb-8 border border-primary/30 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for freelance work
            </span>

            {/* Main heading - slide from right */}
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Hi, I'm Lakshmanan M
            </h2>

            {/* Subtitle - slide from left */}
            <h3
              className={`text-2xl md:text-3xl font-bold text-primary mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Full Stack Developer
            </h3>

            {/* Description - slide from right */}
            <p
              className={`text-muted-foreground mb-8 leading-relaxed max-w-lg transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              I create beautiful, functional, and user-centered digital experiences. With
              2+ years of experience in web Development, I bring ideas to life through
              clean code and thoughtful design.
            </p>

            {/* Status badges - slide from left */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Based in Algeria
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase size={16} className="text-primary" />
                Available Now
              </span>
            </div>

            {/* Action buttons - staggered slide from left */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium
                           hover:opacity-90 transition-all duration-1000 ease-out glow-primary ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <MessageCircle size={18} />
                Hire Me
              </a>
              <a
                href="#"
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border font-medium
                           hover:border-primary/50 hover:bg-primary/10 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social links - slide from left */}
            <div
              className={`flex items-center gap-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '1600ms' }}
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/lachu-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lakshmanan-m-57a3333a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919843454001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Avatar with scale+slide transition */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3" />
              
              {/* Avatar container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border-2 border-primary/30">
                <img 
                  src={profilePhoto} 
                  alt="Lakshmanan M" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/30 rounded-xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-accent/30 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
