import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <h3>{props.brand} - {props.names}</h3>
      <p>${props.price} alcohol content: {props.alcoholCon}</p>
      <p>Pints left: {props.pints}</p>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholCon: PropTypes.string.isRequired,
  pints: PropTypes.int.isRequired
};

export default Keg;