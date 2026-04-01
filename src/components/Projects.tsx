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
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">PROJECTS</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects demonstrating expertise in full-stack development, modern frameworks, and creative problem-solving.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-primary/40 p-4 hover:border-primary/70 transition-colors duration-300"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease'
                }}
              >
                {/* Rounded image preview */}
                <div className="relative mx-auto w-full max-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500 bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="mt-5 text-center px-2">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full border border-border/60 text-muted-foreground bg-muted/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2 text-sm rounded-full bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30 transition-colors duration-300"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-5 py-2 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
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
