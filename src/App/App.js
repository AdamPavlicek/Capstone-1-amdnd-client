import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import CharList from '../CharList/CharList';
import NewChar from '../NewChar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/:user' component={CharList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;