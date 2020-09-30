import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';


function Item({name, price, pictureUrl, id, onClick}) {
  console.log('    Item.js'); 
  return (
    <div className={styles.mainContainer} onClick={() => onClick(id)}>
      <p>{name}</p>
      <img src={pictureUrl} alt={name} className={styles.imageContainer} />
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


export default memo(Item);
