import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Github = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [debugMsg, setDebugMsg] = useState('');

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setDebugMsg("Demo Mode: Message simulated successfully! Set VITE_EMAILJS_* keys in .env to enable real emails.");
      }, 1200);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Message',
          message: formData.message,
          to_email: 'kirtikourkataria@gmail.com',
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setDebugMsg("Message sent successfully directly to Kirti!");
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setDebugMsg("Oops! Something went wrong and your message couldn't be sent. Please try again, or reach out to me directly at kirtikourkataria@gmail.com.");
    }
  };

  return (
    <section 
      id="contact" 
      className="py-28 bg-transparent relative scroll-mt-20 border-t border-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
            {`/* Contact */`}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Collaborate On Something Great
          </p>
          <div className="w-12 h-1 bg-[#00FF66] mt-4 rounded-full"></div>
        </div>

        {/* Split Card Layout Container */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl bg-[#0a0a0a] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Dark Gradient Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00FF66]/5 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                Reach Out
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
                Let's work together!
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Fill out the form or reach out directly via the email, socials, or phone. I typically respond within 24 hours.
              </p>
            </div>

            {/* Social info blocks */}
            <div className="relative z-10 space-y-5 my-10 font-mono text-xs">
              {/* Email */}
              <a 
                href="mailto:kirtikourkataria@gmail.com"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-[#00FF66] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email</div>
                  <div className="text-sm font-semibold truncate text-white group-hover:text-[#00FF66]">kirtikourkataria@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/kirti-kour-384998302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-[#00FF66] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-200">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">LinkedIn</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#00FF66]">linkedin.com/in/kirti-kour</div>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/kirtikour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-zinc-300 hover:text-[#00FF66] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-transform duration-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">GitHub</div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#00FF66]">github.com/kirtikour</div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Phone</div>
                  <div className="text-sm font-semibold text-white">0335-2787538</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-white">Karachi, Pakistan</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-zinc-900 flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <Globe className="w-4 h-4 text-[#00FF66]" />
              Open for remote & hybrid roles
            </div>

          </div>

          {/* Right Side: Clean Structured Dark Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#0a0a0a] border-t lg:border-t-0 lg:border-l border-zinc-900 flex flex-col justify-center">
            
            <h4 className="text-2xl font-extrabold text-white mb-6 leading-tight">
              Send a Direct Message
            </h4>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border bg-zinc-900/40 focus:bg-zinc-950 text-white placeholder-zinc-650 outline-none transition-all duration-200 text-sm ${
                    errors.name 
                      ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                      : 'border-zinc-850 focus:border-[#00FF66] focus:ring-4 focus:ring-[#00FF66]/10'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-zinc-900/40 focus:bg-zinc-950 text-white placeholder-zinc-650 outline-none transition-all duration-200 text-sm ${
                    errors.email 
                      ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                      : 'border-zinc-850 focus:border-[#00FF66] focus:ring-4 focus:ring-[#00FF66]/10'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Subject (Optional)</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-850 bg-zinc-900/40 focus:bg-zinc-950 text-white placeholder-zinc-650 outline-none focus:border-[#00FF66] focus:ring-4 focus:ring-[#00FF66]/10 transition-all duration-200 text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-xl border bg-zinc-900/40 focus:bg-zinc-950 text-white placeholder-zinc-650 outline-none transition-all duration-200 text-sm resize-y ${
                    errors.message 
                      ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
                      : 'border-zinc-850 focus:border-[#00FF66] focus:ring-4 focus:ring-[#00FF66]/10'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Send status alerts */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-950/40 border border-emerald-900/30 text-emerald-300 rounded-xl flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00FF66] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm font-mono">Message Sent!</h5>
                    <p className="text-[11px] mt-1 leading-relaxed text-emerald-400 font-mono">{debugMsg}</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-950/40 border border-red-900/30 text-red-300 rounded-xl flex items-start gap-2"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm font-mono">Sending Failed</h5>
                    <p className="text-[11px] mt-1 leading-relaxed text-red-400 font-mono">{debugMsg}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold rounded-xl disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#00FF66]/10 font-mono text-sm"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {!import.meta.env.VITE_EMAILJS_SERVICE_ID && (
              <div className="mt-6 p-4 rounded-xl border border-zinc-900 bg-zinc-950/50 text-[10px] text-zinc-500 leading-relaxed font-mono">
                <span className="font-bold text-zinc-350">Developer Setup Tip:</span> Add these variables to your <code className="bg-zinc-900 px-1 py-0.5 rounded text-[10px] text-zinc-400">.env</code> to activate live emails:
                <div className="mt-2 font-mono bg-zinc-950 p-2 rounded border border-zinc-900 select-all leading-normal text-[9px] text-zinc-400">
                  VITE_EMAILJS_SERVICE_ID=your_service_id<br/>
                  VITE_EMAILJS_TEMPLATE_ID=your_template_id<br/>
                  VITE_EMAILJS_PUBLIC_KEY=your_public_key
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
