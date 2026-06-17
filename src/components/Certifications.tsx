import { ShieldCheck, Award } from 'lucide-react';

interface CertificationGroup {
  issuer: string;
  platform: string;
  icon: React.ReactNode;
  certs: string[];
}

export default function Certifications() {

  const groups: CertificationGroup[] = [
    {
      issuer: 'Google',
      platform: 'Coursera',
      icon: <Award className="w-4 h-4 text-[#00FF66]" />,
      certs: [
        'Google AI Essentials (2026)',
        'Google Advanced Data Analytics (2026)',
        'Google Prompting Essentials (2026)'
      ]
    },
    {
      issuer: 'University of Michigan',
      platform: 'Coursera',
      icon: <ShieldCheck className="w-4 h-4 text-[#00FF66]" />,
      certs: [
        'Python and Django Web Framework (2024)'
      ]
    },
    {
      issuer: 'IBM',
      platform: 'Coursera',
      icon: <ShieldCheck className="w-4 h-4 text-[#00FF66]" />,
      certs: [
        'Web Development Professional (2024)'
      ]
    }
  ];

  return (
    <div className="bg-transparent relative">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <h2 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
          {`/* Credentials */`}
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Professional Certifications
        </p>
        <div className="w-12 h-1 bg-[#00FF66] mt-3 rounded-full"></div>
      </div>

      {/* Certifications Lines Grid (Same UI as Skills) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {groups.map((group) => (
          <div
            key={group.issuer}
            className="pb-6 border-b border-zinc-900/60 flex flex-col justify-start"
          >
            {/* Issuer Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-[#00FF66] shrink-0">
                {group.icon}
              </div>
              <h3 className="font-bold text-zinc-200 text-sm font-mono uppercase tracking-wider">
                {group.issuer} <span className="text-zinc-500 font-normal">({group.platform})</span>
              </h3>
            </div>
            
            {/* Simple Line of Certifications */}
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wide font-sans pl-7">
              {group.certs.join('  •  ')}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
