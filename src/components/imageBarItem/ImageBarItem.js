import React from 'react';
import PropTypes from 'prop-types';

const styleBase = {
  width: '50px',
  height: '50px',
};

const styleBorder = {
  borderWidth: '1px',
  borderColor: 'black',
  borderStyle: 'solid',
  width: '50px',
  height: '50px',
};

function ImageBarItem({ selectedItemId, pictureUrl, id, newSelectedId }) {
  console.log('     ImageBarItem.js');
  const onClickHandler = () => {
    newSelectedId(id);
  }
  return (
    <div 
      style={ selectedItemId === id ? styleBorder : styleBase}
      onClick={onClickHandler}
    >
      <img src={pictureUrl} alt="loading" style={{ maxWidth: 50, maxHeight: 50 }} />
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

export default ImageBarItem;
