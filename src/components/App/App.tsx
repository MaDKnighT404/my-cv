import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
