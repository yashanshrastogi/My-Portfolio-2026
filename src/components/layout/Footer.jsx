import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark/80 backdrop-blur-md border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-3xl font-bold gradient-text font-display mb-6 block w-fit hover:scale-105 transition-transform"
            >
              {personalInfo.name}
            </a>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              {personalInfo.footerTagline}
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center 
                             text-slate-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative px-4 py-2 rounded-full text-slate-400 hover:text-white font-bold transition-all duration-300 block w-fit"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                                  bg-gradient-to-b from-violet-600/20 via-violet-500/50 to-violet-600/20 
                                  border border-violet-500/40 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Status */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Current Status</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                Available for New Roles
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-bold">
            © {currentYear} Yashansh Rastogi
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>using React & Modern CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

