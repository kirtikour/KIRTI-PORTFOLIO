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
      title: 'Solar Panel Segmentation via Self Supervised Learning (FYP)',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['AI Research', 'Computer Vision', 'Deep Learning'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'Docker', 'PVGIS API'],
      highlight: 'BYOL + UNet won with 93.38% IoU and 96.56% Dice Score',
      overview: 'Takes aerial/satellite images as input and automatically detects and segments solar panels draws exact boundaries around them. This can be used for energy planning, identifying rooftops suitable for solar installation, and tracking solar adoption.',
      problem: "Pakistan needs solar energy mapping but there's no labeled satellite imagery dataset for Pakistani solar panels. Manual annotation is expensive and slow.",
      solution: 'Uses self supervised learning the model first learns visual patterns from unlabeled images (no human annotation needed), then finetunes on a small labeled set. BYOL was the best SSL framework, combined with UNet for segmentation.',
      challenges: [
        'Benchmarked 5 SSL models. BYOL + UNet won with 93.38% IoU and 96.56% Dice Score.',
        'Full system deployed with Flask backend, React frontend, Dockerized ML inference pipeline, PVGIS API integration for solar energy estimation.'
      ],
      github: 'https://github.com/orgs/solar-ssl/repositories',
    },
    'chest-xray': {
      id: 'chest-xray',
      title: 'Chest XRay Disease Analysis',
      categories: ['AI & Machine Learning'],
      tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
      stack: ['Python', 'PyTorch', 'Django', 'React', 'Pandas', 'NumPy'],
      highlight: 'EfficientNetB0 performed best at 74% Macro AUC',
      overview: "Takes a chest Xray image and automatically classifies it across 8 diseases simultaneously Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, Pneumothorax. It's multilabel meaning one Xray can show multiple conditions at once.",
      problem: "Radiologists are overloaded. In Pakistan especially, there's a shortage of specialists. Many diseases go undetected early because manual Xray reading is slow and error prone.",
      solution: 'Trained on NIH ChestXray14  one of the largest public medical imaging datasets. Benchmarked 4 CNN architectures. EfficientNetB0 performed best at 74% Macro AUC. Results are delivered through a React + Django interface where doctors can upload an Xray and get predictions instantly.',
      challenges: [
        'Handled severe class imbalance using weighted loss.',
        'Preprocessing pipeline built with Pandas and NumPy.',
        'Model evaluation with per class AUC scores.'
      ],
      github: 'https://github.com/kirtikour/chest--xray--analysis',
    },
    braille: {
      id: 'braille',
      title: 'Braille Character and Word Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Accessibility', 'AI', 'Computer Vision'],
      stack: ['Python', 'Deep Learning', 'OpenCV', 'Computer Vision'],
      highlight: 'Custom OCR inspired pipeline translating Braille to English',
      overview: "Takes an image of Braille text and converts it into readable English text. Works at both character and word level.",
      problem: "Braille documents cannot be read by standard OCR tools. Visually impaired individuals who use Braille have no easy way to digitize or share Braille content with people who don't know Braille.",
      solution: "Uses deep learning and OpenCV for image preprocessing  detects the dot patterns of Braille characters and maps them to their English equivalents through a trained classification model.",
      challenges: [
        'Custom OCR inspired pipeline.',
        'Computer vision for dot detection, deep learning for character mapping, accessibility focused design.'
      ],
      github: 'https://github.com/kirtikour',
    },
    'handwritten-text': {
      id: 'handwritten-text',
      title: 'Handwritten Text Recognition',
      categories: ['AI & Machine Learning', 'Computer Vision'],
      tags: ['Deep Learning', 'CRNN', 'OCR'],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Streamlit', 'Deep Learning'],
      highlight: 'Real-time text extraction using CRNN (CNN + RNN)',
      overview: 'Takes an image of handwritten text and converts it to digital text in real time. User uploads an image and gets the extracted text instantly.',
      problem: 'Handwritten documents — notes, forms, historical records — cannot be searched or processed digitally without manual transcription which is slow.',
      solution: 'Uses CRNN — Convolutional Recurrent Neural Network — which combines CNN for visual feature extraction and RNN for sequential character prediction. Built as a Streamlit web app so anyone can use it without technical knowledge.',
      challenges: [
        'End-to-end pipeline  image preprocessing, CRNN inference, realtime output visualization.',
        'Built with PyTorch and OpenCV.'
      ],
      github: 'https://github.com/kirtikour',
    },
    healr: {
      id: 'healr',
      title: 'HEALR — Medical Drug & Test Search Platform',
      categories: ['Web Development'],
      tags: ['MERN Stack', 'Healthcare', 'Full Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
      highlight: 'Full stack MERN application with live search',
      overview: 'A healthcare platform where users can search 5,000+ medicines and medical tests, add to cart, and book doctor appointments. Like a medical information hub with appointment scheduling built in.',
      problem: 'In Pakistan, patients struggle to find accurate information about medicines and medical tests in one place. OTC drug lookup, test descriptions, and doctor appointments are all scattered across different platforms.',
      solution: 'Full stack MERN application with live search  results appear as you type. Cart management for ordering medicines. Appointment scheduling with doctor profiles. Role based access for patients and doctors.',
      challenges: [
        'Secure RESTful APIs with database pagination and filtering.',
        'Improved client side responsiveness by 25%.',
        'JWT authentication. MongoDB for flexible medical data storage.'
      ],
      github: 'https://github.com/kirtikour',
      demo: 'https://healr.vercel.app/',
    },
    jobtracker: {
      id: 'jobtracker',
      title: 'JobTracker — Job Application Analytics Platform',
      categories: ['Web Development'],
      tags: ['Productivity', 'Full Stack', 'MERN Stack'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'NLP', 'JWT'],
      highlight: 'NLP based CV parsing & analytical pipeline dashboard',
      overview: 'A centralized dashboard to track every job application — status, deadlines, interview dates, outcomes. Automatically parses your CV to fill your profile. Shows analytics on your application pipeline.',
      problem: 'Job hunters apply to dozens of companies and lose track — which stage are they at, which CV did they send, when is the interview. Spreadsheets are messy and manual.',
      solution: 'NLP based CV parsing automatically extracts name, skills, experience from uploaded CV and populates the profile  no manual entry. KPI dashboard shows application trends, success rates, status breakdown. Dark/light theme. JWT secured so data is private.',
      challenges: [
        'NLP pipeline tested across 10 resumes.',
        'KPI tracking with charts.',
        'Full MERN stack. Built as production work during Elevvo internship — not just a personal project.'
      ],
      github: 'https://github.com/kirtikour/jobtracker',
      demo: 'https://jobtracker.vercel.app/',
    },
    'ghar-ka-khazana': {
      id: 'ghar-ka-khazana',
      title: 'Ghar-Ka-Khazana — ECommerce Platform',
      categories: ['Web Development'],
      tags: ['E-Commerce', 'Vue.js', 'Full Stack'],
      stack: ['Vue.js 3', 'Pinia', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
      highlight: 'Vue.js 3 Composition API & Pinia state management',
      overview: 'A complete online storefront for a homemade pickle business. Customers can browse products, add to cart, place orders. Admin can manage inventory, add/edit products, track orders.',
      problem: 'Small homemade food businesses in Pakistan like pickle makers, bakers, home cooks  have no affordable way to sell online. Setting up on Daraz or building a custom site from scratch is either expensive or too complex.',
      solution: 'Full ecommerce platform built specifically for small local businesses. Clean product catalog with photos, shopping cart, order management, and a simple admin panel that anyone can use.',
      challenges: [
        'Vue.js 3 Composition API with Pinia state management.',
        'Node + Express backend. MongoDB database. JWT authentication.',
        'Cloudinary for image uploads. Tailwind CSS for responsive design.'
      ],
      github: 'https://github.com/kirtikour/ghar-ka-khazana',
      demo: 'https://ghar-ka-khazana.vercel.app/',
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
