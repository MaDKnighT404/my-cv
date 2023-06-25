import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <ul className={styles.contacts} id="contacts">
      <li className={styles.contacts__item}>
        <span className={styles.contacts__header}>Github</span>
        <span className={styles.contacts__content}>github.com/madknight404</span>
      </li>
      <li className={styles.contacts__item}>
        <span className={styles.contacts__header}>Email</span>
        <span className={styles.contacts__content}>koloidi@inbox.ru</span>
      </li>
      <li className={styles.contacts__item}>
        <span className={styles.contacts__header}>Telegram</span>
        <a href="https://t.me/friend_42" className={styles.contacts__content}>
          t.me/friend_42
        </a>
      </li>
      <li className={styles.contacts__item}>
        <span className={styles.contacts__header}>Phone</span>
        <span className={styles.contacts__content}>+7 918 204 28 88</span>
      </li>
    </ul>
  );
};
