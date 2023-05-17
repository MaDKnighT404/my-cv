import styles from './Projects.module.scss';
export const Projects = () => {
  return (
    <article className={styles.projects}>
      <h2 className={styles.projects__title}>My projects</h2>
      <ul className={styles.projects__list}>
        <li className={styles.projects__item}>
          <img src="" alt="" />
          <p className={styles.projects}></p>
        </li>
        <li className={styles.projects__item}></li>
        <li className={styles.projects__item}></li>
        <li className={styles.projects__item}></li>
        <li className={styles.projects__item}></li>
        <li className={styles.projects__item}></li>
      </ul>
    </article>
  );
};
