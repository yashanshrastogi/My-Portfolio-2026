import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { personalInfo } from '../../data/portfolioData';
import { fadeIn } from '../../constants/variants';

const LeetCodeIcon = (props) => (
  <img src="/images/LeetCode.webp" alt="LeetCode" {...props} />
);

const HackerRankIcon = (props) => (
  <img src="/images/HackerRank.webp" alt="HackerRank" {...props} />
);

const CredlyIcon = (props) => (
  <img src="/images/credly.webp" alt="Credly" {...props} />
);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-fuchsia-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@lets-code404',
      href: personalInfo.social.github,
      color: 'from-slate-600 to-slate-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/yashanshrastogi',
      href: personalInfo.social.linkedin,
      color: 'from-blue-600 to-blue-500'
    },
    {
      icon: CredlyIcon,
      label: 'Credly',
      value: 'View Badges',
      href: personalInfo.social.credly,
      color: 'from-[#FF6B00] to-[#FF8C00] border border-orange-400/20'
    },
    {
      icon: LeetCodeIcon,
      label: 'LeetCode',
      value: '@yashansh_rastogi',
      href: personalInfo.social.leetcode,
      color: 'from-slate-900 to-black border border-white/10'
    },
    {
      icon: HackerRankIcon,
      label: 'HackerRank',
      value: '@YASH_2003',
      href: personalInfo.social.hackerrank,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's connect and discuss opportunities, projects, or just have a chat about technology"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="p-2">
                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
                  Contact Information
                </h3>
                
                <div className="space-y-4 mb-10">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10
                                border border-white/5 hover:border-white/10 transition-all group"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} 
                                      flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-lg text-white font-bold">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links Grid */}
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest opacity-50">Connect Online</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeIn('up', 'spring', index * 0.05, 0.4)}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10
                                border border-white/5 hover:border-white/10 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br ${social.color} 
                                      flex items-center justify-center shadow-lg border border-white/10 group-hover:rotate-6 transition-transform`}>
                        <social.icon className={
                          social.label === 'LeetCode' || social.label === 'HackerRank' || social.label === 'Credly'
                            ? "w-full h-full object-cover"
                            : "w-6 h-6 text-white"
                        } />
                      </div>
                      <div>
                        <p className="text-base font-bold text-white">{social.label}</p>
                        <p className="text-xs font-semibold text-slate-500 group-hover:text-slate-400 transition-colors">{social.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Email Response Box */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassCard className="h-full flex flex-col justify-center min-h-[450px]">
              <div className="p-4 sm:p-10 text-center space-y-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 
                                flex items-center justify-center mb-8 shadow-2xl border border-violet-500/20">
                  <Mail className="w-12 h-12 text-violet-400" />
                </div>
                
                <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">
                  Let's Work Together
                </h3>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-sm mx-auto font-medium">
                  I'm currently open for new opportunities. I respond exclusively via email and will get back to you within <span className="text-white font-bold underline decoration-violet-500/50">24 to 48 hours</span>.
                </p>

                <div className="pt-10 flex flex-col items-center justify-center gap-4 w-full max-w-sm mx-auto">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600
                              hover:from-violet-700 hover:to-purple-700 text-white font-bold text-lg
                              transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-600/40
                              flex items-center justify-center gap-3 btn-glow cursor-pointer"
                  >
                    <Mail className="w-6 h-6" />
                    Send an Email
                  </a>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="w-full py-5 rounded-2xl bg-white/5 hover:bg-violet-500/10 text-white font-bold
                              border border-white/10 hover:border-violet-500/30 transition-all
                              flex items-center justify-center gap-3 group"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-6 h-6 text-slate-400 group-hover:text-violet-400 transition-colors" />
                        <span className="text-slate-300 group-hover:text-violet-300 transition-colors">Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;