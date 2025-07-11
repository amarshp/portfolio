# Customization Guide

## Editing Profile and Portfolio Data
- All main data is stored in `src/data/config.json`.
- Update the following sections to personalize your portfolio:
  - `profile`: Name, title, company, education, experience, research focus, current role
  - `skills`: Programming languages, AI/ML technologies, cloud/devops, frameworks/tools
  - `projects`: AI/ML, web applications, data science projects, GitHub URL
  - `achievements`: Awards, GitHub stats, project metrics, certifications, publications
  - `contact`: Email, resume link, professional links, blog, social media
  - `terminal`: Prompt, welcome message, help text, system status, error message, commands

## Updating Assets
- Profile picture: Replace `public/data/profile_pic.jpeg` with your own image (keep the same filename or update the config).
- Resume: Replace `public/data/CV.pdf` with your own resume (update the config if filename changes).

## Adding/Editing Commands
- Terminal commands are defined in the `commands` section of `config.json`.
- You can add, remove, or edit commands and their descriptions as needed. 