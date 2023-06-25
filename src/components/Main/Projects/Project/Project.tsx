import { FC, useEffect, useState } from 'react';
import { ProjectData } from '@data/projectsData';
import styles from './Project.module.scss';

interface ProjectProps {
  data: ProjectData;
}

export const Project: FC<ProjectProps> = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = data.img;

    image.onload = () => {
      setImageLoaded(true);
    };

    return () => {
      image.onload = null; // Очистка обработчика события при размонтировании компонента
    };
  }, [data.img]);

  return (
    <li className={styles.project}>
      <a href={data.link} className={styles.project__link}>
        <h4 className={styles.project__title}>{data.title}</h4>
        {imageLoaded ? (
          <img src={data.img} alt="online shop" className={styles.project__img} />
        ) : (
          <div className="loader" />
        )}
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
