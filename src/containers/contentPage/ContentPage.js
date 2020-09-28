import React, { useEffect, useReducer, createContext } from 'react';

import { getList } from '../../context/asyncActions';
import { productReducer } from '../../context/reducers';
import * as actionCreators from '../../context/actions';

import { ItemGallery } from '../../components';

export const ProductContext = createContext();

function ContentPage(props) {
  console.log(' ContentPage.js');
  const [productState, dispatch] = useReducer(productReducer, {initialized: false});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getList();
      dispatch(actionCreators.setProductList(result));
    };
 
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productState,
        dispatch,
      }}
    >
      <div>
        <h1>Hello ContentPage</h1>
        {productState.initialized && <ItemGallery />}
        <button onClick={getList}>apiCall</button>  
      </div>
    </ProductContext.Provider>
  );
}

export default ContentPage;
