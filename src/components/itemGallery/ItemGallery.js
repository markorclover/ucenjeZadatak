import React, { useContext } from 'react';

import { ProductContext } from '../../App';
import * as actionCreators from '../../context/actions';
import Item from '../item/Item';
import Modal from '../modal/Modal';

function ItemGallery(props) {
  console.log('    ItemGallery.js');  
  const { productState, dispatch } = useContext(ProductContext);

  const selectItemHandler = itemId => {
    dispatch(actionCreators.selectedItem(itemId));
  };

  const closeModalHandler = () => dispatch(actionCreators.setState('modalIsOpened', false));

  const newSelectedId = newId => dispatch(actionCreators.newSelectedItem(newId));

  const createItems = productState.products.map(product => {
    return (  
      <Item
        key={product.id}
        name={product.name}
        price={product.price}
        pictureUrl={product.pictureUrl}
        id={product.id}
        onClick={selectItemHandler}
      /> 
    );
  });

  return (
    <div> 
      {productState.modalIsOpened && <Modal closeModalHandler={closeModalHandler} newSelectedId={newSelectedId} />}
      { createItems }
    </div>
  );
}

export default ItemGallery;
