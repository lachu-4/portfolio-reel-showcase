import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Palette, Rocket, ShoppingCart, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'I create responsive, modern websites using the latest technologies and best practices. From concept to deployment, I ensure your website looks great and performs perfectly.',
    tags: ['Responsive Design', 'Performance Optimized', 'SEO Friendly'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications that work seamlessly on both iOS and Android devices using modern frameworks and tools.',
    tags: ['Cross-Platform', 'Native Performance', 'User-Friendly'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces that provide exceptional user experiences. I focus on usability, accessibility, and visual appeal.',
    tags: ['User-Centered', 'Modern Design', 'Accessibility'],
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Optimizing websites and applications for speed, scalability, and reliability. I ensure your digital products perform at their best under any conditions.',
    tags: ['Speed Optimization', 'Scalable Architecture', 'Load Testing'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Building secure and efficient e-commerce platforms that drive sales and provide excellent shopping experiences for your customers.',
    tags: ['Secure Payments', 'Inventory Management', 'Analytics'],
  },
  {
    icon: Settings,
    title: 'API Development',
    description: 'Creating robust and scalable APIs that power your applications. I build RESTful and GraphQL APIs with proper documentation and testing.',
    tags: ['RESTful APIs', 'GraphQL', 'Documentation'],
  },
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-32 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">OUR</span> Features & <span className="text-gradient">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative glass rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:glow-primary"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
