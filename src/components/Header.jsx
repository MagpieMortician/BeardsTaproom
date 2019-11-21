/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var styling = {
    backgroundColor: 'plum',
    fontFamily: 'cursive',
    textAlign: 'center',
    paddingBottom: '10px',
    marginLeft: '10%',
    marginRight: '10%'
  };
  var titleTop = {
    padding: '5px',
    fontSize: '50px'

  };
  return (
    <div style={styling}>
      <h1 style={titleTop}>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">New Keg</Link>
    </div>
  );
}

export default Header;