import { Code, Palette, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Creating visually stunning interfaces that users love to interact with.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimizing every aspect for lightning-fast load times and smooth interactions.',
  },
];

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
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image/Avatar area */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">JD</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/30 rounded-xl" />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 5 years of experience in web development, I specialize in building 
                modern, responsive applications using cutting-edge technologies. My approach 
                combines technical expertise with an eye for design to deliver products that 
                not only work flawlessly but also look stunning.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary
                               transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <feature.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
