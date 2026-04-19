import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Brain, Cloud } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/portfolioData';
import { fadeIn } from '../../constants/variants';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: skills.languages,
      color: 'from-blue-500 to-violet-500',
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: skills.frontend,
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [...skills.backend, ...skills.database],
      color: 'from-purple-500 to-fuchsia-500',
    },
    {
      title: 'AI / ML',
      icon: Brain,
      skills: skills.ai_ml,
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: skills.cloud_tools,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="Technologies I work with to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeIn('up', 'spring', categoryIndex * 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <GlassCard className="h-full group" hover={true}>
                <div className="p-2">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg shadow-violet-500/10`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-400 transition-colors tracking-tight">{category.title}</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Core Strengths Summary */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlassCard className="text-center">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Core Strengths
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Problem Solving', 'System Design', 'API Development', 'Cloud Deployment', 'Machine Learning', 'Full Stack Development'].map((strength, index) => (
                  <motion.span
                    key={strength}
                    variants={fadeIn('up', 'spring', index * 0.05, 0.4)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 
                              border border-violet-500/30 text-violet-300 text-sm font-bold uppercase tracking-wider"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
