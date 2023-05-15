import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Burger } from './Burger';
import { Contacts } from './Contacts';
import { Title } from './Title';
import { Options } from './Options';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Options />
      <Logo />
      <div className={styles['header-content']}>
        <Navigation />
        <Burger />
        <Title />
        <Contacts />
      </div>
    </header>
  );
};
