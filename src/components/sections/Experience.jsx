import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import RevealOnScroll from '../ui/RevealOnScroll';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section className="relative py-24 md:py-32 bg-dark/50">
      {/* Scroll anchor to offset floating navbar */}
      <div id="experience" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Work Experience" 
          subtitle="Where I've shipped real code."
        />

        <div className="max-w-4xl mx-auto">
          {experience.map((job) => (
            <RevealOnScroll key={job.id}>
              <GlassCard className="relative overflow-hidden mb-6">
                <div className="flex flex-col md:flex-row gap-6 p-2">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 
                                    flex items-center justify-center shadow-lg shadow-violet-500/20">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                        {job.link ? (
                          <a 
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-violet-400 font-bold hover:text-violet-300 transition-colors inline-flex items-center gap-1 group/link"
                          >
                            {job.company}
                            <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-lg text-violet-400 font-bold">{job.company}</p>
                        )}
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 
                                       border border-violet-500/30 text-violet-300 text-sm font-medium">
                        {job.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-slate-300 
                                     border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

