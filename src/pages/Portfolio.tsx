import { useState, useEffect } from 'react';
import BootSequence from '../components/BootSequence';
import AGIProfile from '../components/AGIProfile';
import TerminalPanel from '../components/TerminalPanel';
import PortfolioSections from '../components/PortfolioSections';

const Portfolio = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleBootComplete = () => {
    setShowBoot(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Boot Sequence */}
      {showBoot && <BootSequence onComplete={handleBootComplete} />}
      
      {/* Main Content */}
      {showContent && (
        <div className="split-screen animate-fade-in">
          {/* Left Panel - AGI Profile */}
          <div className="relative">
            <AGIProfile />
          </div>
          
          {/* Right Panel - Terminal */}
          <div className="relative">
            <TerminalPanel />
          </div>
        </div>
      )}

      {/* Hidden Portfolio Sections */}
      <div className="hidden">
        <PortfolioSections />
      </div>
    </div>
  );
};

export default Portfolio;