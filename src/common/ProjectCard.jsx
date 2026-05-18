import styles from './ProjectCard.module.css';

function ProjectCard({ image, title, problem, stack, built, repo, demo, featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <img className={styles.image} src={image} alt={`${title} preview`} loading="lazy" />

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3>{title}</h3>
          {featured ? <span className={styles.badge}>Featured</span> : null}
        </div>

        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Tech Stack:</strong> {stack}</p>
        <p><strong>What I Built:</strong> {built}</p>

        <div className={styles.links}>
          {repo ? (
            <a href={repo} target="_blank" rel="noreferrer" aria-label={`${title} repository`}>
              Repository
            </a>
          ) : null}
          {demo ? (
            <a href={demo} target="_blank" rel="noreferrer" aria-label={`${title} demo`}>
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
