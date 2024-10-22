import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuinfo }) => {
    return (
        <div className='border border-gray-200 rounded-xl p-5'>
            <img className='rounded-xl pb-5' src={menuinfo.recipe_image} />
            <h2 className='text-start text-xl font-bold pb-2 '>{menuinfo.recipe_name}</h2>
            <p className="text-start  text-gray-600 pb-3">{menuinfo.short_description}</p>
            <button className='btn bg-sky-200 rounded-2xl'>Want to coock</button>
        </div>
    );
};

export default Menu;

