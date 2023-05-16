import useTheme from '@store/store';
import styles from './Options.module.scss';

export const Options = () => {
  const theme = useTheme((state) => state.theme);
  const changeTheme = useTheme((state) => state.changeTheme);

  const handleToggleTheme = () => {
    if (theme === 'light-theme') {
      localStorage.setItem('theme', 'dark-theme');
      changeTheme('dark-theme');
    } else {
      localStorage.setItem('theme', 'light-theme');
      changeTheme('light-theme');
    }
  };

  return (
    <div className={styles.options}>
      <button
        onClick={handleToggleTheme}
        className={`${styles.options__btn} ${
          theme === 'light-theme' ? styles.options__btn_light : styles.options__btn_dark
        }`}
      />
    </div>
  );
};
