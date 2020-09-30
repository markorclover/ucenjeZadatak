import React, { useEffect, useContext } from 'react';

import { getList } from '../../context/asyncActions';
import * as actionCreators from '../../context/actions';
import { ProductContext } from '../../App';
import { ItemGallery } from '../../components';

import style from './ContentPage.module.css'

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
      <div className={style.mainContainer}>
        <h1>Product page</h1>
        {productState.initialized && <ItemGallery />}
      </div>
  );
}

export default ContentPage;
