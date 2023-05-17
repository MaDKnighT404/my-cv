import { Project } from './Project';
import styles from './Projects.module.scss';
export const Projects = () => {
  return (
    <article className={styles.projects}>
      <h2 className={styles.projects__title}>My projects</h2>
      <ul className={styles['projects-list']}>
        <Project />
        <Project />
        <Project />
      </ul>
    </article>
  );
};
