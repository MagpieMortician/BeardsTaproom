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
      {props.kegList.map((keg) =>
        <Keg names={keg.names}
          brand={keg.brand}
          price={keg.price}
          alcoholCon={keg.alcoholCon}
          pints={keg.pints}
          key={keg.id} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;