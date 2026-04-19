import { lazy, Suspense } from 'react';
import FloatingNav from './components/ui/FloatingNav';
import Hero from './components/sections/Hero';
import { useTheme } from './context/ThemeContext';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Education = lazy(() => import('./components/sections/Education'));
const Awards = lazy(() => import('./components/sections/Awards'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

const SectionFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
  </div>
);

function App() {
  const { isDark } = useTheme();

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <FloatingNav />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Awards />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
