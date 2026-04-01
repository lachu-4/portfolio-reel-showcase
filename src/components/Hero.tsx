import { User, Github, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Track rotations: outer ring spins every 20s
    const interval = setInterval(() => {
      setRotationCount(prev => prev + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex items-center justify-center relative overflow-hidden py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main content wrapper */}
          <div className="glass rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div>
              {/* Status badges - slide from left */}
                <div 
                  className={`flex flex-wrap gap-3 mb-8 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    SYSTEM READY
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border hover:border-primary/50 transition-colors">
                    PORTFOLIO 2025
                  </span>
                </div>

                {/* Main heading - slide from right */}
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <span className="inline-block hover:text-primary transition-colors duration-300">Welcome to</span><br />
                  <span className="inline-block hover:scale-105 transition-transform duration-300">my Portfolio</span><br />
                  <span className="inline-block text-gradient">Website</span>
                </h1>

                {/* Description - slide from left */}
                <p 
                  className={`text-muted-foreground mb-8 max-w-md leading-relaxed transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  Building modern, reliable, and fast digital experiences with a focus on clean
                  UI and solid engineering.
                </p>

                {/* Live Status - slide from right */}
                <p 
                  className={`text-primary font-medium mb-4 tracking-wider text-sm transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: '1100ms' }}
                >
                  <span className="animate-pulse">LIVE STATUS</span>
                </p>

                {/* Action buttons - slide from left, each with staggered delay */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="#projects"
                    className={`flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border
                               hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-1000 ease-out group ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ transitionDelay: '1400ms' }}
                  >
                    <Briefcase size={16} className="group-hover:rotate-12 transition-transform" />
                    CODE
                  </a>
                  <a
                    href="#aboutme"
                    className={`flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border
                               hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-1000 ease-out group ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ transitionDelay: '1600ms' }}
                  >
                    <User size={16} className="group-hover:scale-110 transition-transform" />
                    PROFILE
                  </a>
                  <a
                    href="https://github.com/lachu-4/portfolio-reel-showcase.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border
                               hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-1000 ease-out group ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ transitionDelay: '1800ms' }}
                  >
                    <Github size={16} className="group-hover:rotate-[360deg] transition-transform duration-500" />
                    SOURCE
                  </a>
                </div>

              </div>

              {/* Right side - Core UI Widget */}
              <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'
              }`}>
                <div className="relative">
                  {/* Core UI Card */}
                  <div className="glass rounded-2xl p-6 w-80 border border-border hover:border-primary/30 transition-colors duration-500">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 text-sm">
                      <span className="text-muted-foreground tracking-wider">CORE UI</span>
                      <span className="text-primary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        ONLINE
                      </span>
                    </div>

                    {/* Circular widget */}
                    <div className="relative flex items-center justify-center mb-6">
                      {/* Outer ring - rotating slowly */}
                      <div className="w-48 h-48 rounded-full border-2 border-primary/30 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                        {/* Orbiting dots on outer ring - all same size */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                          <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                        </div>
                        <div className="absolute top-1/4 right-0 translate-x-1">
                          <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                        </div>
                        <div className="absolute bottom-1/3 left-0 -translate-x-1">
                          <div className="w-4 h-4 rounded-full bg-primary/80 animate-pulse" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                          <div className="w-4 h-4 rounded-full bg-primary/60 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Middle ring - rotating opposite direction */}
                      <div className="absolute w-36 h-36 rounded-full border border-primary/50 animate-[spin_15s_linear_infinite_reverse]"
                           style={{ boxShadow: 'var(--glow-primary)' }}>
                      </div>
                      
                      {/* Inner circle - static with pulse */}
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center animate-pulse hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-foreground font-bold tracking-widest text-sm">WELCOME</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-colors group">
                        <div className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">{String(rotationCount).padStart(2, '0')}</div>
                        <div className="text-sm text-muted-foreground">Rotations</div>
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-colors group">
                        <div className="text-3xl font-bold mb-1 group-hover:text-primary transition-colors">12ms</div>
                        <div className="text-sm text-muted-foreground">Stable</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
