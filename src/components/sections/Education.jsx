import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { education } from '../../data/portfolioData';
import { fadeIn } from '../../constants/variants';

const Education = () => {
  return (
    <section id="education" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and qualifications"
        />

        <div className="max-w-4xl mx-auto relative space-y-6">
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 -translate-x-1/2 bg-slate-200 dark:bg-white/10 overflow-hidden">
            <motion.div 
              className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-violet-500 to-transparent shadow-[0_0_20px_rgba(139,92,246,1)]"
              animate={{ top: ['-40px', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <GlassCard className="relative group" hover={true}>
                {/* Timeline indicator */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 
                                hidden md:flex items-center justify-center z-10 pointer-events-none">
                  {/* Pulse Effect */}
                  <div className="absolute w-10 h-10 rounded-full bg-violet-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Outer Ring */}
                  <div className="w-6 h-6 rounded-full border-2 border-violet-500 bg-slate-900 shadow-lg group-hover:border-4 transition-all duration-300" />
                  {/* Inner Dot */}
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,1)] group-hover:scale-125 transition-transform" />
                </div>

                <div className="flex flex-col md:flex-row gap-6 p-2">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                                    bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/20">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">{edu.degree}</h3>
                    <p className="text-lg text-violet-400 font-bold mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed text-base">{edu.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
