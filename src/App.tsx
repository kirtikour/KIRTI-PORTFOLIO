import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="flex flex-col">
            <Hero setActiveSection={setActiveSection} />
            <About />
          </div>
        );
      case 'projects':
        return <Projects setActiveSection={setActiveSection} setSelectedProjectId={setSelectedProjectId} />;
      case 'project-details':
        return <ProjectDetails projectId={selectedProjectId} onBack={() => { setActiveSection('projects'); setSelectedProjectId(null); }} />;
      case 'experience':
        return <Experience />;
      case 'research':
        return <Research />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="flex flex-col">
            <Hero setActiveSection={setActiveSection} />
            <About />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#ededed] selection:bg-[#00FF66]/20 selection:text-[#00FF66] relative font-sans overflow-x-hidden flex flex-col justify-between">
      {/* Fixed Grid Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-lines" />

      {/* Floating Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 flex-grow min-h-[calc(100vh-160px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
