import { Logo } from '@Header/Logo';
import { Navigation } from '@Header/Navigation';
import { Burger } from '@Header/Burger';
import { Contacts } from '@Header/Contacts';
import { Title } from '@Header/Title';
import { Options } from '@Header/Options';
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
