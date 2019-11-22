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
      {props.kegList.map((create, index) =>
        <Keg
          names={create.names}
          brand={create.brand}
          price={create.price}
          alcoholCon={create.alcoholCon}
          pints={create.pints}
          index = {index}
          key={create.id} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;