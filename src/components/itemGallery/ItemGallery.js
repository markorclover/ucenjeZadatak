import React, { useContext } from 'react';

import Item from '../item/Item'
import { ProductContext } from '../../containers/contentPage/ContentPage';

function ItemGallery(props) {
  console.log('    ItemGallery.js');  
  const testContext = useContext(ProductContext);

  console.log('Name on server:', testContext.productState.productList[0].file[0].file.nameOnServer);
  console.log('Price:', testContext.productState.productList[0].price);
  console.log('Name:', testContext.productState.productList[0].name);

  return (
    <div> 
      <Item /> 
    </div>
  );
}

export default ItemGallery;
