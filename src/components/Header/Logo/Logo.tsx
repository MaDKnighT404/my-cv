import photo from '@assets/photo.png';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={photo} alt="photo" className={styles['logo__img']} />
    </div>
  );
};

export default Logo;
