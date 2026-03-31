import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Blood Donor Collection App',
    description: 'A campus blood drive management app for collecting and organizing blood donor information.',
    tags: ['React', 'Remix', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/remix-of-campus-blood-drive.git',
    live: 'https://blodd-donour.vercel.app/',
  },
  {
    title: 'Cyber WHOIS',
    description: 'A cybersecurity tool that collects and displays WHOIS information about any domain.',
    tags: ['React', 'API', 'Cybersecurity'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/Cyber-WHOIS.git',
    live: 'https://cyber-whois.vercel.app/',
  },
  {
    title: 'ATS Resume Checker',
    description: 'Application Tracking System that analyzes and scores uploaded resumes for ATS compatibility.',
    tags: ['React', 'AI', 'Resume Parser'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/Application-Tracking-System.git',
    live: 'https://atspro-two.vercel.app/',
  },
  {
    title: 'To-Do List',
    description: 'A clean and functional to-do list application for managing daily tasks efficiently.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/console-todo.git',
    live: 'https://to-do-list-red-rho-73.vercel.app/',
  },
  {
    title: 'Onion Marketing',
    description: 'A marketing website for onion products with modern UI and responsive design.',
    tags: ['React', 'TailwindCSS', 'Marketing'],
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/onion-marketing-.git',
    live: 'https://onion-marketing.vercel.app/',
  },
  {
    title: 'Calculator App',
    description: 'A sleek calculator application with standard arithmetic operations and clean interface.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop',
    github: 'https://github.com/lachu-4/Calculator.git',
    live: 'https://calculator-theta-liard-60.vercel.app/',
  },
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A selection of my recent work showcasing my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Overlay links */}
                  <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
