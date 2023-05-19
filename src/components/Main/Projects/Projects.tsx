import { Project } from './Project';
import styles from './Projects.module.scss';
import projectsData from '@data/projectsData';

export const Projects = () => {
  return (
    <article className={styles.projects}>
      <h2 className={styles.projects__title}>My projects</h2>
      <ul className={styles['projects-list']}>
        {projectsData.map((projectData) => (
          <Project data={projectData} key={projectData.title} />
        ))}
      </ul>
    </article>
  );
};
