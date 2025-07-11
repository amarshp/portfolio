# FAQ & Troubleshooting

## Q: The app fails to load or shows a config error.
- **A:** Ensure `src/data/config.json` is valid JSON and contains all required top-level keys: `profile`, `system`, `skills`, `projects`, `achievements`, `contact`, `terminal`.

## Q: How do I change my profile picture or resume?
- **A:** Replace the files in `public/data/` and update the paths in `config.json` if needed.

## Q: How do I add or remove terminal commands?
- **A:** Edit the `commands` section in `src/data/config.json`.

## Q: Can I deploy this portfolio online?
- **A:** Yes! You can deploy with Vercel, Netlify, or any static hosting that supports Vite/React.

## Q: How do I reset or clear the terminal?
- **A:** Type `clear` in the terminal panel.

## Q: How do I update my skills or projects?
- **A:** Edit the relevant sections in `src/data/config.json`. 