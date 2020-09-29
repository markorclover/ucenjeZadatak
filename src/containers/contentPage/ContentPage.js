import React, { useEffect, useContext } from 'react';

import { getList } from '../../context/asyncActions';
import * as actionCreators from '../../context/actions';
import { ProductContext } from '../../App';

import { ItemGallery } from '../../components';

function ContentPage(props) {
  console.log(' ContentPage.js');
  const { productState, dispatch } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getList();
      dispatch(actionCreators.setProductList(result));
    };
 
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
      <div>
        <h1>Hello ContentPage</h1>
        {productState.initialized && <ItemGallery />}
      </div>
  );
}

export default ContentPage;
