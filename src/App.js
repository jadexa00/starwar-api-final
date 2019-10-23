import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom'
import Person from './components/Person'
import NoMatch from './components/NoMatch'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/people/:id' component={Person}/>
    <Route component={NoMatch} />
  </Switch>
)

export default App;
