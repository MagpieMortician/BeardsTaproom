/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';

function NewKegForm(){
 return (
  <div>
   <form>
    <input
     type='text'
     id='names'
     placeholder='Type'/>
    <input
     type='text'
     id='brand'
     placeholder='Brand'/>
    <input
    type='text'
     id='price'
     placeholder='Price'/>
       <input
         type='text'
         id='alcoholCon'
         placeholder='Alcohol Content' />
       <input
         type='number'
         id='pints'
         min='0'
         placeholter= '0'
         />
    <button type='submit'>submit</button>
   </form>
  </div>
 );
}

export default NewKegForm;