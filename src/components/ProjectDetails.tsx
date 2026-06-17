import { ArrowLeft, ExternalLink, Code, Cpu, Eye, CheckCircle2, ShieldCheck, Database, Layers } from 'lucide-react';

const Github = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  categories: string[];
  tags: string[];
  stack: string[];
  highlight: string;
  overview: string;
  problem: string;
  solution: string;
  challenges: string[];
  github: string;
  demo?: string;
}

interface ProjectDetailsProps {
  projectId: string | null;
  onBack: () => void;
}

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const projects: Record<string, Project> = {
    solar: {
      id: 'solar',
      title: 'Solar Panel Segmentation using Self-Supervised Learning',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['AI Research', 'Computer Vision', 'Deep Learning'],
      stack: ['Python', 'PyTorch/TensorFlow', 'OpenCV', 'Deep Learning', 'Computer Vision'],
      highlight: '93.38% IoU, 96.56% Dice Score via BYOL + U-Net',
      overview: 'Developed a deep learning system for automatic solar panel segmentation from aerial and satellite imagery using self-supervised learning techniques. The model learns meaningful visual representations from unlabeled data, reducing annotation requirements while achieving accurate panel detection and segmentation.',
      problem: 'Supervised image segmentation models for remote sensing require extensive pixel-level annotations, which are expensive and slow to acquire. Models trained on small annotated datasets suffer from poor generalizability.',
      solution: 'Developed a hybrid self-supervised framework. First, pre-trained encoders using BYOL on 10,000+ unlabelled solar images to learn strong spatial abstractions. Then, fine-tuned a U-Net decoder on a small fraction of annotated images, yielding high-fidelity boundaries and superior segmentation IoU.',
      challenges: [
        'Implemented a multi-service Docker container pipeline separating the inference runner from the web API to avoid GPU memory conflicts.',
        'Benchmarked and compared 5 distinct self-supervised encoders to evaluate inductive biases in remote sensing environments.',
        'Optimized model loaders to cache weights in memory, reducing prediction latency to <180ms.'
      ],
      github: 'https://github.com/orgs/solar-ssl/repositories',
    },
    'chest-xray': {
      id: 'chest-xray',
      title: 'Chest X-Ray Analysis & Classification',
      categories: ['AI & Machine Learning'],
      tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
      stack: ['Python', 'TensorFlow/PyTorch', 'OpenCV', 'CNNs'],
      highlight: 'Abnormalities detection & disease classification in healthcare environments',
      overview: 'Built an AI-powered medical image analysis system capable of identifying abnormalities from chest X-ray images. The project applies deep learning techniques to assist in early disease detection and improve diagnostic efficiency in healthcare environments. Medical image analysis and chest X-ray classification are common applications of deep learning in healthcare.',
      problem: 'Diagnostic screening of chest X-rays suffers from high workload demands and subjective variability among practitioners, resulting in potential delays in critical care.',
      solution: 'Developed a deep convolutional neural network (CNN) classifier capable of segmenting and classifying medical imagery into target thoracic disease categories with high sensitivity.',
      challenges: [
        'Managed class imbalance in public datasets (e.g. ChestX-ray14) using weighted focal loss algorithms.',
        'Utilized transfer learning with pre-trained EfficientNet backbones to optimize gradient convergence.',
        'Generated saliency heatmaps using Grad-CAM to visualize model prediction areas for medical validation.'
      ],
      github: 'https://github.com/kirtikour/chest--xray--analysis',
    },
    healr: {
      id: 'healr',
      title: 'Healr (Oladoc-Inspired Healthcare Platform)',
      categories: ['Web Development'],
      tags: ['MERN Stack', 'Healthcare', 'Full Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      highlight: 'Patient and doctor authentication, booking, and search filtering',
      overview: 'A full-stack healthcare appointment platform inspired by Oladoc that connects patients with doctors. Users can search healthcare professionals, book appointments, manage profiles, and track appointment history through a modern MERN dashboard.',
      problem: 'Inefficient administrative workflows and scheduling siloes make it difficult for patients to quickly search for doctors, view schedules, and log appointment bookings.',
      solution: 'Engineered a MERN portal featuring dynamic search queries using MongoDB indexing, a secure role-based JSON Web Token (JWT) auth system, and appointment management portals for both doctors and patients.',
      challenges: [
        'Optimized text search queries over databases, retrieving indexed clinical specialties in less than 50ms.',
        'Constructed a reservation locking mechanism on the server to prevent schedule overlap conflicts.',
        'Implemented state management using React Context API to manage user authentication and session histories.'
      ],
      github: 'https://github.com/kirtikour',
      demo: 'https://healr.vercel.app/',
    },
    'ghar-ka-khazana': {
      id: 'ghar-ka-khazana',
      title: 'Ghar Ka Khazana — E-Commerce Portal',
      categories: ['Web Development'],
      tags: ['E-Commerce', 'MERN Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      highlight: 'Fulfillment workflow, responsive cart, and inventory monitoring',
      overview: 'A full-stack e-commerce platform developed for a local homemade pickle business. The system enables customers to browse products, manage carts, place orders, and provides administrators with inventory and product management capabilities.',
      problem: 'Local cottage food businesses frequently rely on manual order intake (social media DMs), leading to lost sales, unorganized delivery schedules, and lack of customer accounts.',
      solution: 'Engineered an intuitive MERN-stack catalog and ordering checkout dashboard. Customers can check stock, add products to cart, and place orders, while admin dashboards coordinate fulfillment logs.',
      challenges: [
        'Built responsive Tailwind CSS layouts optimized for mobile orders.',
        'Developed backend inventory models that automatically decrement ingredient/product stock counts on successful checkout.',
        'Created user dashboards that allow clients to view order fulfillment timelines and invoice records.'
      ],
      github: 'https://github.com/kirtikour/ghar-ka-khazana',
      demo: 'https://ghar-ka-khazana.vercel.app/',
    },
    jobtracker: {
      id: 'jobtracker',
      title: 'Job Tracker — Recruitment Analytics',
      categories: ['Web Development'],
      tags: ['Productivity', 'Full Stack'],
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      highlight: 'Application status tracking, schedules, and KPI analytics',
      overview: 'A career management platform that helps users organize and monitor job applications throughout the recruitment process. Users can track application statuses, deadlines, interview schedules, and hiring progress from a centralized dashboard.',
      problem: 'Applying to multiple job postings makes it highly challenging to monitor interview invites, submission dates, and response timelines, causing missed opportunities.',
      solution: 'Designed a streamlined dashboard that structures application logs by statuses (applied, phone screen, interview, offer). Users can log dates, add contact details, and view visual analytics charts representing success ratios.',
      challenges: [
        'Developed visual analytics utilizing charting libraries (like Chart.js/Recharts) to map user job metrics in real-time.',
        'Built secure JWT authentication and password-hashing structures to keep user data private.',
        'Implemented local database state caching to allow swift UI re-renders during status updates.'
      ],
      github: 'https://github.com/kirtikour/jobtracker',
      demo: 'https://jobtracker.vercel.app/',
    },
    braille: {
      id: 'braille',
      title: 'Braille Character and Word Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Accessibility', 'AI', 'Computer Vision'],
      stack: ['Python', 'Deep Learning', 'OpenCV', 'Computer Vision'],
      highlight: 'OCR-inspired processing pipeline converting Braille to text',
      overview: 'Developed an accessibility-focused AI system capable of recognizing Braille characters and converting them into readable text. The project leverages deep learning and image processing techniques to assist visually impaired individuals and improve digital accessibility.',
      problem: 'Translating paper-based Braille documents into digital text is highly labor-intensive, limiting information accessibility and integration for visually impaired individuals.',
      solution: 'Constructed an OCR-like computer vision processing pipeline that detects paper grid dots, processes them via a custom CNN classifier, and translates the resulting cells into readable alphanumeric text.',
      challenges: [
        'Optimized image filters (shadow removal, thresholding) in OpenCV to resolve variations in lighting on paper grids.',
        'Trained lightweight neural network models capable of running locally on low-resource accessibility hardware.',
        'Engineered word reconstruction algorithms that translate cell grids into correct punctuation and grammar alignments.'
      ],
      github: 'https://github.com/kirtikour',
    },
    'campus-management': {
      id: 'campus-management',
      title: 'Campus Management System',
      categories: ['Java'],
      tags: ['Java SE', 'Desktop App', 'OOP'],
      stack: ['Java', 'Swing', 'MySQL', 'JDBC'],
      highlight: 'Student enrollments, grading portal, and course schedules',
      overview: 'A desktop-based administration system written in Java utilizing Swing GUI and JDBC to manage student databases, course schedules, and academic reports.',
      problem: 'Manual student registration and grade compilation are highly error-prone and time-consuming in college administrative offices.',
      solution: 'Engineered an Object-Oriented Java application linked to a centralized MySQL database. Features administrative logging panels to declare courses, schedule classes, compute student GPAs, and register accounts.',
      challenges: [
        'Designed scalable relational databases using MySQL to enforce course prerequisite logic.',
        'Integrated JDBC database query operations securely in Swing event dispatch loops.',
        'Engineered customized JTable containers displaying student details with responsive paginated scrolling.'
      ],
      github: 'https://github.com/kirtikour',
    }
  };

  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <div className="py-28 text-center">
        <p className="text-zinc-400 mb-6 font-mono">Project not found or invalid ID.</p>
        <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 text-sm font-semibold transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Back Button */}
        <div className="mb-10">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#00FF66] transition-colors cursor-pointer font-mono text-xs sm:text-sm group"
          >
            <ArrowLeft className="w-4.5 h-4.5 group-hover:-translate-x-1 transition-transform" />
            {`/* Back to Selected Work */`}
          </button>
        </div>

        {/* Categories / Badges */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {project.categories.map((cat) => (
            <span 
              key={cat}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/60 text-zinc-300 text-xs font-bold border border-zinc-850 font-mono"
            >
              {cat.includes('Web') ? <Code className="w-3.5 h-3.5 text-[#00FF66]" /> : cat === 'Java' ? <Layers className="w-3.5 h-3.5 text-[#00FF66]" /> : cat.includes('Vision') ? <Eye className="w-3.5 h-3.5 text-[#00FF66]" /> : <Cpu className="w-3.5 h-3.5 text-[#00FF66]" />}
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {project.title}
        </h1>

        {/* Main Highlight Metrics */}
        <div className="p-5 sm:p-6 bg-zinc-900/40 rounded-2xl border border-[#00FF66]/30 shadow-lg shadow-[#00FF66]/5 text-sm sm:text-base text-zinc-200 font-semibold mb-12 flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#00FF66] shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono mb-1">Key Accomplishment</div>
            {project.highlight}
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">
          
          {/* Left Side: Tech stack & metadata */}
          <div className="md:col-span-1 space-y-6">
            
            {/* Tech Stack Box */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#00FF66]" />
                Stack Architecture
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 rounded-lg bg-zinc-950/80 text-zinc-300 border border-zinc-850 text-xs font-semibold font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Specs Box */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00FF66]" />
                Project Scope
              </h3>
              <div className="flex flex-col gap-3">
                {project.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-[#00FF66] shrink-0" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Detailed copy */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white tracking-tight">Overview</h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {project.overview}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="space-y-3 border-t border-zinc-900 pt-6">
              <h2 className="text-lg font-bold text-white tracking-tight">The Challenge</h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {project.problem}
              </p>
            </div>

            {/* Solution Description */}
            <div className="space-y-3 border-t border-zinc-900 pt-6">
              <h2 className="text-lg font-bold text-white tracking-tight">The Solution</h2>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </div>

            {/* Core Implementation Milestones */}
            <div className="space-y-4 border-t border-zinc-900 pt-6">
              <h2 className="text-lg font-bold text-white tracking-tight">Key Technical Hurdles Resolved</h2>
              <ul className="space-y-3 font-medium text-sm text-zinc-400 leading-relaxed">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#00FF66] font-mono text-xs mt-0.5">0{idx + 1}.</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Code & Demo Redirect Box */}
        <div className="mt-12 p-8 bg-[#0a0a0a]/60 border border-zinc-900 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-extrabold text-white text-lg mb-1">Verify implementation artifacts</h3>
            <p className="text-xs text-zinc-500 font-mono">Review full project repository code or open live demo.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white text-sm font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors font-mono cursor-pointer"
            >
              <Github className="w-4.5 h-4.5" />
              Source Code
            </a>
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00FF66] hover:bg-[#00E55C] text-black text-sm font-bold rounded-xl shadow-lg hover:shadow-[#00FF66]/10 transition-all cursor-pointer font-mono"
              >
                <ExternalLink className="w-4.5 h-4.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
