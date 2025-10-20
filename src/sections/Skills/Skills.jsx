import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>

      {/* Languages */}
      <h3 className={styles.subheading}>Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Rust" />
        <SkillList src={checkMarkIcon} skill="TypeScript / JavaScript" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Bash" />
        <SkillList src={checkMarkIcon} skill="MIPS" />
      </div>

      <hr />

      {/* Frameworks / DB */}
      <h3 className={styles.subheading}>Frameworks / DB</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="FastAPI" />
        <SkillList src={checkMarkIcon} skill="Flask" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>

      <hr />

      {/* Tools / Platforms */}
      <h3 className={styles.subheading}>Tools / Platforms</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="GCP" />
        <SkillList src={checkMarkIcon} skill="Vercel" />
        <SkillList src={checkMarkIcon} skill="Cloudflare" />
        <SkillList src={checkMarkIcon} skill="Grafana" />
        <SkillList src={checkMarkIcon} skill="Prometheus" />
      </div>
    </section>
  );
}

export default Skills;
