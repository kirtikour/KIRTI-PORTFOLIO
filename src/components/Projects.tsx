import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Code, Cpu, Eye, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  featured?: boolean;
  categories: ('Web Development' | 'AI & Machine Learning' | 'Computer Vision' | 'Java')[];
  tags: string[];
  stack: string[];
  highlight: string;
  description: string;
  github: string;
  demo?: string;
}

interface ProjectsProps {
  setActiveSection: (section: string) => void;
  setSelectedProjectId: (id: string) => void;
}

export default function Projects({ setActiveSection, setSelectedProjectId }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Web Development' | 'AI & Machine Learning'>('All');

  const categories: ('All' | 'Web Development' | 'AI & Machine Learning')[] = [
    'All',
    'Web Development',
    'AI & Machine Learning'
  ];

  const projects: Project[] = [
    {
      id: 'solar',
      title: 'Solar Panel Segmentation',
      featured: true,
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['AI Research', 'Computer Vision', 'Deep Learning'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'Docker'],
      highlight: '93.38% IoU & 96.56% Dice Score via BYOL + U-Net',
      description: 'Automatically detects and segments solar panels from aerial/satellite images using self-supervised learning to assist in solar energy mapping.',
      github: 'https://github.com/orgs/solar-ssl/repositories',
    },
    {
      id: 'chest-xray',
      title: 'Chest X-Ray Disease Analysis',
      categories: ['AI & Machine Learning'],
      tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
      stack: ['Python', 'PyTorch', 'Django', 'React', 'Pandas'],
      highlight: 'Multi-label classification of 8 thoracic diseases with 74% Macro AUC',
      description: 'An AI-powered medical image analysis system that automatically classifies chest X-rays across 8 diseases simultaneously to assist in early detection.',
      github: 'https://github.com/kirtikour/chest--xray--analysis',
    },
    {
      id: 'braille',
      title: 'Braille Character & Word Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Accessibility', 'AI', 'Computer Vision'],
      stack: ['Python', 'Deep Learning', 'OpenCV', 'Computer Vision'],
      highlight: 'OCR-inspired dot detection and translation pipeline',
      description: 'An accessibility-focused AI system that processes images of Braille text and translates them into readable English text at character and word levels.',
      github: 'https://github.com/kirtikour',
    },
    {
      id: 'handwritten-text',
      title: 'Handwritten Text Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Deep Learning', 'CRNN', 'OCR'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Streamlit'],
      highlight: 'Real-time text extraction using CRNN (CNN + RNN)',
      description: 'An end-to-end CRNN pipeline that takes images of handwritten text and converts them to digital text in real-time, deployed as a Streamlit web app.',
      github: 'https://github.com/kirtikour',
    },
    {
      id: 'healr',
      title: 'HEALR — Medical Search Platform',
      categories: ['Web Development'],
      tags: ['MERN Stack', 'Healthcare', 'Full Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      highlight: 'Full-stack medical hub with 5,000+ items and instant search',
      description: 'A healthcare portal where users can search 5,000+ medicines/tests, manage a shopping cart, and schedule doctor appointments with doctor profiles.',
      github: 'https://github.com/kirtikour',
      demo: 'https://healr.vercel.app/',
    },
    {
      id: 'jobtracker',
      title: 'JobTracker — Analytics Platform',
      categories: ['Web Development'],
      tags: ['Productivity', 'Full Stack', 'MERN Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'NLP'],
      highlight: 'NLP CV parser and analytical application pipeline tracking',
      description: 'A career management platform that helps users organize and monitor job applications, interview schedules, and hiring progress.',
      github: 'https://github.com/kirtikour/jobtracker',
      demo: 'https://jobtracker.vercel.app/',
    },
    {
      id: 'ghar-ka-khazana',
      title: 'Ghar-Ka-Khazana — ECommerce',
      categories: ['Web Development'],
      tags: ['E-Commerce', 'Vue.js', 'Full Stack'],
      stack: ['Vue.js 3', 'Pinia', 'Node.js', 'Express.js', 'MongoDB'],
      highlight: 'Pickle e-commerce store with Vue 3, Pinia, Node, and Express',
      description: 'A complete e-commerce storefront for a homemade pickle business, with a product catalog, shopping cart, and admin inventory control.',
      github: 'https://github.com/kirtikour/ghar-ka-khazana',
      demo: 'https://ghar-ka-khazana.vercel.app/',
    }
  ];

  const filteredProjects = activeTab === 'All'  
    ? projects 
    : projects.filter(p => p.categories.includes(activeTab as any));

  const handleCardClick = (id: string) => {
    setSelectedProjectId(id);
    setActiveSection('project-details');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 bg-transparent relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* Selected Work */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Engineered Projects
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none font-semibold ${
                  isActive
                    ? 'border-[#00FF66]/30 bg-[#00FF66]/5 text-[#00FF66]'
                    : 'border-zinc-900 bg-[#0a0a0a]/30 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Primary Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                onClick={() => handleCardClick(project.id)}
                whileHover={{ y: -6 }}
                className={`flex flex-col bg-[#0a0a0a]/50 backdrop-blur-md rounded-3xl border overflow-hidden transition-all duration-300 group cursor-pointer select-none ${
                  project.featured 
                    ? 'border-[#00FF66]/30 hover:border-[#00FF66]/50 shadow-lg shadow-[#00FF66]/5' 
                    : 'border-zinc-900 hover:border-[#00FF66]/30'
                }`}
              >
                {/* Header Info */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category tags / Featured mark */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.categories.map(cat => (
                          <span 
                            key={cat}
                            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#00FF66]/80 font-mono"
                          >
                            {cat === 'Web Development' ? <Code className="w-3.5 h-3.5" /> : cat === 'AI & Machine Learning' ? <Cpu className="w-3.5 h-3.5" /> : cat === 'Java' ? <Layers className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            {cat}
                          </span>
                        ))}
                      </div>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded-full border border-[#00FF66]/20 font-mono shrink-0">
                          <Star className="w-3 h-3 fill-[#00FF66]" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00FF66] transition-colors duration-250 mb-3 flex items-center justify-between">
                      {project.title}
                      <ArrowRight className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-2" />
                    </h3>

                    {/* Highlight metrics badge */}
                    <div className="flex items-start gap-2 p-3 bg-zinc-900/40 rounded-xl border border-zinc-850 text-xs text-zinc-300 font-semibold mb-6">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0 mt-0.5" />
                      <div>{project.highlight}</div>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.stack.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 rounded bg-zinc-900/60 text-zinc-400 text-[10px] font-semibold font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer hint bar */}
                <div className="px-6 py-4 bg-zinc-900/20 border-t border-zinc-900/50 flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span className="group-hover:text-[#00FF66] transition-colors font-bold">View Details &gt;&gt;</span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#00FF66] hover:text-[#00E55C] transition-colors flex items-center gap-1 font-bold z-20"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View More on GitHub Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/kirtikour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-200 hover:text-white font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 hover:shadow-lg transition-all duration-200 cursor-pointer font-mono text-sm"
          >
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
