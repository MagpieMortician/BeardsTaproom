/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var styling = {
    backgroundColor: 'gold',
    fontFamily: 'cursive'
  };
  return (
    <div style={styling}>
      <h1>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">New Keg</Link>
    </div>
  );
}

export default Header;