import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header';
import Menu from './component/Menu';
import Order from './component/Order';
import Location from './component/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

ReactDOM.render((
  <Router>
    <Route path="/" render={App} />
    <Route path="/menu" render={Menu} />
    <Route path="/location" render={Location} />
    <Route path="/order" render={Order} />
  </Router>),
  document.getElementById('root')
);

export default App;
