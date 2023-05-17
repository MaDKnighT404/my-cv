import styles from './Languages.module.scss';

export const Languages = () => {
  return (
    <article className={`article ${styles.languages}`}>
      <h2 className={styles.languages__title}>Languages</h2>
      <ul className={styles.languages__list}>
        <li className={styles.languages__item}>Russia - Native</li>
        <li className={styles.languages__item}>English - B1+</li>
      </ul>
    </article>
  );
};
