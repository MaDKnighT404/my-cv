import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Contacts } from './Contacts';
import react from '../../assets/react.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img alt="logo" src={react}></img>
      <Logo />
      <Navigation />
      <h1 className={styles.header__title}>George Koloidi</h1>
      <Contacts />
    </header>
  );
};
