import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Header from './component/Header';
import Menu from './component/Menu';
import Order from './component/Order';
import Location from './component/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <div>HOME PAGE</div>
      <Switch>
        <Route path={`/menu`} component={Menu} />
        <Route path={`/location`} component={Location} />
        <Route path={`/order`} component={Order} />
      </Switch>
    </div>
  );
}

export default App;
