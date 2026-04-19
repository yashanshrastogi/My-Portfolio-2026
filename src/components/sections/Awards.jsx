import { motion } from 'framer-motion';
import { Trophy, Rocket, Award, ExternalLink, Cloud, Brain } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { awards, certifications } from '../../data/portfolioData';
import { fadeIn } from '../../constants/variants';

const Awards = () => {
  const getIcon = (iconName) => {
    const icons = {
      trophy: Trophy,
      rocket: Rocket,
    };
    return icons[iconName] || Award;
  };

  const getColorClass = (color) => {
    const colors = {
      yellow: 'from-yellow-500 to-orange-500',
      blue: 'from-blue-500 to-cyan-500',
    };
    return colors[color] || 'from-violet-500 to-purple-500';
  };

  return (
    <section id="awards" className="relative py-20 md:py-32 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Awards & Certifications" 
          subtitle="Recognition for my achievements and continuous learning"
        />

        {/* Awards Section with Badge Images */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 tracking-tight">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Awards & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = getIcon(award.icon);
              return (
                <motion.div
                  key={award.id}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full" hover={true}>
                    <div className="flex flex-col sm:flex-row gap-6 p-2">
                      {/* Badge Image or Icon */}
                      <div className="flex-shrink-0">
                        {award.image ? (
                          <motion.div 
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden 
                                      bg-white/5 border border-white/10 flex items-center justify-center shadow-inner"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img 
                              src={award.image} 
                              alt={award.title}
                              className="w-full h-full object-contain p-2"
                              loading="lazy"
                            />
                          </motion.div>
                        ) : (
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getColorClass(award.color)}
                                          flex items-center justify-center shadow-lg shadow-violet-500/20`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-xl font-bold text-white leading-tight">{award.title}</h4>
                          <span className="text-sm font-semibold text-slate-500 shrink-0">{award.year}</span>
                        </div>
                        <p className="text-lg text-violet-400 font-bold mb-3">{award.organization}</p>
                        <p className="text-slate-400 text-base leading-relaxed">{award.description}</p>
                        
                        {award.verificationLink && (
                          <a
                            href={award.verificationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-violet-400 
                                      hover:text-violet-300 transition-colors group/link"
                          >
                            Verify Badge
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section with Badge Images */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 tracking-tight">
            <Award className="w-8 h-8 text-violet-500" />
            Certifications
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <GlassCard className="h-full" hover={true}>
                  <div className="p-2 flex flex-col h-full">
                    {/* Badge Image for IBM Cert */}
                    {cert.image && (
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-[115%] h-[115%] max-w-none object-cover"
                            loading="lazy"
                          />
                        </motion.div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-slate-500">{cert.year}</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-violet-400">{cert.type}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Icon and Year */}
                    {!cert.image && (
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                          {cert.organization.includes('Google') ? (
                            <Cloud className="w-5 h-5 text-blue-400" />
                          ) : cert.organization.includes('Microsoft') ? (
                            <Brain className="w-5 h-5 text-blue-400" />
                          ) : (
                            <Award className="w-5 h-5 text-violet-400" />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-slate-500">{cert.year}</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-violet-400">{cert.type}</span>
                        </div>
                      </div>
                    )}
                    
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-violet-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-bold text-violet-400 mb-4">{cert.organization}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-bold rounded-md bg-white/5 text-slate-400 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {cert.verificationLink && (
                      <div className="mt-auto pt-2">
                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-violet-400 
                                    hover:text-violet-300 transition-colors group/link"
                        >
                          {cert.verificationLink.includes('credly') ? 'Verify on Credly' :
                           cert.verificationLink.includes('coursera') ? 'Verify on Coursera' :
                           cert.verificationLink.includes('skills.google') ? 'View on Google Skills' :
                           cert.verificationLink.includes('learn.microsoft') ? 'View on Microsoft Learn' :
                           'Verify Certificate'}
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
