import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Lightbulb, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  {
    icon: Briefcase,
    title: 'Cross-Industry Experience',
    description: 'Before web development, I was an IT Consultant, Ecommerce Business Owner, and Digital Marketer. My background gives me a unique perspective on building user-focused solutions.',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'For me, it\'s important to know all sides of the web development process. I\'ll learn whatever technology will help me build apps that improve lives.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'I focus on creating intuitive and visually appealing interfaces using Figma and Adobe XD, ensuring every design is both beautiful and functional.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'I approach every project with a problem-solving mindset, breaking down complex challenges into manageable solutions that deliver real value.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'I thrive in team environments and enjoy working with designers, developers, and stakeholders to bring projects to successful completion.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I\'m committed to staying current with the latest frameworks, tools, and best practices in web development.',
  },
];

const SkillsExpertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skillsexpertise" ref={sectionRef} className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Card Layout */}
          <div className="grid gap-6 max-w-6xl mx-auto grid-cols-3">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="glass rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 text-center group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
