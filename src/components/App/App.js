import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import RegisterRoute from '../../routes/RegisterRoute/RegisterRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import CharList from '../CharList/CharList';
import NewChar from '../NewChar/NewChar';
import EditChar from '../EditChar/EditChar';

class App extends Component {

  
  render () {
  return (
    <BrowserRouter>
      <nav>
        <Header />
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={RegisterRoute} />
        <Route path='/login' component={LoginRoute} />
        <Route path='/charlist' component={CharList} />
        <Route path='/newchar' component={NewChar} />
        <Route path='/editchar' component={EditChar} />
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;