import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  skills: string[];
}

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const experiences: ExperienceItem[] = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Elevvo',
      location: 'Remote / Pakistan',
      period: '2025',
      points: [
        'Built JobTracker: a full-stack MERN job application platform with automated CV parsing, KPI dashboards, and JWT authentication delivered as part of production internship work.',
        'Integrated RESTful APIs across multiple production modules, streamlining third-party data ingestion and enabling real-time data flow.',
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'NLP', 'Data Integration'],
    },
    {
      role: 'Web Developer Intern',
      company: 'Sindh Empowered Oasis',
      location: 'Sindh, Pakistan',
      period: '2024',
      points: [
        'Developed and maintained 2 responsive WordPress websites with custom themes and plugins, collectively supporting 500+ weekly active users.',
        'Optimized database queries and front-end performance, reducing page load times by 20%.',
      ],
      skills: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'MySQL', 'Responsive Design', 'SEO'],
    },
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-28 bg-transparent relative scroll-mt-20 border-t border-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* Experience */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-zinc-800 pl-8 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] top-1.5 w-8 h-8 rounded-full bg-[#080808] border border-[#00FF66] flex items-center justify-center text-[#00FF66] shadow-sm">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Main Card */}
              <div className="p-8 sm:p-10 bg-[#0a0a0a]/50 backdrop-blur-md border border-zinc-900 rounded-3xl hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-[#00FF66] font-semibold text-sm font-mono">{exp.company}</div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 font-medium font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="list-disc list-outside ml-4 text-zinc-300 space-y-2 mb-6 text-sm sm:text-base leading-relaxed">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-zinc-900/40 text-zinc-400 border border-zinc-800 text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
