/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    names: 'IPA',
    brand: 'Black Butte',
    price: '4',
    alcoholCon: '%6',
    pints: 124
  },
  {
    names: 'Pale Ale',
    brand: 'Montucky',
    price: '4',
    alcoholCon: '%6',
    pints: 35
  },
  {
    names: 'Orange Citrus Pale Ale',
    brand: 'Blue Moon',
    price: '5',
    alcoholCon: '%6.5',
    pints: 7
  }
];

function KegList(){
  var colorizing = {
    backgroundColor: 'plum'
  };
  return (
    <div style={colorizing}>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alcoholCon={keg.alcoholCon}
          pints={keg.pints}
          key={index} />
      )}
    </div>
  );
}

export default KegList;