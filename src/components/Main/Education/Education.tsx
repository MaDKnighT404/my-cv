import styles from './Education.module.scss';

export const Education = () => {
  return (
    <article className={`article ${styles.education}`} id="education">
      <h2 className={styles.education__title}>Education</h2>
      <div className={styles.education__content}>
        <span className={styles.education__university}>
          Sochi Institute of <br /> Economics and <br /> Information <br /> Technologies
        </span>
        <span className={styles.education__speciality}>Computer engineer</span>
        <span className={styles.education__years}>2005 - 2010</span>
      </div>
    </article>
  );
};
