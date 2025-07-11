# AGI Portfolio Terminal

A modern, interactive portfolio for Amarsh Pedapati, Senior Data Scientist & AI Consultant. This project features a terminal-inspired UI, dynamic profile, and a showcase of AI/ML, data science, and software engineering expertise.

## Features
- **Terminal-inspired UI**: Type commands to explore the portfolio interactively.
- **Dynamic AGI Profile**: View professional background, skills, achievements, and contact info.
- **Boot Sequence Animation**: Engaging startup animation for a futuristic feel.
- **Responsive Design**: Works on desktop and mobile devices.
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and shadcn-ui components.

## Technologies Used
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## Installation
1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:8080](http://localhost:8080) to view the app.

## Usage
- Type `help` in the terminal panel to see available commands.
- Explore sections like `about`, `projects`, `skills`, `achievements`, and `contact`.
- All data is loaded from `src/data/config.json` for easy customization.

## Project Structure
```
echo-terminal-forge/
├── public/
│   └── data/           # Profile picture, CV, etc.
├── src/
│   ├── components/     # React components (AGIProfile, TerminalPanel, BootSequence, etc.)
│   ├── data/           # config.json (profile and portfolio data)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # App pages (Index, Portfolio, NotFound)
│   ├── services/       # Config service for loading data
│   └── index.css       # Tailwind and global styles
├── package.json
├── tailwind.config.ts
└── README.md
```

## Author
**Amarsh Pedapati**  
Senior Data Scientist & AI Consultant  
[LinkedIn](https://www.linkedin.com/in/amarshp/) | [GitHub](https://github.com/amarshp) | [Medium](https://medium.com/@amarsh.pedapati)

For business inquiries: amarsh.pedapati@gmail.com

## License
[Specify your license here]
