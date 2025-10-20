import React from 'react';
import styles from './WorkExperienceStyles.module.css';

function WorkExperience() {
  const experiences = [
  {
    company: 'Comma.ai',
    role: 'Controls Challenge Participant',
    period: 'Summer 2025',
    description:
      'Developed an custom feedback controller for the TinyPhysics model and tuned it with CMA-ES. Prioritized smoothness and accuracy to achieve competitive leaderboard performance.',
    tech: ['Python', 'CasADi', 'CMA-ES', 'TinyPhysics'],
  },
  {
    company: 'Curatle',
    role: 'Software Engineering Intern',
    period: 'June 2024 – Aug 2024 · Remote',
    description:
      'Backend AI Engineering: built and fine-tuned vector-DB retrieval for ChatGPT-style APIs to boost accuracy and latency. Frontend Development: shipped React/TypeScript UIs for UGC and internal tooling. Data Pipelines: automated ingestion/processing with Python + cloud functions, cutting backend costs ~20% and 3× scaling data capacity.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'OpenAI API'],
  },
  {
    company: 'Duke University — Computer Science',
    role: 'Teaching Assistant (Discrete Math, CompSci 230)',
    period: 'Jan 2024 – May 2024 · Durham, NC',
    description:
      'Built assignments and learning modules with Prof. Shao Heng Ko, led office hours, and reviewed submissions with a focus on logic, proof structure, and mathematical rigor.',
    tech: ['Proofs', 'Algorithms', 'C++', 'Python'],
  },
  {
    company: 'Duke Applied Machine Learning',
    role: 'Software Developer',
    period: 'Jan 2024 – Present · Durham, NC',
    description:
      'Contributed full-stack features and ML tooling on real-world datasets. Collaborated on deployment, data handling, and interpretability workflows within a team setting.',
    tech: ['Python', 'ML', 'Docker', 'AWS'],
  },
  {
    company: 'Tech Tree Root (501c3 Nonprofit)',
    role: 'Software Engineering Intern',
    period: 'Aug 2023 – Present · Remote',
    description:
      'Built internal tools for large hybrid hackathons (e.g., Ivy Plus). Automated registration, judging, and post-event tracking with Python + Google Apps Script. Helped prototype multilingual coding content (Python/JS/Swift).',
    tech: ['Python', 'JavaScript', 'Google Apps Script', 'Swift'],
  },
];

  return (
    <section id="work" className={styles.workSection}>
      <h2 className={styles.heading}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3>{exp.role}</h3>
            <p className={styles.company}>{exp.company} • {exp.period}</p>
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.techList}>
              {exp.tech.map((t, i) => (
                <span key={i} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
