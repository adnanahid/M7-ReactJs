import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center pb-12'>
            <h2 className='text-4xl font-semibold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;