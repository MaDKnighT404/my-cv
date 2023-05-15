import styles from './Options.module.scss';
import useTheme from '../../../store/store';

export const Options = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  const theme = useTheme((state) => state.theme);
  const changeTheme = useTheme((state) => state.changeTheme);

  const handleToggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      changeTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      changeTheme('light');
    }
  };

  return (
    <div className={styles.options}>
      <button
        onClick={handleToggleTheme}
        className={`${styles.options__btn} ${
          theme === 'light' ? styles.options__btn_light : styles.options__btn_dark
        }`}
      />
    </div>
  );
};
