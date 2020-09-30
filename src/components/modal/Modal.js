import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

import ImageBar from '../imageBar/ImageBar';
import { ProductContext } from '../../App';

import styles from './Modal.module.css'

function Modal({ closeModalHandler, newSelectedId }) {
  console.log('     Modal.js');

  const { productState } = useContext(ProductContext);
  const { products, selectedItemId } = productState

  let selectedItemIndex = 0;
  const selectedItem = products.find((product, index) => {
    selectedItemIndex = index;
    return product.id === selectedItemId
  });

  const onNextButtonHandler = () => {
    const newItemId = products[selectedItemIndex + 1].id;
    newSelectedId(newItemId);
  };

  const onPreviousButtonHandler = () => {
    const newItemId = products[selectedItemIndex - 1].id;
    newSelectedId(newItemId);
  }

  return (
    <div className={styles.mainContainer}>
      <div>
        <button
          style={{height: '20px', width: '60px'}}
          disabled={selectedItemIndex === 0}
          onClick={onPreviousButtonHandler}
        >
          prev
        </button>  
        <img src={selectedItem.pictureUrl} alt={selectedItem.name} style={{ maxWidth: 300, maxHeight: 300 }} />
        <button
          style={{height: '20px', width: '60px'}}
          disabled={selectedItemIndex === products.length-1}
          onClick={onNextButtonHandler}
        >
          next
        </button>
        <button style={{height: '20px', width: '60px'}} onClick={closeModalHandler}>Close modal</button>
      </div>
      <ImageBar newSelectedId={newSelectedId} />
    </div>
  );
}

Modal.prototype = {
  closeModalHandler: PropTypes.func,
  newSelectedId: PropTypes.func,
};

export default memo(Modal);
