import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

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
      title: 'Solar Panel Segmentation via Self Supervised Learning (FYP)',
      featured: true,
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['AI Research', 'Computer Vision', 'Deep Learning'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'Docker'],
      highlight: 'BYOL + UNet won with 93.38% IoU and 96.56% Dice Score',
      description: 'Takes aerial/satellite images as input and automatically detects and segments solar panels draws exact boundaries around them. This can be used for energy planning, identifying rooftops suitable for solar installation, and tracking solar adoption.',
      github: 'https://github.com/orgs/solar-ssl/repositories',
    },
    {
      id: 'chest-xray',
      title: 'Chest XRay Disease Analysis',
      categories: ['AI & Machine Learning'],
      tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
      stack: ['Python', 'PyTorch', 'Django', 'React', 'Pandas'],
      highlight: 'EfficientNetB0 performed best at 74% Macro AUC',
      description: "Takes a chest Xray image and automatically classifies it across 8 diseases simultaneously Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, Pneumothorax. It's multilabel meaning one Xray can show multiple conditions at once.",
      github: 'https://github.com/kirtikour/chest--xray--analysis',
    },
    {
      id: 'braille',
      title: 'Braille Character and Word Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Accessibility', 'AI', 'Computer Vision'],
      stack: ['Python', 'Deep Learning', 'OpenCV', 'Computer Vision'],
      highlight: 'Custom OCR inspired pipeline translating Braille to English',
      description: "Takes an image of Braille text and converts it into readable English text. Works at both character and word level.",
      github: 'https://github.com/kirtikour',
    },
    {
      id: 'handwritten-text',
      title: 'Handwritten Text Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Deep Learning', 'CRNN', 'OCR'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Streamlit'],
      highlight: 'Real-time text extraction using CRNN (CNN + RNN)',
      description: 'Takes an image of handwritten text and converts it to digital text in real time. User uploads an image and gets the extracted text instantly.',
      github: 'https://github.com/kirtikour',
    },
    {
      id: 'healr',
      title: 'HEALR — Medical Drug & Test Search Platform',
      categories: ['Web Development'],
      tags: ['MERN Stack', 'Healthcare', 'Full Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      highlight: 'Full stack MERN application with live search',
      description: 'A healthcare platform where users can search 5,000+ medicines and medical tests, add to cart, and book doctor appointments. Like a medical information hub with appointment scheduling built in.',
      github: 'https://github.com/kirtikour',
      demo: 'https://healr.vercel.app/',
    },
    {
      id: 'jobtracker',
      title: 'JobTracker — Job Application Analytics Platform',
      categories: ['Web Development'],
      tags: ['Productivity', 'Full Stack', 'MERN Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'NLP'],
      highlight: 'NLP based CV parsing & analytical pipeline dashboard',
      description: 'A centralized dashboard to track every job application — status, deadlines, interview dates, outcomes. Automatically parses your CV to fill your profile. Shows analytics on your application pipeline.',
      github: 'https://github.com/kirtikour/jobtracker',
      demo: 'https://jobtracker.vercel.app/',
    },
    {
      id: 'ghar-ka-khazana',
      title: 'Ghar-Ka-Khazana — ECommerce Platform',
      categories: ['Web Development'],
      tags: ['E-Commerce', 'Vue.js', 'Full Stack'],
      stack: ['Vue.js 3', 'Pinia', 'Node.js', 'Express.js', 'MongoDB'],
      highlight: 'Vue.js 3 Composition API & Pinia state management',
      description: 'A complete online storefront for a homemade pickle business. Customers can browse products, add to cart, place orders. Admin can manage inventory, add/edit products, track orders.',
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
