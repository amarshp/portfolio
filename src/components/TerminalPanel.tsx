
import { useState, useEffect, useRef } from 'react';

const TerminalPanel = () => {
  const [input, setInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [availableCommands] = useState([
    'help',
    'about', 
    'projects',
    'skills',
    'faang',
    'contact',
    'whoami',
    'clear'
  ]);
  
  const getInitialHistory = () => {
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    return [
      'AGI Terminal v3.9.0 - Arjun Reddy Portfolio System',
      '',
      "Type 'help' for available commands",
      'System Status: ONLINE',
      `Last Updated: ${timestamp}`,
      '',
      'Available Commands:',
      '• help - Show command list',
      '• about - Personal & professional info', 
      '• projects - Portfolio showcase',
      '• skills - Technical expertise',
      '• faang - Interview preparation',
      '• contact - Get in touch',
      '• whoami - Display user info',
      '• clear - Clear terminal',
      '',
      'arjun@agi-portfolio:~$ '
    ];
  };

  const [history, setHistory] = useState<string[]>(getInitialHistory());
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

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

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    const newHistory = [...history];
    
    // Add the command to history
    newHistory[newHistory.length - 1] += command;
    newHistory.push('');

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands:');
        availableCommands.forEach(cmd => {
          switch(cmd) {
            case 'help':
              newHistory.push('  help          - Show this help message');
              break;
            case 'about':
              newHistory.push('  about         - Show about section');
              break;
            case 'projects':
              newHistory.push('  projects      - View project showcase');
              break;
            case 'skills':
              newHistory.push('  skills        - Display skills and tech stack');
              break;
            case 'faang':
              newHistory.push('  faang         - FAANG interview preparation');
              break;
            case 'contact':
              newHistory.push('  contact       - Contact information');
              break;
            case 'whoami':
              newHistory.push('  whoami        - Display user info');
              break;
            case 'clear':
              newHistory.push('  clear         - Clear terminal');
              break;
          }
        });
        break;

      case 'whoami':
        newHistory.push('Arjun Reddy - Senior Data Scientist & AI Consultant');
        newHistory.push('IIT Hyderabad Graduate | Fortune 500 Experience');
        newHistory.push('Specializing in Agentic AI and RAG Architectures');
        break;

      case 'about':
        newHistory.push('Loading about section...');
        // This would trigger showing the about content
        break;

      case 'projects':
        newHistory.push('Loading project showcase...');
        // This would trigger showing the projects content
        break;

      case 'skills':
        newHistory.push('Loading skills and tech stack...');
        // This would trigger showing the skills content
        break;

      case 'faang':
        newHistory.push('Loading FAANG preparation materials...');
        // This would trigger showing the FAANG content
        break;

      case 'contact':
        newHistory.push('Contact Information:');
        newHistory.push('Email: arjun.reddy@email.com');
        newHistory.push('LinkedIn: linkedin.com/in/arjunreddy');
        newHistory.push('GitHub: github.com/arjunreddy');
        break;

      case 'clear':
        setHistory(getInitialHistory());
        return;

      case '':
        break;

      default:
        newHistory.push(`Command not found: ${command}`);
        newHistory.push('Type "help" for available commands.');
        break;
    }

    newHistory.push('');
    newHistory.push('arjun@agi-portfolio:~$ ');
    setHistory(newHistory);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
            {index === history.length - 1 && (
              <span className="inline-flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none text-terminal-text font-mono flex-1 caret-terminal-cursor"
                  autoFocus
                />
                <span className="animate-pulse text-terminal-cursor">█</span>
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="p-2 border-t border-neon-cyan/30 text-xs font-mono text-muted-foreground text-center">
        Type commands to explore the portfolio. Use "help" to see available commands.
      </div>
    </div>
  );
};

export default TerminalPanel;
