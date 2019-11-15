/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">New Keg</Link>
    </div>
  );
}

export default Header;