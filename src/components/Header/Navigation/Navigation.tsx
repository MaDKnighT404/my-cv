import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        <li className={styles.navMenuItem}>Contacts</li>
        <li className={styles.navMenuItem}>Summary</li>
        <li className={styles.navMenuItem}>Skills</li>
        <li className={styles.navMenuItem}>Projects</li>
        <li className={styles.navMenuItem}>Courses</li>
        <li className={styles.navMenuItem}>Education</li>
        <li className={styles.navMenuItem}>Language</li>
      </ul>
    </nav>
  );
};
