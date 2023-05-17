import styles from './Summary.module.scss';

export const Summary = () => {
  return (
    <article className={`article ${styles.summary}`}>
      <h2 className={styles.summary__title}>Summary</h2>
      <p className={styles.summary__content}>
        More than a year ago I started learning JavaScript and creating my first pet projects. I
        devote almost all my free time to learning and studying new technologies in the field of
        front-end development. I have experience of working in a team. I also have experience
        writing a server on Node.js (express) with a MongoDB database connection
      </p>
    </article>
  );
};
