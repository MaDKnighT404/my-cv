import styles from './Logo.module.scss';
import photo from '../../../assets/photo.png';
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={photo} alt="photo" width="150" />
    </div>
  );
};

export default Logo;
