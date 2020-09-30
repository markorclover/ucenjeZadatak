import React, { useContext, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import disableScroll from 'disable-scroll';


import ImageBar from '../imageBar/ImageBar';
import { ProductContext } from '../../App';
import { chevronLeft, chevronRight, closeX } from './assets';

import styles from './Modal.module.css'

function Modal({ closeModalHandler, newSelectedId }) {
  console.log('     Modal.js');

  const { productState } = useContext(ProductContext);
  const { products, selectedItemId } = productState;

  useEffect(() => {
    disableScroll.on()
    return () => disableScroll.off();
  }, []);

  let selectedItemIndex = 0;
  const selectedItem = products.find((product, index) => {
    selectedItemIndex = index;
    return product.id === selectedItemId
  });

  const disableRight = selectedItemIndex === products.length-1;
  const disableLeft = selectedItemIndex === 0;

  const onNextButtonHandler = () => {
    if(!disableRight) {
      const newItemId = products[selectedItemIndex + 1].id;
      newSelectedId(newItemId);
    }
  };

  const onPreviousButtonHandler = () => {
    if(!disableLeft) {
      const newItemId = products[selectedItemIndex - 1].id;
      newSelectedId(newItemId);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
       <img
          src={closeX}
          onClick={closeModalHandler}
          alt="closeX"
          className={styles.closeButton}
        />  
        <div className={styles.pictureAndButtonContainer}>
          <img
            src={chevronLeft}
            onClick={onPreviousButtonHandler}
            alt="chevronLeft"
            className={[styles.buttonImageLeft, disableLeft && styles.onDisabled].join(' ')}
          />

          <img src={selectedItem.pictureUrl} alt={selectedItem.name} className={styles.image} />

          <img
            src={chevronRight}
            onClick={onNextButtonHandler}
            alt="chevronRight"
            className={[styles.buttonImageRight, disableRight && styles.onDisabled].join(' ')} />  
        </div>
        <ImageBar newSelectedId={newSelectedId} />
      </div>
    </div>
  );
}

Modal.prototype = {
  closeModalHandler: PropTypes.func,
  newSelectedId: PropTypes.func,
};

export default memo(Modal);
