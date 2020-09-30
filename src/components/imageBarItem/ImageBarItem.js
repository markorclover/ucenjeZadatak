import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './ItemBarItem.module.css'

function ImageBarItem({ selectedItemId, pictureUrl, id, newSelectedId }) {
  console.log('     ImageBarItem.js');
  const onClickHandler = () => {
    newSelectedId(id);
  }

  const itemIsSelected = selectedItemId === id;

  return (
    <div 
      className={styles.mainContainer}
      onClick={onClickHandler}
    >
      <img className={[styles.image, itemIsSelected && styles.itemActive].join(' ')} src={pictureUrl} alt="loading" />
    </div>
  );
}

ImageBarItem.propTypes = {
  selectedItemId: PropTypes.string,
  pictureUrl: PropTypes.string,
  id: PropTypes.string,
  newSelectedId: PropTypes.func,
};

ImageBarItem.defaultProps = {};

export default memo(ImageBarItem);
