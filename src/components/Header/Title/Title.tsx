import styles from './Title.module.scss';

export const Title = () => {
  return (
    <div className={styles['title']}>
      <h1 className={styles['title__name']}>George Koloidi</h1>
      <h2 className={styles['title__job']}>Front-end Developer</h2>
    </div>
  );
};
