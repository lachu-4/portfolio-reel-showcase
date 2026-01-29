import { useEffect, useRef, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpeg';

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
    "Web Development (HTML, CSS, JavaScript)",
    "Backend & Full-Stack Technologies",
    "AI-powered and real-time applications",
    "Problem-solving and logical thinking"
  ];

  return (
    <section id="aboutme" ref={sectionRef} className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Profile badge - top left */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                <img 
                  src={profilePhoto} 
                  alt="Lakshmanan M" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">@lakshmanan</p>
                <p className="text-primary font-medium">Full Stack Developer</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left side - Content (2 columns) */}
              <div className="lg:col-span-2">
                {/* Section title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
                  <span className="text-gradient">ABOUT ME</span>
                </h2>

                {/* Main paragraphs */}
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Hi! I'm <span className="text-foreground font-medium">Lakshmanan M</span>, a passionate and motivated B.Tech Information Technology student from Tiruvannamalai, Tamil Nadu. I completed my schooling at Bhagavan Higher Secondary School and I'm currently pursuing my degree at CMS College of Engineering, Coimbatore.
                  </p>
                  
                  <p>
                    I have a strong interest in software development and modern web technologies, and I enjoy building clean, user-friendly, and efficient applications. I love turning ideas into real-world digital solutions through code.
                  </p>
                  
                  <p>
                    I'm continuously learning and exploring new technologies, especially in full-stack development and AI-based applications, and I enjoy working on projects that solve real problems and improve user experience.
                  </p>
                  
                  <p className="text-foreground">
                    Currently, I'm focusing on improving my skills in:
                  </p>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {skills.map((skill, index) => (
                      <li 
                        key={index}
                        className={`flex items-center gap-3 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${index * 100 + 400}ms` }}
                      >
                        <span className="text-primary font-bold">#</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-4">
                    I'm always eager to learn, collaborate, and grow as a developer while building impactful and innovative projects.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative border */}
                  <div className="absolute -inset-2 border-2 border-primary/30 rounded-xl transform rotate-3" />
                  <div className="absolute -inset-2 border-2 border-primary/20 rounded-xl transform -rotate-2" />
                  
                  {/* Image container */}
                  <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-secondary">
                    <img 
                      src={profilePhoto} 
                      alt="Lakshmanan M" 
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-primary/40 animate-pulse" />
                  <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
