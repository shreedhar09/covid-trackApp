import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) => {
  let changeableUrl = url;

  try {
    
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
export const fetchStateData = async (country) => {
  let changeableUrl = 'https://api.covidindiatracker.com/state_data.json';
  let countryUrl = 'https://api.covidindiatracker.com/total.json';
  try {
  
    const stateData = await axios.get(changeableUrl);
    const countryData = await axios.get(countryUrl);
   // const sadsa = await countryData.data

    return {stateData, countryData};
  } catch (error) {
    return error;
  }
};

export const fetchStateName = async (country) => {
  let changeableUrl = 'https://api.covidindiatracker.com/state_data.json';
  
  try {
  
    const stateNames = await axios.get(changeableUrl);
    const stateName = await stateNames.data;
    return stateName;
  } catch (error) {
    return error;
  }
};

// export const fetchData = async (country) => {
//   let changeableUrl = url;

//   if (country) {
//     changeableUrl = `${url}/countries/${country}`;
//   }

//   try {
//     console.log("ccc ",changeableUrl)
//     const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

//     return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     return error;
//   }
// };
export const countryFetchData = async (country) => {
  let changeableUrl = `${url}/countries/${country}`;

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
