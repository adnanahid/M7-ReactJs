import React, { useState } from 'react';
import "./Country.css"
const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false);

    const Visited=()=>{
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <p>Name: {country.name.common}</p>
            <img className='' src={country.flags.png} alt="" /> <br />
            <button onClick={Visited}>{visited ? "visited" : "not-visited"}</button>
            <p>{visited ? 'yes visited' : 'not visited'}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Added to visited</button><br /> <br />
            {/* <button onClick={handleFlags(country)} >VisitedCountriesFlag</button> */}
        </div>
    );
};

export default Country;