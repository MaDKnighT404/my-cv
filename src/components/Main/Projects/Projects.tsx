import { Project } from './Project';
import projectsData from '@data/projectsData';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <article className={styles.projects} id="projects">
      <h2 className={styles.projects__title}>My projects</h2>
      <ul className={styles['projects-list']}>
        {projectsData.map((projectData) => (
          <Project data={projectData} key={projectData.title} />
        ))}
      </ul>
    </article>
  );
};
