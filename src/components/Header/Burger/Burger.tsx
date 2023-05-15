import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Burger.module.scss';

export const Burger = () => {
  return (
    <div className={styles.burger}>
      <GiHamburgerMenu />
    </div>
  );
};
