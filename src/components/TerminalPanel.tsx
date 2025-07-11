import { useState, useEffect, useRef } from 'react';

const TerminalPanel = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'AGI Terminal v3.9.0 - Arjun Reddy Portfolio System',
    'Type "help" for available commands.',
    '',
    'arjun@agi-portfolio:~$ '
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    const newHistory = [...history];
    
    // Add the command to history
    newHistory[newHistory.length - 1] += command;
    newHistory.push('');

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands:');
        newHistory.push('  help          - Show this help message');
        newHistory.push('  about         - Show about section');
        newHistory.push('  projects      - View project showcase');
        newHistory.push('  skills        - Display skills and tech stack');
        newHistory.push('  faang         - FAANG interview preparation');
        newHistory.push('  certs         - Certifications and publications');
        newHistory.push('  blog          - Personal projects and blog');
        newHistory.push('  interests     - Personal interests');
        newHistory.push('  contact       - Contact information');
        newHistory.push('  clear         - Clear terminal');
        newHistory.push('  whoami        - Display user info');
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

      case 'certs':
        newHistory.push('Loading certifications and publications...');
        // This would trigger showing the certifications content
        break;

      case 'blog':
        newHistory.push('Loading personal projects and blog...');
        // This would trigger showing the blog content
        break;

      case 'interests':
        newHistory.push('Loading personal interests...');
        // This would trigger showing the interests content
        break;

      case 'contact':
        newHistory.push('Contact Information:');
        newHistory.push('Email: arjun.reddy@email.com');
        newHistory.push('LinkedIn: linkedin.com/in/arjunreddy');
        newHistory.push('GitHub: github.com/arjunreddy');
        break;

      case 'clear':
        setHistory([
          'AGI Terminal v3.9.0 - Arjun Reddy Portfolio System',
          'Type "help" for available commands.',
          '',
          'arjun@agi-portfolio:~$ '
        ]);
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