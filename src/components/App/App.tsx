import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { useTheme } from '@/store/store';
import styles from './App.module.scss';

const App = () => {
  const theme = useTheme((state) => state.theme);

  return (
    <div className={`${styles.app} ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
