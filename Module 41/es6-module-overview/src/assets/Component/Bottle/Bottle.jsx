import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, price, img} = bottle
    return (
        <div className='bottle'> 
            <img className='bottle img' src={img} alt="" />
            <h2>name: {name}</h2>
            <h3>price: {price}</h3>
        </div>
    );
};

export default Bottle;