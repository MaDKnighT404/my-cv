import styles from './Project.module.scss';
import rsToys from '@assets/projects_img/rs_toys.png';

export const Project = () => {
  return (
    <li className={styles['project']}>
      <a href="https://madknight404.github.io/online-store/" className={styles['project__link']}>
        <h4 className={styles['project__title']}>Online shop</h4>
        <img src={rsToys} alt="online shop" className={styles['project__img']} />
        <ul className={styles['description']}>
          <li className={styles['description__item']}>Working in team</li>
          <li className={styles['description__item']}>MVC pattern</li>
          <li className={styles['description__item']}>SPA</li>
          <li className={styles['description__item']}>TypeScript</li>
          <li className={styles['description__item']}>Filters</li>
          <li className={styles['description__item']}>Hash routing</li>
          <li className={styles['description__item']}>Payment system</li>
          <li className={styles['description__item']}>Cart pagination</li>
          <li className={styles['description__item']}>Jest testing</li>
        </ul>
      </a>
    </li>
  );
};
