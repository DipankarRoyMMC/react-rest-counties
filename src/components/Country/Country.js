import React from 'react';
import './country.css';

const Country = (props) => {
    const { population, area, region, capital, name, flags } = props.country;
    console.log(props.country);
    return (
        <div className="country bg-info">
            <h2>Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <p><strong>Capital:</strong> {capital}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;