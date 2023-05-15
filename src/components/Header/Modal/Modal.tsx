import { FC } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  setIsModal: (status: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ setIsModal }) => {
  const handleModalWrapperClick = () => {
    setIsModal(false);
  };

  return (
    <div className={styles['modal-wrapper']} onClick={handleModalWrapperClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ul className={styles.menu}>
          <li>
            <a href="" className={styles.menu__link}>
              Contacts
            </a>
            <span>123</span>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Summary
            </a>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Skills
            </a>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Projects
            </a>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Courses
            </a>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Education
            </a>
          </li>
          <li>
            <a href="" className={styles.menu__link}>
              Language
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
