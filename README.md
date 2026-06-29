# Prateek Agrawal — ML Engineer Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Dark/Light Mode** — Toggle between dark and light themes with smooth transitions
- **Glassmorphism UI** — Modern glass-style cards with backdrop blur and soft glows
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Smooth Animations** — Scroll-triggered fade-ins and hover effects powered by Framer Motion
- **Single-Page Scroll** — Anchor-based navigation with smooth scrolling
- **SEO Optimized** — Proper meta tags, semantic HTML, and heading hierarchy

## Tech Stack

- [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- [Tailwind CSS](https://tailwindcss.com/) v3
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (UI icons)
- [React Icons](https://react-icons.github.io/react-icons/) (brand/tech logos)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output goes to `./dist`.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for one-click deployment to [Vercel](https://vercel.com/):

1. Push to a GitHub repository
2. Import the repo in Vercel
3. Vercel auto-detects Vite and deploys

## Customization

### Profile Photo
In `src/components/Hero.jsx`, replace the initials avatar with an `<img>` tag — a comment in the code shows exactly where.

### Resume
Place your resume PDF at `public/resume.pdf`. The "Download Resume" button already links to `/resume.pdf`.

### Projects, Skills, Achievements
Edit the data files in `src/data/` to update content without touching components:
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/achievements.js`

## Assumptions

- **Dark mode default**: The site starts in dark mode using in-memory React state (no localStorage persistence). Refreshing the page resets to dark mode.
- **Resume link**: The "Download Resume" button links to `/resume.pdf`. No actual file is included; the button renders normally and opens a 404 in a new tab until a real PDF is placed in the `public/` directory.
- **Profile avatar**: Uses a gradient circle with "PA" initials as a placeholder. Designed for a one-line swap to a real photo.
- **Project links**: GitHub and Live Demo links use `#` placeholders where no real URLs were specified. They render as working buttons that scroll to the top of the page.
- **Education year (2024)**: Interpreted as the admission/start year based on the spec. Adjust in `src/components/Education.jsx` if needed.
- **Tailwind v3**: Used Tailwind CSS v3 with PostCSS as the spec requests Tailwind without specifying a version, and v3 is the most stable and widely supported.

## License

MIT
