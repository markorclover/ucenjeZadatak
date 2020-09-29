import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { productReducer } from './context/reducers';

import { LogIn, ContentPage } from './containers';

export const ProductContext = createContext();


function App() {
  console.log('App.js');
  const [productState, dispatch] = useReducer(productReducer, {
    initialized: false,
    isAuthorized: true,
    modalIsOpened: false,
  });
  return (
    <ProductContext.Provider
      value={{
      productState,
      dispatch,
    }}
  >
    <BrowserRouter>
      <Switch>
        { productState.isAuthorized && <Route path="/content" component={ContentPage}/> }
        <Route path="/" component={LogIn}/>
      </Switch>
    </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
