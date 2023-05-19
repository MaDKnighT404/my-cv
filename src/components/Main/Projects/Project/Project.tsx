import { FC } from 'react';
import { ProjectData } from '@data/projectsData';
import styles from './Project.module.scss';

interface ProjectProps {
  data: ProjectData;
}

export const Project: FC<ProjectProps> = ({ data }) => {
  return (
    <li className={styles.project}>
      <a href={data.link} className={styles.project__link}>
        <h4 className={styles.project__title}>{data.title}</h4>
        <img src={data.img} alt="online shop" className={styles.project__img} />
        <ul className={styles.description}>
          {data.description.map((item) => (
            <li className={styles.description__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </a>
    </li>
  );
};
