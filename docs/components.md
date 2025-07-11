# Component & Folder Guide

## Main Folders
- `src/components/`: All React UI components (AGIProfile, TerminalPanel, BootSequence, etc.)
- `src/data/`: Contains `config.json` for all portfolio data
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions (e.g., class name merging)
- `src/pages/`: App pages (Index, Portfolio, NotFound)
- `src/services/`: Config service for loading and validating data

## Key Components
- **AGIProfile**: Renders the dynamic profile, skills, metrics, and quick links
- **TerminalPanel**: Handles the terminal UI, command parsing, and output
- **BootSequence**: Displays the animated boot/startup sequence
- **PortfolioSections**: (Hidden) Additional sections for future expansion
- **UI Components**: All reusable UI elements are in `src/components/ui/` 