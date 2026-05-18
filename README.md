# George K. — Software Engineering Portfolio

This repository contains my personal portfolio site, built to present my software engineering background and selected technical projects in a clear, recruiter-friendly format.

## Who I Am

I’m George K., a Computer Science + Mathematics student at Duke University focused on:
- software engineering fundamentals
- applied AI and machine learning
- systems and performance-minded development

This site is designed to communicate impact quickly: what I built, why it mattered, and which technologies I used.

## What the Site Contains

- **Hero section** with a concise professional summary, resume link, and social links.
- **Work experience section** highlighting relevant roles.
- **Featured projects section** emphasizing problem statements, implementation details, tech stack, and links.
- **Skills section** with core tools and technologies.
- **Contact section** for direct outreach.

## Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** CSS Modules + global CSS variables
- **Language:** JavaScript (ES modules)
- **Package Manager:** npm

## Local Setup

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd Portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start development server

```bash
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is optimized for static hosting providers such as:
- Vercel
- Netlify
- GitHub Pages (with appropriate base path configuration)

Typical deployment flow:
1. Push changes to your Git provider.
2. Connect the repository in your hosting platform.
3. Set build command to `npm run build`.
4. Set output directory to `dist`.

## Project Structure

```text
Portfolio/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ assets/                 # Images, icons, resume PDF
│  ├─ common/                 # Shared components (e.g., project card, theme context)
│  ├─ sections/               # Page sections (Hero, Projects, Skills, etc.)
│  ├─ App.jsx                 # Main page composition
│  ├─ index.css               # Global styles and design tokens
│  └─ main.jsx                # React entrypoint
├─ index.html                 # SEO/meta + app mount
├─ package.json
└─ vite.config.js
```

## Notes

- The design intentionally stays minimal: fast load time, clear hierarchy, and straightforward navigation.
- Project content can be updated in `src/sections/Projects/Projects.jsx`.
