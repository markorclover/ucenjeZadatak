import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { productReducer } from './context/reducers';
import { LogIn, ContentPage } from './containers';

import styles from './App.module.css';

export const ProductContext = createContext();

function App() {
  console.log('App.js');
  const [productState, dispatch] = useReducer(productReducer, {
    initialized: false,
    isAuthorized: false,
    modalIsOpened: false,
    selectedItemId: '',
    productList: {},
    products: {},
  });

  return (
    <ProductContext.Provider
      value={{
      productState,
      dispatch,
    }}
    >
      <div className={styles.mainContainer}>
        <BrowserRouter>
          <Switch>
              { productState.isAuthorized && <Route path="/content" component={ContentPage}/> }
              <Route path="/" component={LogIn}/>
          </Switch>
        </BrowserRouter>
      </div>
      <footer className={styles.footerContainer}>
          <p>some kind of content always on bottom</p>
      </footer>
    </ProductContext.Provider>
  );
}

export default App;
