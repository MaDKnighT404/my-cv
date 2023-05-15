import { Options } from './Options';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import styles from './App.module.scss';

const App = () => {
  const theme = 'ligth-theme';

  return (
    <div className={`${styles.app} ${theme}`}>
      <Options />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
