import styles from './Courses.module.scss';

export const Courses = () => {
  return (
    <article className={`article ${styles.courses}`}>
      <h2 className={styles.courses__title}>Courses</h2>
      <ul className={styles.courses__content}>
        <li className={styles.courses__item}>1</li>
        <li className={styles.courses__item}>2</li>
        <li className={styles.courses__item}>3</li>
        <li className={styles.courses__item}>4</li>
        <li className={styles.courses__item}>5</li>
      </ul>
    </article>
  );
};
