import React from 'react';

const Bookmark = ({title}) => {
    return (
        <div className=' bg-slate-100 rounded-2xl'>
            <h2 className='text-xl font-bold rounded-xl p-3 mb-4 m-3 '>{title.title}</h2>
        </div>
    );
};

export default Bookmark;