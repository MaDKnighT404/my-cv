import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <ul className={styles.contacts}>
      <li className={styles.contacts__items}>
        <span className={styles.contacts__header}>Email</span>
        <span className={styles.contacts__content}>Koloidi@inbox.ru</span>
      </li>
      <li>
        <span className={styles.contacts__header}>Phone</span>
        <span className={styles.contacts__content}>+7 918 204 28 88</span>
      </li>
      <li>
        <span className={styles.contacts__header}>Telegram</span>
        <span className={styles.contacts__content}>telegram link</span>
      </li>
      <li>
        <span className={styles.contacts__header}>Discord</span>
        <span className={styles.contacts__content}>discord link</span>
      </li>
    </ul>
  );
};
