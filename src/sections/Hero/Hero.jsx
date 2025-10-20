import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of George"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
          role="button"
          tabIndex={0}
        />
      </div>

      <div className={styles.info}>
        <h1>
          George K.
        </h1>
        <h2>Software Developer</h2>

        <span>
          {/* TODO: replace hrefs with Lawrence's real profiles */}
          <a href="https://github.com/clouds1729" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/gka11-c137/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>

        <p className={styles.description}>
          I’m a junior studying Computer Science and Mathematics at Duke University,
  passionate about algorithms, software systems, and building things that work.
  I’ve gained experience across startups, academic research, and larger
  organizations, where I’ve explored everything from machine learning to
  controls and full-stack development.  
  Outside of work, I enjoy gaming, chess and football(What you might call "soccer").
        </p>

        <a href={CV} target="_blank" rel="noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
