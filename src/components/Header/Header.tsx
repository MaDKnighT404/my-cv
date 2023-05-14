import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Contacts } from './Contacts';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles['header-content']}>
        <Navigation />
        <h1 className={styles['header-content__title']}>George Koloidi</h1>
        <Contacts />
      </div>
    </header>
  );
};
