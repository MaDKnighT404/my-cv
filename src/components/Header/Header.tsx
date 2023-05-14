import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Contacts } from './Contacts';
import { Title } from './Title';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles['header-content']}>
        <Navigation />
        <Title />
        <Contacts />
      </div>
    </header>
  );
};
