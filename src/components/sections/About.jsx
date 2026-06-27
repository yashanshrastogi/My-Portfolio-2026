import { useState, useEffect, useRef } from 'react';
import { Brain, Cloud, Code, Cpu } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import RevealOnScroll from '../ui/RevealOnScroll';

// Animated counter hook
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const numericEnd = parseInt(end, 10);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericEnd));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems with TensorFlow, PyTorch, and scikit-learn'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Creating responsive web applications with React, Next.js, and modern frameworks'
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'Deploying scalable solutions on Google Cloud Platform'
    },
    {
      icon: Cpu,
      title: 'Systems & Automation',
      description: 'Building offline voice interfaces and multi-threaded automation pipelines'
    }
  ];

  const projectsStat = useCountUp(3);
  const yearsStat = useCountUp(1);
  const awardsStat = useCountUp(2);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="CS student. Internship experience. 3 shipped projects."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <RevealOnScroll>
            <GlassCard className="h-full">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="gradient-text">Software Engineer</span>
                </h3>
                
                <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
                  <p>
                    I'm Yashansh Rastogi, a B.Tech Computer Science & IT student at Dr. APJ Abdul Kalam 
                    Technical University, passionate about building scalable, production-ready software 
                    that solves real problems.
                  </p>
                  <p>
                    My journey started with competitive programming in C++, giving me a strong foundation 
                    in Data Structures & Algorithms. Today I build full-stack applications and AI-powered 
                    systems — from geolocation-based platforms to offline voice interfaces.
                  </p>
                  <p>
                    I believe in learning by building. Whether integrating local LLMs for privacy-first 
                    automation or shipping production apps on Vercel and GCP, I turn complex ideas into 
                    working software.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center" ref={projectsStat.ref}>
                    <div className="text-3xl font-bold gradient-text">{projectsStat.count}+</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Projects</div>
                  </div>
                  <div className="text-center" ref={yearsStat.ref}>
                    <div className="text-3xl font-bold gradient-text">{yearsStat.count}+</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Years Exp</div>
                  </div>
                  <div className="text-center" ref={awardsStat.ref}>
                    <div className="text-3xl font-bold gradient-text">{awardsStat.count}</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Awards</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Right Column - Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <RevealOnScroll key={interest.title}>
                <GlassCard className="h-full group" hover={true}>
                  <div className="p-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 
                                    flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <interest.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
