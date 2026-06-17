import { Monitor, Cpu, Database, Brain, Terminal } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend Development',
      icon: <Monitor className="w-4 h-4 text-[#00FF66]" />,
      skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend Engineering',
      icon: <Cpu className="w-4 h-4 text-[#00FF66]" />,
      skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL', 'JWT Auth']
    },
    {
      category: 'Databases & Storage',
      icon: <Database className="w-4 h-4 text-[#00FF66]" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-4 h-4 text-[#00FF66]" />,
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'LangChain', 'CNNs & ViTs', 'Prompt Engineering']
    },
    {
      category: 'DevOps & Tools',
      icon: <Terminal className="w-4 h-4 text-[#00FF66]" />,
      skills: ['Docker', 'Git & GitHub', 'Linux OS', 'Postman', 'CI/CD Pipelines', 'Vercel']
    }
  ];

  return (
    <div className="bg-transparent relative">
      
      {/* Header */}
      <div className="text-left max-w-3xl mb-12">
        <h3 className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-widest mb-3">
          {`/* Technical Skills */`}
        </h3>
        <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Technical Arsenal & Core Stack
        </h4>
        <div className="w-12 h-1 bg-[#00FF66] mt-3 rounded-full"></div>
      </div>

      {/* Simple Skills Lines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="pb-6 border-b border-zinc-900/60 flex flex-col justify-start"
          >
            {/* Group Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-[#00FF66] shrink-0">
                {group.icon}
              </div>
              <h3 className="font-bold text-zinc-200 text-sm font-mono uppercase tracking-wider">{group.category}</h3>
            </div>
            
            {/* Simple Line of Skills */}
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wide font-sans pl-7">
              {group.skills.join('  •  ')}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
