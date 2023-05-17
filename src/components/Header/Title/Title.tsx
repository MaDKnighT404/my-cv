import styles from './Title.module.scss';
import { SlLocationPin } from 'react-icons/sl';
export const Title = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__name}>George Koloidi</h1>
      <h3 className={styles.title__job}>Front-end Developer</h3>
      <h4 className={styles.title__location}>
        {<SlLocationPin className={styles['title__location_icon']} />}Russia Sochi
      </h4>
    </div>
  );
};
