import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import comma from '../../assets/comma.png';
import llama from '../../assets/llama.png';
import fractal from '../../assets/fractal.png';
import cpu from '../../assets/cpu.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={comma}
          link="https://comma.ai/leaderboard"
          h3="comma.ai Controls Challenge v2"
          p="Top 10 global submission. Developed a custom feedback controller tuned with CMA-ES to minimize lateral acceleration error and jerk."
        />
        <ProjectCard
          src={llama}
          link="https://github.com/clouds1729/LLamaChess"
          h3="LLamaChess"
          p="Interactive chess app integrating a local LLaMA 2 model for natural language board analysis with FastAPI backend and chess.js frontend."
        />
        <ProjectCard
          src={fractal}
          link="https://github.com/clouds1729/xFractal-Visualizer"
          h3="xFractal-Visualizer"
          p="Real-time Mandelbrot set explorer built with C++ and SDL2. Supports smooth zoom/pan, per-pixel iteration coloring, and optimized escape-time algorithm."
        />
        <ProjectCard
          src={cpu}
          link="https://github.com/clouds1729/Single-Cycle-CPU"
          h3="Single-Cycle CPU"
          p="16-bit single-cycle CPU built in Logisim with custom ISA, 8 registers, PC + memory clock domains, jal instruction, and keyboard/TTY support."
        />
      </div>
    </section>
  );
}

export default Projects;
