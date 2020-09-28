import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { LogIn, ContentPage } from './containers'

function App() {
  console.log('App.js');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/content" component={ContentPage}/>
        <Route path="/" component={LogIn}/>
      </Switch>
    </BrowserRouter>
  );
}

/*
todo list
  dodati router
  vjerojatno ce context provider završiti ovdje
*/

export default App;
