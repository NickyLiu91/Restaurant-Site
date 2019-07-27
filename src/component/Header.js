import React from 'react';
import {Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Order from './Order';
import Location from './Location';

const Header = (props) => {
  return (
    <div id="header">
      <div className="header-part">
        <Link to={`/menu`}>Menu</Link>
      </div>
      <div className="header-part">
        <Link to={`/location`}>Location</Link>
      </div>
      <div className="header-part">
        <Link to={`/order`}>Order</Link>
      </div>
    </div>
  )
}

export default Header;
