import React, { useEffect, useState } from 'react';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    return (
        <div>
            <h3>countries:{countries.length}</h3>
            {
                countries.map(country=>
                    
                )
            }
        </div>
    );
};

export default Country;