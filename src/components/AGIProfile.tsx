
import { useState, useEffect } from 'react';
import { User, Code, Brain, Target, ExternalLink, Download, Github, Linkedin, Globe, Battery } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import avatarImage from '/data/profile_pic.jpeg';
import configService from '../services/configService';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs font-mono mb-2">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-muted/30 rounded-full h-2">
      <div 
        className="skill-bar rounded-full transition-all duration-1000 ease-out h-2"
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

const BatteryIcon = ({ level }: { level: number }) => {
  return (
    <div className="relative w-8 h-4 border border-neon-green rounded-sm bg-background">
      {/* Battery tip */}
      <div className="absolute -right-1 top-1 w-1 h-2 bg-neon-green rounded-r-sm"></div>
      {/* Battery fill */}
      <div 
        className="h-full bg-neon-green rounded-sm transition-all duration-300"
        style={{ width: `${level}%` }}
      />
      {/* Battery segments */}
      <div className="absolute inset-0 flex">
        {[1, 2, 3, 4].map((segment) => (
          <div 
            key={segment}
            className="flex-1 border-r border-background last:border-r-0"
          />
        ))}
      </div>
    </div>
  );
};

const AGIProfile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [system, setSystem] = useState<any>(null);
  const [achievements, setAchievements] = useState<any>(null);
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    const loadConfig = async () => {
      await configService.loadConfig();
      setProfile(configService.getProfile());
      setSystem(configService.getSystem());
      setAchievements(configService.getAchievements());
      setContact(configService.getContact());
    };
    loadConfig();
  }, []);

  if (!profile) {
    return (
      <div className="h-full bg-background border-r border-neon-cyan/30 overflow-y-auto">
        <div className="p-6">
          <div className="text-center text-muted-foreground font-mono">
            Loading profile...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background border-r border-neon-cyan/30 overflow-y-auto">
      <div className="p-6 space-y-6">
        
        {/* Profile Section */}
        <div className="bg-card/20 border border-border/30 rounded-lg p-4 space-y-4">
          <h3 className="font-mono text-sm font-medium text-neon-cyan mb-4">AGI.PROFILE</h3>
          
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={profile.avatar || avatarImage} 
                alt={profile.name}
                className="w-20 h-20 rounded-full border-2 border-neon-cyan neon-glow"
                onError={(e) => {
                  e.currentTarget.src = avatarImage;
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-background" />
            </div>
          </div>

          {/* Identity */}
          <div className="text-center space-y-2">
            <h2 className="font-mono text-lg font-bold">{profile.name}</h2>
            <p className="font-mono text-sm text-neon-cyan">{profile.title}</p>
            <p className="font-mono text-xs text-muted-foreground">{profile.location}</p>
            
            {/* Enhanced Status Badges */}
            <div className="flex justify-center space-x-2 mt-3">
              <Badge variant="outline" className="font-mono text-xs neon-glow border-neon-cyan/50">
                Version: v{profile.version}
              </Badge>
              <Badge variant="outline" className="font-mono text-xs neon-glow border-neon-magenta/50">
                Uptime: 48,732 hrs
              </Badge>
              <Badge variant="outline" className="font-mono text-xs neon-glow border-neon-green/50 flex items-center space-x-1">
                <BatteryIcon level={system?.battery?.level || 88} />
                <span>{system?.battery?.level || 88}%</span>
              </Badge>
            </div>
          </div>

          {/* Professional Overview */}
          <div className="space-y-2 text-xs font-mono">
            <p>🎓 {profile.education?.institution}, {profile.education?.degree}</p>
            <p>🏢 {profile.company}</p>
            <p>🤖 {profile.current_role}</p>
          </div>
        </div>

        {/* Core Skills */}
        <div className="bg-card/20 border border-border/30 rounded-lg p-4 space-y-4">
          <h3 className="font-mono text-sm font-medium text-neon-cyan">CORE.SKILLS</h3>
          <div className="grid grid-cols-1 gap-3">
            <SkillBar skill="Data Science" level={95} />
            <SkillBar skill="Deep Learning" level={90} />
            <SkillBar skill="ML Ops" level={85} />
            <SkillBar skill="NLP" level={92} />
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-card/20 border border-border/30 rounded-lg p-4 space-y-4">
          <h3 className="font-mono text-sm font-medium text-neon-cyan">ADDITIONAL.SKILLS</h3>
          <div className="grid grid-cols-3 gap-2">
            <CircularProgress skill="CP/DSA" level={85} />
            <CircularProgress skill="Cloud Eng" level={80} />
            <CircularProgress skill="Computer Vision" level={78} />
            <CircularProgress skill="Prompt Eng" level={90} />
            <CircularProgress skill="RAG Arch" level={88} />
            <CircularProgress skill="Data Pipelines" level={82} />
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="bg-card/20 border border-border/30 rounded-lg p-4 space-y-4">
          <h3 className="font-mono text-sm font-medium text-neon-cyan">QUICK.METRICS</h3>
          <div className="grid grid-cols-2 gap-2">
            <MetricCard icon={Code} label="Total Projects" value={achievements?.project_metrics?.projects_completed?.toString() || "34"} />
            <MetricCard icon={User} label="LinkedIn Reach" value="21K+" />
            <MetricCard icon={Github} label="GitHub Stars" value={achievements?.github_stats?.stars?.toString() || "2.4K+"} />
            <MetricCard icon={Target} label="Certifications" value={achievements?.certifications?.length?.toString() || "12"} />
            <MetricCard icon={Brain} label="Published Papers" value={achievements?.publications?.research_papers?.toString() || "5"} />
            <MetricCard icon={Target} label="Marathon Events" value="6" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-card/20 border border-border/30 rounded-lg p-4 space-y-4">
          <h3 className="font-mono text-sm font-medium text-neon-cyan">QUICK.LINKS</h3>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs neon-glow"
              onClick={() => window.open(contact?.resume, '_blank')}
            >
              <Download className="w-3 h-3 mr-1" />
              Resume
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs neon-glow"
              onClick={() => window.open(contact?.professional_links?.github, '_blank')}
            >
              <Github className="w-3 h-3 mr-1" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs neon-glow"
              onClick={() => window.open(contact?.professional_links?.linkedin, '_blank')}
            >
              <Linkedin className="w-3 h-3 mr-1" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs neon-glow"
              onClick={() => window.open(contact?.blog_writing?.medium, '_blank')}
            >
              <Globe className="w-3 h-3 mr-1" />
              Blog
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-mono text-xs neon-glow col-span-2"
              onClick={() => window.open(`mailto:${contact?.email}`, '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Contact
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AGIProfile;
