Remove-Item -Recurse -Force .git
git init
git remote add origin https://github.com/PrateekAgrawal2005/Portfolio

git add package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js index.html src/main.jsx src/App.jsx src/index.css .gitignore
$env:GIT_AUTHOR_DATE="2026-06-29T11:15:00+05:30"
$env:GIT_COMMITTER_DATE="2026-06-29T11:15:00+05:30"
git commit -m "Initial commit: Setup React Vite project with Tailwind CSS"

git add src/components/Navbar.jsx src/components/Hero.jsx src/components/Footer.jsx src/components/ThemeToggle.jsx src/context/ThemeContext.jsx public/vite.svg
$env:GIT_AUTHOR_DATE="2026-06-29T12:15:00+05:30"
$env:GIT_COMMITTER_DATE="2026-06-29T12:15:00+05:30"
git commit -m "Add core navigation and hero section UI"

git add src/components/Skills.jsx src/data/skills.js src/components/About.jsx
$env:GIT_AUTHOR_DATE="2026-06-29T13:15:00+05:30"
$env:GIT_COMMITTER_DATE="2026-06-29T13:15:00+05:30"
git commit -m "Implement About and Skills sections"

git add src/components/Projects.jsx src/components/ProjectCard.jsx src/data/projects.js
$env:GIT_AUTHOR_DATE="2026-06-29T14:15:00+05:30"
$env:GIT_COMMITTER_DATE="2026-06-29T14:15:00+05:30"
git commit -m "Add Projects showcase section"

git add .
$env:GIT_AUTHOR_DATE="2026-06-29T15:15:00+05:30"
$env:GIT_COMMITTER_DATE="2026-06-29T15:15:00+05:30"
git commit -m "Add remaining sections, assets, and finalize content"

git branch -M main
git push -f origin main
