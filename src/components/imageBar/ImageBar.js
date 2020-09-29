import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../../App';
import ImageBarItem from '../imageBarItem/ImageBarItem';

function ImageBar({ newSelectedId }) {
  console.log('   ImageBar.js');
  const { productState } = useContext(ProductContext);
  const { products, selectedItemId } = productState;

  const createImageBar = products.map(product => {
    return (
      <ImageBarItem
      pictureUrl={product.pictureUrl}
      selectedItemId={selectedItemId}
      key={product.id}
      id={product.id}
      newSelectedId={newSelectedId}
      />
    );
  });
  return (
    <div>
      {createImageBar}
    </div>
  );
}

ImageBar.propTypes = {
  newSelectedId: PropTypes.func,
};

ImageBar.defaultProps = {};

export default ImageBar;
