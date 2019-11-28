/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
 
  return (
    <div>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholCon={keg.alcoholCon}
          pints={keg.pints}
          key={index} />
      )}
    </div>
  );  
}

KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;