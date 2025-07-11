/**
 * Terminal Demo Utility
 * Provides predefined command sequences for showcasing terminal features
 */

import { Terminal } from '@xterm/xterm';

export interface DemoSequence {
  name: string;
  description: string;
  commands: string[];
  delay: number;
}

export const terminalDemos: DemoSequence[] = [
  {
    name: 'Welcome Demo',
    description: 'Basic introduction to the terminal',
    commands: [
      'help',
      'about'
    ],
    delay: 2000
  },
  {
    name: 'Portfolio Showcase',
    description: 'Display portfolio information',
    commands: [
      'projects',
      'skills',
      'achievements'
    ],
    delay: 1500
  },
  {
    name: 'System Information',
    description: 'Show system status and diagnostics',
    commands: [
      'diagnostics',
      'clear',
      'reboot'
    ],
    delay: 1000
  },
  {
    name: 'Contact Information',
    description: 'Display contact details',
    commands: [
      'contact',
      'leetcode'
    ],
    delay: 1500
  },
  {
    name: 'Full Portfolio Tour',
    description: 'Complete portfolio exploration',
    commands: [
      'help',
      'about',
      'projects',
      'skills',
      'achievements',
      'contact',
      'leetcode',
      'diagnostics',
      'clear',
      'reboot'
    ],
    delay: 1000
  }
];

/**
 * Execute a demo sequence
 * @param terminal - The xterm.js terminal instance
 * @param sequence - The demo sequence to execute
 * @param executeCommand - Function to execute commands
 */
export const executeDemo = async (
  terminal: Terminal,
  sequence: DemoSequence,
  executeCommand: (command: string) => Promise<void>
) => {
  if (!terminal) return;

  // Clear terminal first
  terminal.clear();
  
  // Show demo start message
  await typewriterWrite(terminal, `Starting Demo: ${sequence.name}\r\n`, 30);
  await typewriterWrite(terminal, `${sequence.description}\r\n\r\n`, 30);
  await typewriterWrite(terminal, 'amarsh@agi-portfolio:~$ ', 30);

  // Execute each command with delay
  for (const command of sequence.commands) {
    await new Promise(resolve => setTimeout(resolve, sequence.delay));
    
    // Type the command
    await typewriterWrite(terminal, command, 50);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Execute the command
    await executeCommand(command);
  }

  // Show demo completion
  await new Promise(resolve => setTimeout(resolve, 1000));
  await typewriterWrite(terminal, '\r\nDemo completed! Try typing your own commands.\r\n', 30);
  await typewriterWrite(terminal, 'amarsh@agi-portfolio:~$ ', 30);
};

/**
 * Typewriter effect for terminal output
 * @param terminal - The xterm.js terminal instance
 * @param text - Text to write
 * @param speed - Typing speed in milliseconds
 */
const typewriterWrite = async (terminal: Terminal, text: string, speed: number = 10) => {
  for (let i = 0; i < text.length; i++) {
    terminal.write(text[i]);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
};

/**
 * Get a random demo sequence
 * @returns Random demo sequence
 */
export const getRandomDemo = (): DemoSequence => {
  const randomIndex = Math.floor(Math.random() * terminalDemos.length);
  return terminalDemos[randomIndex];
}; 