import React, { useState, useEffect } from 'react';
//import { NativeSelect, FormControl } from '@material-ui/core';
import Card from '../Cards/Cards';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange, data ,country}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
debugger
  return (
    <div className={styles.countryDiv}>
    
      <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">select Country</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </select>
      
    
    {Object.keys(data).length > 0 ? <Card data={data}  country={country}/> : "" }
    </div>
  );
};

export default Countries;

