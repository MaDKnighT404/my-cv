import styles from './Courses.module.scss';

export const Courses = () => {
  return (
    <article className={`article ${styles.courses}`}>
      <h2 className={styles.courses__title}>Courses</h2>
      <ul className={styles.courses__content}>
        <li className={styles.courses__item}>
          <a className={styles.courses__link} href="https://app.rs.school/certificate/slfgvwn1">
            <span className={styles.courses__source}>RS School</span>
            <span className={styles.courses__name}>JavaScript</span>
          </a>
        </li>
        <li className={styles.courses__item}>
          <a className={styles.courses__link} href="">
            <span className={styles.courses__source}>RS School</span>
            <span className={styles.courses__name}>React</span>
          </a>
        </li>
        <li className={styles.courses__item}>
          <a className={styles.courses__link} href="https://ru.hexlet.io/courses/intro_to_git">
            <span className={styles.courses__source}>Hexlet</span>
            <span className={styles.courses__name}>Git</span>
          </a>
        </li>
        <li className={styles.courses__item}>
          <a
            className={styles.courses__link}
            href="https://www.youtube.com/watch?v=CxgOKJh4zWE&ab_channel=BogdanStashchuk"
          >
            <span className={styles.courses__source}>Youtube</span>
            <span className={styles.courses__name}>JavaScript</span>
          </a>
        </li>
        <li className={styles.courses__item}>
          <a
            className={styles.courses__link}
            href="https://www.youtube.com/watch?v=g1mPqu7u39o&ab_channel=REDGroup"
          >
            <span className={styles.courses__source}>Youtube</span>
            <span className={styles.courses__name}>Next</span>
          </a>
        </li>
        <li className={styles.courses__item}>
          <a
            className={styles.courses__link}
            href="https://www.youtube.com/watch?v=GQ_pTmcXNrQ&t=12341s&ab_channel=ArchakovBlog"
          >
            <span className={styles.courses__source}>Youtube</span>
            <span className={styles.courses__name}>FullStack</span>
          </a>
        </li>
      </ul>
    </article>
  );
};
