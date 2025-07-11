# Development & Contribution Guide

## Local Development
1. Clone the repository and install dependencies:
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   npm install
   # or
   yarn install
   ```
2. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Code Structure
- All main logic is in `src/`.
- UI components are in `src/components/`.
- Data/configuration is in `src/data/config.json`.

## Contributing
- Fork the repo and create a feature branch.
- Make your changes and submit a pull request.
- Please follow the existing code style and structure.

## Testing
- Manual testing is recommended for UI/UX and config changes.
- Add your own tests as needed for new features. 