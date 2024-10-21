import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [addVisited, setAddedVisited] = useState([]);
  const handleVisitedCountry = (country) => {
    const newAddVisited = [...addVisited, country];
    setAddedVisited(newAddVisited);
  };

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
}

  return (
    <div>
      <h2>There are {countries.length} countries in the world</h2>
      <div>
        <h2>list of Visited Country:{addVisited.length}</h2>
        <ul>
          {addVisited.map((country, index) => (
            <li key={index}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div>
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>

      <div className="countries">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
