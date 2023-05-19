import { Summary } from '@Main/Summary';
import { Skills } from '@Main/Skills';
import { Projects } from '@Main/Projects';
import { Languages } from '@Main/Languages';
import { Education } from '@Main/Education';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles['main-wrapper']}>
      <section className={styles.main}>
        <Summary />
        <Skills />
        <Languages />
        <Education />
        <Projects />
      </section>
    </div>
  );
};
