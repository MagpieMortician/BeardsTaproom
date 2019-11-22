/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholCon = null;
  let _pints = 0;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({ name: _name, brand: _brand, price: _price, alcoholCon: _alcoholCon, pint: _pints,id: v4() });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholCon.value = '';
    _pints.value = 0;
  }

 return (
  <div>
   <form onSubmit = {handleNewKegSubmission}>
    <input
     type='text'
     id='names'
     placeholder='Type'/>
       ref={(input) => { _name = input; }}
    <input
     type='text'
     id='brand'
     placeholder='Brand'/>
    ref={(input) => { _brand = input; }}
    <input
    type='text'
     id='price'
     placeholder='Price'
      ref={(input) => { _price = input; }}/>
       <input
         type='text'
         id='alcoholCon'
         placeholder='Alcohol Content' />
        ref={(input) => { _alcoholCon = input; }}
       <input
         type='number'
         id='pints'
         min='0'
         placeholter= '0'
         ref={(input) => { _pints = input; }}
         />
    <button onSubmit={handleNewKegSubmission}>submit</button>
   </form>
  </div>
 );
}
NewKegForm.propTypes = {
onNewKegCreation: PropTypes.func
};
export default NewKegForm;