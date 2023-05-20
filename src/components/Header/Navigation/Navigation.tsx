import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-menu']}>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Contacts
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Summary
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Skills
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Projects
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Education
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Courses
          </a>
        </li>
        <li>
          <a href="" className={styles['nav-menu__link']}>
            Language
          </a>
        </li>
      </ul>
    </nav>
  );
};
