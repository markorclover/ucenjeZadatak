import React from 'react';
import PropTypes from 'prop-types';


function Item({name, price, pictureUrl, id, onClick}) {
  console.log('    Item.js'); 
  return (
    <div onClick={() => onClick(id)}>
      <img src={pictureUrl} alt={name} style={{ maxWidth: 200, maxHeight: 200 }} />
      <p>{name}</p>
      <p>Price: ${price}</p>
    </div> 
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  pictureUrl: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};


export default Item;
