import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveSection('projects');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start overflow-hidden pt-28 pb-16 bg-transparent"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 text-left">
        
        {/* Neon green comment block: Software Engineer */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[#00FF66] text-sm sm:text-base font-semibold mb-6 tracking-wide select-none"
        >
          {`/* Software Engineer */`}
        </motion.div>

        {/* Heading: Hi, I'm Kirti Kour. */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-2"
        >
          Hi, I'm Kirti Kour.
        </motion.h1>

        {/* Subtitle: Software Engineer & Developer */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-500 leading-[1.1] mb-8"
        >
          Software Engineer & Developer.
        </motion.h2>

        {/* Tagline Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg sm:text-xl text-zinc-400 font-medium tracking-normal mb-10 leading-relaxed"
        >
          I specialize in building web applications with the MERN stack and developing practical AI/ML computer vision solutions.
        </motion.p>

        {/* CTA Buttons: View Work & Download Resume */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold rounded-lg shadow-lg hover:shadow-[#00FF66]/20 transition-all duration-200 cursor-pointer group"
          >
            View Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="/Kirti_Kour_Resume.pdf"
            download="Kirti_Kour_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-200 hover:text-white font-bold rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-200 cursor-pointer shadow-lg font-mono text-sm group"
          >
            Download Resume
            <Download className="w-4.5 h-4.5 text-zinc-400 group-hover:text-[#00FF66] transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom mesh glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-emerald-500/5 blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}
