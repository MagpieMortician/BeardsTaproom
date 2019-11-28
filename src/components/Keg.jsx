/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>${props.price}</em></p>
      <p>{props.alcoholCon}</p>
      <h6>{props.pints}</h6>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholCon: PropTypes.string.isRequired,
  pints: PropTypes.number
};

export default Keg;