
import { Navigation } from '@components/Header/Navigation';
import react from '../../assets/react.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img alt="logo" src={react}></img>
      <Navigation />
    </header>
  );
};

export default Header;
