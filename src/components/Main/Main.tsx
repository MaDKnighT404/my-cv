import { Summary } from '@Main/Summary';
import { Skills } from '@Main/Skills';
import { Projects } from '@Main/Projects';
import { Languages } from '@Main/Languages';
import { Education } from '@Main/Education';
import { Courses } from '@Main/Courses';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles['main-wrapper']}>
      <section className={styles.main}>
        <Summary />
        <Skills />
        <Languages />
        <Education />
        <Courses />
        <Projects />
      </section>
    </div>
  );
};
