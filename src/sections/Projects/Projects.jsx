import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import comma from '../../assets/comma.png';
import llama from '../../assets/llama.png';
import fractal from '../../assets/fractal.png';
import cpu from '../../assets/cpu.png';
import chessx360 from '../../assets/Design uten navn (1).png';
import plantManager from '../../assets/Design uten navn (2).png';

const projects = [
  {
    title: 'Plant_Manager_1',
    image: plantManager,
    problem: 'Plant owners need simple reminders, care tracking, and a clean interface to avoid losing plants.',
    stack: 'React, JavaScript, CSS Modules, Vite',
    built: 'Built the core dashboard, plant status tracking workflows, and responsive UI patterns for daily use.',
    repo: 'https://github.com/clouds1729/Plant_Manager_1',
    demo: null,
    featured: true,
  },
  {
    title: 'LLaMAChess',
    image: llama,
    problem: 'Most chess tools are either analysis-heavy or chat-heavy; few combine natural-language coaching with board context.',
    stack: 'FastAPI, Python, LLaMA 2, React, chess.js',
    built: 'Built a chess app that pairs legal move validation with LLM-powered explanations and game insights.',
    repo: 'https://github.com/clouds1729/LLamaChess',
    demo: null,
    featured: true,
  },
  {
    title: 'Chess_x360',
    image: chessx360,
    problem: 'Advanced players often need a focused environment for fast analysis and board experimentation.',
    stack: 'React, JavaScript, Vite, Chess tooling',
    built: 'Built an interactive chess experience with smooth move handling, board state updates, and extensible architecture.',
    repo: 'https://github.com/clouds1729/Chess_x360',
    demo: null,
    featured: true,
  },
  {
    title: 'xFractal-Visualizer',
    image: fractal,
    problem: 'Fractal rendering can become slow and visually flat without optimized iteration and color mapping.',
    stack: 'C++, SDL2',
    built: 'Built a real-time Mandelbrot explorer with zoom/pan controls, per-pixel coloring, and optimized escape-time rendering.',
    repo: 'https://github.com/clouds1729/xFractal-Visualizer',
    demo: null,
    featured: true,
  },
  {
    title: 'Single-Cycle-CPU',
    image: cpu,
    problem: 'Computer architecture concepts are easier to learn with a complete, working CPU model.',
    stack: 'Logisim, Digital Logic Design',
    built: 'Designed a 16-bit single-cycle CPU with custom ISA, jal support, registers, memory, and TTY/keyboard integration.',
    repo: 'https://github.com/clouds1729/Single-Cycle-CPU',
    demo: null,
    featured: true,
  },
  {
    title: 'comma.ai Controls Challenge v2',
    image: comma,
    problem: 'The challenge required minimizing lateral acceleration error and jerk under realistic control constraints.',
    stack: 'Python, Control Theory, CMA-ES',
    built: 'Implemented and tuned a custom feedback controller that reached a top-10 global leaderboard position.',
    repo: null,
    demo: 'https://comma.ai/leaderboard',
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <p className={styles.subtitle}>A recruiter-friendly overview of selected work across systems, AI, graphics, and product engineering.</p>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
