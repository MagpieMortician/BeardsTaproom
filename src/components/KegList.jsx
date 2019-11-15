import React from 'react';
import Ticket from './Keg';

var masterTicketList = [
    {   
        brand: "Montucky",
        names: 'Pale Ale',
        price: '4',
        alcoholCon: '%5',
        pints: 124
    },
    {
        brand: "Black Butte",
        names: 'IPA',
        price: '4',
        alcoholCon: '%6',
        pints: 123
    },
    {
        brand: "IRA",
        names: 'India Red Ale',
        price: '4',
        alcoholCon: '%6.5',
        pints: 9
    }
];

function KegList() {

    return (
        <div>
            <hr />
            {masterKegList.map((keg, index) =>
                <Keg brand={keg.brand}
                    names={keg.names}
                    price={keg.price}
                    alcoholCon={keg.alcoholCon}
                    pints={keg.pints}
                    key={index} />
            )}
        </div>
    );
}

export default KegList;