import styles from './Skills.module.scss';

export const Skills = () => {
  return (
    <article className={`article ${styles.skills}`} id="skills">
      <h2 className={styles.skills__title}>Skills</h2>
      <ul className={styles.skills__list}>
        <li className={styles['skills__list-item']}>HTML</li>
        <li className={styles['skills__list-item']}>CSS</li>
        <li className={styles['skills__list-item']}>SASS/SCSS</li>
        <li className={styles['skills__list-item']}>Tailwind</li>
        <li className={styles['skills__list-item']}>JavaScript</li>
        <li className={styles['skills__list-item']}>TypeScript</li>
        <li className={styles['skills__list-item']}>React</li>
        <li className={styles['skills__list-item']}>Redux</li>
        <li className={styles['skills__list-item']}>Zustand</li>
        <li className={styles['skills__list-item']}>Git</li>
        <li className={styles['skills__list-item']}>Express</li>
        <li className={styles['skills__list-item']}>Jest</li>
        <li className={styles['skills__list-item']}>Cypress</li>
      </ul>
    </article>
  );
};
