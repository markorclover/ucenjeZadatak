import React, { useEffect, useReducer } from 'react';

import { getList } from '../../context/asyncActions';
import { productReducer } from '../../context/reducers';
import * as actionCreators from '../../context/actions';

import { Item } from '../../components';

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

  console.log('productState', productState);

  return (
    <div>
      <h1>Hello ContentPage</h1>   
      <Item />
      <button onClick={getList}>apiCall</button>  
    </div>
  );
}

export default ContentPage;
