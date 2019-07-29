import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Menu from './component/Menu';
import Order from './component/Order';
import Location from './component/Location';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/menu`} component={Menu} />
        <Route path={`/location`} component={Location} />
        <Route path={`/order`} component={Order} />
      </Switch>
      </div>
    )
  }
}
