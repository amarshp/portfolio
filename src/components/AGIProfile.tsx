import { useState } from 'react';
import { ChevronDown, ChevronRight, User, Code, Brain, Target, ExternalLink, Download, Github, Linkedin, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import avatarImage from '../assets/avatar-arjun.jpg';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, children, defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full p-3 bg-card border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-colors neon-glow"
      >
        {isOpen ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
        <span className="font-mono text-sm font-medium">{title}</span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-card/50 border border-neon-cyan/20 rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-mono mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-muted/30 rounded-full h-1">
      <div 
        className="skill-bar rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const CircularProgress = ({ skill, level }: { skill: string; level: number }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon-cyan))" />
              <stop offset="100%" stopColor="hsl(var(--neon-magenta))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono font-bold">{level}%</span>
        </div>
      </div>
      <span className="text-xs font-mono text-center">{skill}</span>
    </div>
  );
};

const MetricCard = ({ icon: Icon, label, value, onClick }: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  onClick?: () => void;
}) => (
  <Card 
    className="metric-card p-3 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4 text-neon-cyan" />
      <div>
        <div className="text-xs font-mono text-muted-foreground">{label}</div>
        <div className="text-sm font-mono font-bold">{value}</div>
      </div>
    </div>
  </Card>
);

const AGIProfile = () => {
  return (
    <div className="h-full bg-background border-r border-neon-cyan/30 overflow-y-auto">
      <div className="p-6 space-y-4">
        
        {/* Profile Section - Default Open */}
        <CollapsibleSection title="AGI.PROFILE" defaultOpen={true}>
          <div className="space-y-4">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={avatarImage} 
                  alt="Arjun Reddy"
                  className="w-20 h-20 rounded-full border-2 border-neon-cyan neon-glow"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-background" />
              </div>
            </div>

            {/* Identity */}
            <div className="text-center space-y-1">
              <h2 className="font-mono text-lg font-bold">Arjun Reddy</h2>
              <p className="font-mono text-sm text-neon-cyan">Senior Data Scientist & AI Consultant</p>
              <div className="flex justify-center space-x-4 text-xs font-mono text-muted-foreground">
                <span>Version: v3.9</span>
                <span>Uptime: 48,732 hrs</span>
                <span className="text-neon-green">Battery: 88%</span>
              </div>
            </div>

            {/* Professional Overview */}
            <div className="space-y-2 text-xs font-mono">
              <p>🎓 IIT Hyderabad, B.Tech AI, 2019</p>
              <p>🏢 Fortune 500 consulting experience</p>
              <p>🤖 Passionate about agentic AI & RAG</p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Core Skills */}
        <CollapsibleSection title="CORE.SKILLS">
          <div className="grid grid-cols-1 gap-3">
            <SkillBar skill="Data Science" level={95} />
            <SkillBar skill="Deep Learning" level={90} />
            <SkillBar skill="ML Ops" level={85} />
            <SkillBar skill="NLP" level={92} />
          </div>
        </CollapsibleSection>

        {/* Additional Skills */}
        <CollapsibleSection title="ADDITIONAL.SKILLS">
          <div className="grid grid-cols-2 gap-4">
            <CircularProgress skill="CP/DSA" level={85} />
            <CircularProgress skill="Cloud Eng" level={80} />
            <CircularProgress skill="Computer Vision" level={78} />
            <CircularProgress skill="Prompt Eng" level={90} />
            <CircularProgress skill="RAG Arch" level={88} />
            <CircularProgress skill="Data Pipelines" level={82} />
          </div>
        </CollapsibleSection>

        {/* Quick Metrics */}
        <CollapsibleSection title="QUICK.METRICS">
          <div className="grid grid-cols-2 gap-2">
            <MetricCard icon={Code} label="Total Projects" value="34" />
            <MetricCard icon={User} label="LinkedIn Reach" value="21K+" />
            <MetricCard icon={Github} label="GitHub Stars" value="2.4K+" />
            <MetricCard icon={Target} label="Certifications" value="12" />
            <MetricCard icon={Brain} label="Published Papers" value="5" />
            <MetricCard icon={Target} label="Marathon Events" value="6" />
          </div>
        </CollapsibleSection>

        {/* Quick Links */}
        <CollapsibleSection title="QUICK.LINKS">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="font-mono text-xs neon-glow">
              <Download className="w-3 h-3 mr-1" />
              Resume
            </Button>
            <Button variant="outline" size="sm" className="font-mono text-xs neon-glow">
              <Github className="w-3 h-3 mr-1" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="font-mono text-xs neon-glow">
              <Linkedin className="w-3 h-3 mr-1" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="font-mono text-xs neon-glow">
              <Globe className="w-3 h-3 mr-1" />
              Blog
            </Button>
            <Button variant="outline" size="sm" className="font-mono text-xs neon-glow col-span-2">
              <ExternalLink className="w-3 h-3 mr-1" />
              Contact
            </Button>
          </div>
        </CollapsibleSection>

      </div>
    </div>
  );
};

export default AGIProfile;