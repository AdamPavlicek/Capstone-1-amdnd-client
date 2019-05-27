import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;