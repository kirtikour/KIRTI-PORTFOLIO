import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, ExternalLink, ShieldAlert, Award, FileText } from 'lucide-react';

export default function Research() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const metrics = [
    { name: 'Image Classification (Macro Accuracy)', cnn: 78, vit: 89, unit: '%' },
    { name: 'Forgery Localization (Mean IoU)', cnn: 91, vit: 65, unit: '%' },
  ];

  return (
    <section 
      id="research" 
      ref={sectionRef}
      className="py-28 bg-transparent relative scroll-mt-20 border-t border-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* Academic Work */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            IEEE Research Publication
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Paper Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Paper Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0a0a0a]/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-zinc-900 shadow-sm hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Badges Row */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/60 text-zinc-300 text-xs font-bold border border-zinc-800 font-mono">
                  <Award className="w-3.5 h-3.5 text-[#00FF66]" />
                  IEEE iCoMET 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/60 text-zinc-300 text-xs font-bold border border-zinc-800 font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-[#00FF66]" />
                  Conference Presenter
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 text-[#00FF66] text-xs font-bold border border-[#00FF66]/20 font-mono">
                  Image Forensics
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 leading-tight hover:text-[#00FF66] transition-colors">
                “Analyzing the Classification-Localization Gap Between CNNs and Vision Transformers for Image Manipulation Detection”
              </h3>

              {/* Author and Date */}
              <div className="text-xs text-zinc-500 mb-6 font-semibold font-mono">
                Co-Author: <span className="text-[#00FF66]">Kirti Kour</span> • Published: May 2026 • Conference Proceedings
              </div>

              {/* Summary description */}
              <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  This research addresses a critical gap in forensic AI systems: the performance trade-offs between convolutional and transformer architectures. As image manipulations become highly sophisticated, understanding how models decide <em>what</em> is manipulated vs <em>where</em> it is manipulated is key.
                </p>
                <p>
                  <strong>Key Architectural Trade-Off:</strong> The study indicates that CNNs (leveraging local receptive fields) outperform Vision Transformers (ViTs) in localization accuracy. In contrast, ViTs (relying on global self-attention) exhibit stronger classification generalization.
                </p>
              </div>
            </div>

            {/* Read / Action button */}
            <div className="pt-6 border-t border-zinc-900/60">
              <a
                href="https://ieeexplore.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00FF66] hover:text-[#00E55C] font-bold text-sm group font-mono"
              >
                <FileText className="w-4 h-4" />
                Read publication on IEEE Xplore
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Visualization Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#0a0a0a]/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-zinc-900 shadow-sm hover:border-[#00FF66]/30 hover:shadow-lg hover:shadow-[#00FF66]/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="w-5 h-5 text-[#00FF66]" />
                <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-wider font-mono">Classification vs Localization Gap</h4>
              </div>

              <p className="text-xs text-zinc-500 mb-8 leading-relaxed font-medium">
                Comparative metrics highlighting the trade-off. Inductive bias in CNNs affects pixel-level localization compared to ViT's global self-attention.
              </p>

              {/* Graphical Bars */}
              <div className="space-y-8">
                {metrics.map((metric) => (
                  <div key={metric.name} className="space-y-3">
                    <div className="text-xs sm:text-sm font-semibold text-zinc-300 leading-tight">
                      {metric.name}
                    </div>
                    
                    {/* CNN Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold font-mono">
                        <span className="text-zinc-500">CNN (e.g. ResNet)</span>
                        <span className="text-zinc-300">{metric.cnn}{metric.unit}</span>
                      </div>
                      <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${metric.cnn}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-zinc-500 rounded-full"
                        />
                      </div>
                    </div>

                    {/* ViT Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold font-mono">
                        <span className="text-[#00FF66]">Vision Transformer (ViT)</span>
                        <span className="text-[#00FF66]">{metric.vit}{metric.unit}</span>
                      </div>
                      <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${metric.vit}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-[#00FF66] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-zinc-900/40 rounded-2xl border border-zinc-850 text-xs text-zinc-400 leading-relaxed font-mono">
              <strong className="text-white">Design conclusion:</strong> Forensic AI systems benefit from a hybrid architecture—using ViT for initial detection and CNN features for precise pixel localization of tampering boundaries.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
