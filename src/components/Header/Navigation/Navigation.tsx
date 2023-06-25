import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-menu']}>
        <li>
          <a href="#contacts" className={styles['nav-menu__link']}>
            Contacts
          </a>
        </li>
        <li>
          <a href="#summary" className={styles['nav-menu__link']}>
            Summary
          </a>
        </li>
        <li>
          <a href="#skills" className={styles['nav-menu__link']}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={styles['nav-menu__link']}>
            Projects
          </a>
        </li>
        <li>
          <a href="#education" className={styles['nav-menu__link']}>
            Education
          </a>
        </li>
        <li>
          <a href="#courses" className={styles['nav-menu__link']}>
            Courses
          </a>
        </li>
        <li>
          <a href="#languages" className={styles['nav-menu__link']}>
            Languages
          </a>
        </li>
      </ul>
    </nav>
  );
};
