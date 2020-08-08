import React from 'react';

import { Cards, CountryPicker, Chart } from './index';
import { fetchData, countryFetchData } from '../api/';
import styles from '../App.module.css';
import {Link} from 'react-router-dom';

//import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    countryData: {},
    country: '',

  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    if (country) {
    const countryData = await countryFetchData(country);
    
    this.setState({ countryData, country: country });
    }
  }

  render() {
    const { data, countryData, country } = this.state;

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <h1><strong>COVID-19 Daily REPORT</strong></h1>
        <Link to="/india" style={{textDecoration:'underline'}}>India Latest Corona Update</Link>
        <Cards data={data} country="Global" />
        <CountryPicker handleCountryChange={this.handleCountryChange} data={countryData} country={country}/>
        <Chart data={countryData} country={country} /> 
      </div>
    );
  }
}

export default App;