import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Database } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { fadeIn } from '../../constants/variants';

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
      description: 'Creating responsive web applications with React, Node.js, and modern frameworks'
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'Deploying scalable solutions on Google Cloud Platform'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Designing robust APIs and database architectures with Node.js and MongoDB'
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Passionate about building innovative solutions that make a difference"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Student Developer & <span className="gradient-text">AI Enthusiast</span>
                </h3>
                
                <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
                  <p>
                    I'm Yashansh Rastogi, a B.Tech Computer Science & IT student at Dr. APJ Abdul Kalam 
                    Technical University with a passion for building real-world projects that solve 
                    meaningful problems.
                  </p>
                  <p>
                    My journey in tech started with competitive programming in C++, which gave me a 
                    strong foundation in Data Structures & Algorithms. Today, I focus on creating 
                    AI-driven applications, from voice-controlled OS interfaces to generative AI 
                    tools deployed on cloud platforms.
                  </p>
                  <p>
                    I believe in learning by building. Whether it's integrating local LLMs for 
                    privacy-first automation or developing ML models for computer vision tasks, 
                    I enjoy turning complex concepts into practical solutions.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">6+</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">1+</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">3</div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500">Awards</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
