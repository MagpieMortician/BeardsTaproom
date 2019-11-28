/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholCon = null;
  let _pints = 0;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: _name.value, brand: _brand.value, price: _price.value, alcoholCon: _alcoholCon.value, pints: _pints.value });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholCon.value = '';
    _price.value = 0;
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => { _name = input; }} />
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => { _brand = input; }} />
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => { _price = input; }} />
          <input
          type='text'
          id='alcoholCon'
          placeholder='Alcohol Content'
          ref={(input) => { _alcoholCon = input; }} />
        <input
          type='number'
          id='pints'
          placeholder='Number of Pints'
          ref={(input) => { _pints = input; }} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;