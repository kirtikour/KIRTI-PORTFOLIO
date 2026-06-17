import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, BookOpen, Layers, GraduationCap } from 'lucide-react';
import Skills from './Skills';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

function StatCard({ value, suffix, label, sublabel, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1200; // ms
    const increment = value / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 100) / 100);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayVal = value === 3.68 
    ? count.toFixed(2) 
    : Math.floor(count);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 bg-[#0a0a0a]/50 backdrop-blur-md rounded-2xl border border-zinc-900 hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300 flex flex-col justify-between group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-zinc-900/60 group-hover:bg-[#00FF66]/10 text-zinc-400 group-hover:text-[#00FF66] rounded-xl transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl sm:text-4xl font-mono font-bold text-[#00FF66] tracking-tight mb-1">
          {displayVal}{suffix}
        </div>
        <div className="text-sm font-semibold text-zinc-100 mb-0.5">
          {label}
        </div>
        <div className="text-xs text-zinc-500">
          {sublabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-28 bg-transparent relative scroll-mt-20 border-t border-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* About Me */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Content Body: Profile Pic on Left, Biography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Profile Picture Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer neon green glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#00FF66]/10 blur-xl group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Inner picture card container */}
              <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-800 p-2 shadow-2xl">
                <div className="w-full h-full rounded-[10px] overflow-hidden bg-zinc-950 relative">
                  <img
                    src="/kirtikourpic.png"
                    alt="Kirti Kour Profile"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Subtle neon overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-normal text-zinc-350 leading-relaxed">
              I am a software engineer committed to building high-performance web applications and computer vision models.
            </h3>
            
            <p className="text-zinc-400 leading-relaxed">
              As a Computer Science graduate from Sukkur IBA University, I have spent the past few years mastering the MERN stack while delving deep into Artificial Intelligence. I focus on developing modular, production-ready systems that solve real-world forensic and accessibility problems.
            </p>
            
            <p className="text-zinc-400 leading-relaxed">
              I had the privilege of co-authoring peer-reviewed AI research published at <strong className="text-white">IEEE iCoMET 2026</strong>. I have also built software for production environments during my internships. My academic journey was fully funded through the prestigious <strong className="text-white">STHP Merit Scholar</strong> scheme, and I was honored with the <strong className="text-white">PM Laptop Scheme Award</strong> for academic excellence.
            </p>
            
            <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
              <div>
                <span className="font-semibold text-zinc-300">Based in:</span> Karachi, Pakistan
              </div>
              <div>
                <span className="font-semibold text-zinc-300">Degree:</span> BS Computer Science
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-zinc-900/60">
          <StatCard 
            value={3.68} 
            suffix="" 
            label="CGPA" 
            sublabel="Sukkur IBA University"
            icon={<GraduationCap className="w-5 h-5" />}
          />
          <StatCard 
            value={2} 
            suffix="" 
            label="Internships" 
            sublabel="Elevvo & Sindh Oasis"
            icon={<Briefcase className="w-5 h-5" />}
          />
          <StatCard 
            value={1} 
            suffix="" 
            label="IEEE Publication" 
            sublabel="iCoMET 2026 Conference"
            icon={<BookOpen className="w-5 h-5" />}
          />
          <StatCard 
            value={6} 
            suffix="+" 
            label="Projects Completed" 
            sublabel="AI/ML & MERN Stack"
            icon={<Layers className="w-5 h-5" />}
          />
        </div>

        {/* Embedded Skills Section */}
        <div className="mt-24 pt-20 border-t border-zinc-900/60">
          <Skills />
        </div>

      </div>
    </section>
  );
}
