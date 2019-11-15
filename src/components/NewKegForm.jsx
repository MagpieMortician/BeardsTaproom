/* eslint-disable linebreak-style */
import React from 'react';

function NewKegForm() {
  return (
    <div>
      <form>
        <input type='text' id='brand' placeholder='Brand name' />
        <input type='text' id='names' placeholder='Alcohol name' />
        <input type='text' id='price' placeholder='Price per pint' />
        <input type='text' id='alcoholCon' placeholder='Alcohol Content' />
        <input type='number' id='pints' splaceholder='Pints left' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewKegForm;