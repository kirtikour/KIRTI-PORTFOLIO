import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Laptop } from 'lucide-react';
import Certifications from './Certifications';

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-[#00FF66]" />,
      title: 'STHP Merit Scholar',
      description: 'Awarded fully-funded undergraduate scholarship covering tuition, hostel, and stipend.'
    },
    {
      icon: <Laptop className="w-5 h-5 text-[#00FF66]" />,
      title: 'PM Laptop Scheme Awardee',
      description: 'Received for outstanding academic merit and rank in Computer Science department.'
    }
  ];

  const courses = [
    'Data Structures & Algorithms', 'Machine Learning', 'Software Engineering',
    'Database Systems', 'Computer Networks', 'Operating Systems', 'Enterprise App Development', 'Information Security'
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-28 bg-transparent relative scroll-mt-20 border-t border-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* Education */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & Achievements
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Layout: Main Education Card & Coursework / Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Main University card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 bg-[#0a0a0a]/50 backdrop-blur-md border border-zinc-900 rounded-3xl hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-900/60 text-[#00FF66] rounded-2xl">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">Sukkur IBA University</h3>
                  <p className="text-[#00FF66] text-sm font-semibold font-mono">Bachelor of Science in Computer Science</p>
                </div>
              </div>

              {/* CGPA & Year Info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm text-zinc-400 font-semibold font-mono">
                <div>
                  CGPA: <span className="text-[#00FF66] font-bold text-lg">3.68 / 4.00</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 hidden sm:block"></div>
                <div>
                  Period: <span className="text-zinc-200">2022 – 2026</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 hidden sm:block"></div>
                <div>
                  Location: <span className="text-zinc-200">Sukkur, Pakistan</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                A top-tier computer science curriculum with intensive focus on analytical reasoning, software architecture, algorithm design, and modern artificial intelligence methodologies. Mentored peers as an executive member of the CS Society and volunteered in local programming hackathons.
              </p>
            </div>

            {/* Coursework list */}
            <div className="pt-6 border-t border-zinc-900/60">
              <h4 className="flex items-center gap-2 text-zinc-300 font-bold text-xs uppercase tracking-wider mb-4 font-mono">
                <BookOpen className="w-4 h-4 text-zinc-500" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {courses.map(course => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded bg-zinc-900/40 text-zinc-400 text-xs font-medium border border-zinc-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Academic honors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0a0a0a]/50 backdrop-blur-md border border-zinc-900 rounded-3xl hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300 flex-1 flex gap-4"
              >
                <div className="p-3 bg-zinc-900/60 rounded-2xl h-fit shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Embedded Certifications Section */}
        <div className="mt-24 pt-20 border-t border-zinc-900/60">
          <Certifications />
        </div>

      </div>
    </section>
  );
}
