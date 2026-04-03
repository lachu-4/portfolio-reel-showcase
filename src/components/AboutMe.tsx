import { useEffect, useRef, useState } from 'react';
import aboutMePhoto from '@/assets/about-me-photo.jpg';

const AboutMe = () => {
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

  const skills = [
    "Figma and Adobe XD for UI/UX design",
    "HTML, CSS, JavaScript, and Tailwind CSS for frontend development",
    "Building personal projects and exploring new web technologies to expand my portfolio"
  ];

  return (
    <section id="aboutme" ref={sectionRef} className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile badge - slide from left */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                src={aboutMePhoto} 
                alt="Lakshmanan M" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">@lakshmanan</p>
              <p className="text-primary font-medium">Web Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {/* Left side - Content (2 columns) */}
            <div className="col-span-2">
              {/* Section title - slide from right */}
              <h2
                className={`text-4xl md:text-5xl font-bold mb-8 tracking-wide transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="text-gradient">ABOUT ME</span>
              </h2>

              {/* Main paragraphs - slide from left */}
              <div
                className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <p>
                  Hi! I'm <span className="text-foreground font-medium">Lakshmanan M</span>, a passionate and creative Web Developer.
                </p>
                <p>
                  I'm a B.Tech Information Technology student at CMS College of Engineering, Coimbatore, where I've developed a strong interest in designing intuitive and visually appealing user interfaces that bring ideas to life on the web.
                </p>
                <p>
                  I focus on modern web design, responsive layouts, and interactive user experiences that balance aesthetics with functionality.
                </p>
                <p className="text-foreground">
                  Currently, I'm focusing on improving my skills in:
                </p>

                {/* Skills list */}
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <li 
                      key={index}
                      className={`flex items-start gap-2 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 800}ms` }}
                    >
                      <span className="text-primary font-bold mt-1">#</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  I'm always eager to learn, collaborate, and grow as a developer while building impactful and innovative projects.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div
              className={`flex justify-center items-center transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="relative group">
                {/* Glow effect behind */}
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-60" />
                
                {/* Card */}
                <div className="relative transition-transform duration-500">
                  {/* Corner brackets */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary/60" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary/60" />
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary/60" />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary/60" />
                  
                  {/* Image container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-secondary shadow-[0_0_30px_rgba(var(--primary-rgb,255,0,100),0.3)]">
                    <img 
                      src={aboutMePhoto} 
                      alt="Lakshmanan M" 
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-4 -right-4 w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
                <div className="absolute -top-6 -left-2 w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
