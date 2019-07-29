import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import Menu from '../container/Menu';
import Location from './Location';

const Header = (props) => {
  return (
    <div id="header">
      <div>
        <h1 id="title">Teiban Ramen</h1>
      </div>
      <div id="header2">
        <div className="header-part">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="header-part">
          <Link to={`/menu`}>Menu</Link>
        </div>
        <div className="header-part">
          <Link to={`/location`}>Location</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
