
import { useState, useEffect, useRef } from 'react';
import configService from '../services/configService';

const TYPING_SPEED = 12; // ms per character

const TerminalPanel = () => {
  const [input, setInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [commands, setCommands] = useState<Record<string, { description: string; category: string }>>({});
  const [prompt, setPrompt] = useState('');
  const [welcome, setWelcome] = useState('');
  const [helpText, setHelpText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [profile, setProfile] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);
  const [skills, setSkills] = useState<any>(null);
  const [achievements, setAchievements] = useState<any>(null);
  const [contact, setContact] = useState<any>(null);
  const [terminalConfig, setTerminalConfig] = useState<any>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [queuedLines, setQueuedLines] = useState<string[]>([]);
  const [currentTypedLine, setCurrentTypedLine] = useState('');
  const [showPromptInput, setShowPromptInput] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Load config and initialize terminal
  useEffect(() => {
    const init = async () => {
      const config = await configService.loadConfig();
      const terminal = config.terminal;
      setCommands(terminal.commands);
      setPrompt(terminal.prompt || 'agi@portfolio:~$');
      setWelcome(terminal.welcome_message || 'Welcome!');
      setHelpText(terminal.help_text || 'Type help for available commands');
      setErrorMessage(terminal.error_message || 'Command not recognized.');
      setProfile(config.profile);
      setProjects(config.projects);
      setSkills(config.skills);
      setAchievements(config.achievements);
      setContact(config.contact);
      setTerminalConfig(terminal);
      const now = new Date();
      const timestamp = now.toLocaleString();
      setHistory([
        terminal.welcome_message || 'Welcome!',
        '',
        terminal.help_text || 'Type help for available commands',
        terminal.system_status ? `System Status: ${terminal.system_status}` : '',
        `Last Updated: ${timestamp}`,
        '',
        'Available Commands:',
        ...Object.entries(terminal.commands).map(([cmd, val]) => `• ${cmd} - ${val.description}`),
        '',
      ]);
      setQueuedLines(['']);
    };
    init();
  }, []);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, currentTypedLine]);

  // Update timestamp periodically
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for queued lines
  useEffect(() => {
    if (!isTyping && queuedLines.length > 0) {
      setIsTyping(true);
      setShowPromptInput(false);
      let lineIdx = 0;
      let charIdx = 0;
      let lines = [...queuedLines];
      let currentLine = '';
      const typeNextChar = () => {
        if (lineIdx >= lines.length) {
          setIsTyping(false);
          setQueuedLines([]);
          setCurrentTypedLine('');
          setShowPromptInput(true);
          return;
        }
        const line = lines[lineIdx];
        if (charIdx < line.length) {
          setCurrentTypedLine(line.slice(0, charIdx + 1));
          charIdx++;
          setTimeout(typeNextChar, TYPING_SPEED);
        } else {
          setHistory(h => [...h, line]);
          setCurrentTypedLine('');
          lineIdx++;
          charIdx = 0;
          setTimeout(typeNextChar, TYPING_SPEED * 2);
        }
      };
      typeNextChar();
    }
  }, [isTyping, queuedLines]);

  const queueOutput = (lines: string[]) => {
    setQueuedLines(prev => [...prev, ...lines]);
  };

  const handleCommand = (command: string) => {
    if (isTyping) return;
    const cmd = command.trim().toLowerCase();
    const newHistory = [...history];
    // Add the command to history (with prompt on same line)
    newHistory.push(prompt + ' ' + command);
    setHistory(newHistory);
    let output: string[] = [''];
    if (!(cmd in commands)) {
      output.push(errorMessage.replace('Type', `Command not found: ${cmd}. Type`));
    } else {
      switch (cmd) {
        case 'help': {
          output.push('Available commands:');
          Object.entries(commands).forEach(([c, val]) => {
            output.push(`  ${c.padEnd(14)}- ${val.description}`);
          });
          break;
        }
        case 'about': {
          if (profile) {
            output.push(`Name: ${profile.name}`);
            output.push(`Title: ${profile.title}`);
            output.push(`Company: ${profile.company}`);
            output.push(`Location: ${profile.location}`);
            output.push(`Education: ${profile.education.institution}, ${profile.education.degree}`);
            output.push(`Experience: ${profile.experience.role} at ${profile.experience.companies}`);
            output.push(`Specialties: ${profile.experience.specialties.join(', ')}`);
            output.push(`Research Focus: ${profile.research_focus.join(', ')}`);
            output.push(`Current Role: ${profile.current_role}`);
          }
          break;
        }
        case 'projects': {
          if (projects) {
            output.push('AI/ML Projects:');
            projects.ai_ml.forEach((p: any) => output.push(`- ${p.name}: ${p.description} [${p.tech.join(', ')}]`));
            output.push('Web Applications:');
            projects.web_applications.forEach((p: any) => output.push(`- ${p.name}: ${p.description} [${p.tech.join(', ')}]`));
            output.push('Data Science:');
            projects.data_science.forEach((p: any) => output.push(`- ${p.name}: ${p.description} [${p.tech.join(', ')}]`));
            output.push(`GitHub: ${projects.github_url}`);
          }
          break;
        }
        case 'skills': {
          if (skills) {
            output.push('Programming Languages:');
            skills.programming_languages.forEach((s: any) => output.push(`- ${s.name} ${s.icon}: ${s.percentage}%`));
            output.push('AI/ML Technologies:');
            skills.ai_ml_technologies.forEach((s: any) => output.push(`- ${s.name} ${s.icon}: ${s.percentage}%`));
            output.push('Cloud/DevOps:');
            skills.cloud_devops.forEach((s: any) => output.push(`- ${s.name} ${s.icon}: ${s.percentage}%`));
            output.push('Frameworks/Tools:');
            skills.frameworks_tools.forEach((s: any) => output.push(`- ${s.name} ${s.icon}: ${s.percentage}%`));
          }
          break;
        }
        case 'leetcode': {
          // Get username from config (support both contact.leetcode and contact.professional_links.leetcode)
          let leetcodeUrl = contact?.leetcode || contact?.professional_links?.leetcode;
          let username = '';
          if (leetcodeUrl) {
            // Support /u/username/ or /username/ or /username
            const match = leetcodeUrl.match(/leetcode.com\/(?:u\/)?([\w-]+)/);
            if (match) username = match[1];
          }
          if (!username) {
            output.push('LeetCode username not found in config.');
            break;
          }
          output.push('Fetching LeetCode stats...');
          queueOutput(output);
          fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
            .then(res => res.json())
            .then(data => {
              if (data.status !== 'success') {
                queueOutput(['Could not fetch LeetCode stats.']);
                return;
              }
              const stats = [
                `LeetCode Stats for ${username}:`,
                `Rank: #${data.ranking}`,
                `Easy:   ${data.easySolved}/${data.totalEasy}`,
                `Medium: ${data.mediumSolved}/${data.totalMedium}`,
                `Hard:   ${data.hardSolved}/${data.totalHard}`,
                '-------------------------',
                `Total:  ${data.totalSolved}/${data.totalQuestions}`,
                `Profile: https://leetcode.com/${username}`,
                ''
              ];
              queueOutput(stats);
            })
            .catch(() => queueOutput(['Could not fetch LeetCode stats.']));
          return;
        }
        case 'achievements': {
          if (achievements) {
            output.push('Awards & Recognition:');
            achievements.awards_recognition.forEach((a: any) => output.push(`- ${a.title} (${a.platform}, ${a.year})`));
            output.push('Certifications:');
            achievements.certifications.forEach((c: any) => output.push(`- ${c}`));
            output.push('GitHub Stats:');
            Object.entries(achievements.github_stats).forEach(([k, v]) => output.push(`- ${k}: ${v}`));
            output.push('Project Metrics:');
            Object.entries(achievements.project_metrics).forEach(([k, v]) => output.push(`- ${k}: ${v}`));
            output.push('Publications:');
            Object.entries(achievements.publications).forEach(([k, v]) => output.push(`- ${k}: ${v}`));
          }
          break;
        }
        case 'contact': {
          if (contact) {
            output.push('Contact Information:');
            output.push(`Email: ${contact.email}`);
            if (contact.professional_links) {
              Object.entries(contact.professional_links).forEach(([k, v]) => output.push(`${k}: ${v}`));
            }
            if (contact.blog_writing) {
              Object.entries(contact.blog_writing).forEach(([k, v]) => output.push(`${k}: ${v}`));
            }
            if (contact.social_media) {
              Object.entries(contact.social_media).forEach(([k, v]) => output.push(`${k}: ${v}`));
            }
            if (contact.business) {
              output.push(`Business: ${contact.business}`);
            }
          }
          break;
        }
        case 'diagnostics': {
          output.push('System Diagnostics:');
          output.push(`Current Time: ${currentTime}`);
          break;
        }
        case 'reboot': {
          window.location.reload();
          return;
        }
        case 'clear': {
          const now = new Date();
          const timestamp = now.toLocaleString();
          setHistory([
            welcome,
            '',
            helpText,
            '',
            `Last Updated: ${timestamp}`,
            '',
            'Available Commands:',
            ...Object.entries(commands).map(([cmd, val]) => `• ${cmd} - ${val.description}`),
            '',
          ]);
          setShowPromptInput(true);
          return;
        }
        default: {
          output.push(`[${cmd}] command executed. (Implement logic for this command)`);
          break;
        }
      }
    }
    queueOutput(output);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="h-full bg-terminal-bg flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-3 border-b border-neon-cyan/30">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          AGI Terminal v3.9.0
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto terminal-screen font-mono text-sm"
      >
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        {currentTypedLine && (
          <div className="whitespace-pre-wrap">
            {currentTypedLine}
            <span className="animate-pulse text-terminal-cursor">█</span>
          </div>
        )}
        {showPromptInput && !isTyping && (
          <>
            <div className="whitespace-pre-wrap">{''}</div>
            <div className="whitespace-pre-wrap">
              <span className="inline-flex">
                <span>{prompt}&nbsp;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-terminal-text font-mono flex-1 caret-terminal-cursor"
                  autoFocus
                  disabled={isTyping}
                />
                <span className="animate-pulse text-terminal-cursor">█</span>
              </span>
            </div>
          </>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="p-2 border-t border-neon-cyan/30 text-xs font-mono text-muted-foreground text-center">
        Type commands to explore the portfolio. Use "help" to see available commands.
      </div>
    </div>
  );
};

export default TerminalPanel;