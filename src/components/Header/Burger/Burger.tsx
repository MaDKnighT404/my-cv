import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Modal } from '../Modal';
import styles from './Burger.module.scss';

export const Burger = () => {
  const [isModal, setIsModal] = useState(false);

  const handleBurgerClick = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className={styles.burger} onClick={handleBurgerClick}>
        <GiHamburgerMenu />
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
};
