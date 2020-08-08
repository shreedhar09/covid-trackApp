
import React, { Component } from 'react'
import { fetchStateName } from '../../api/';
import IndiaCard from './indiaCard';
import DistrictPicker from './districtPicker';

class StatePicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stateName: [],
            stateList: {},
            districtName:[]
        }
    }
    async componentDidMount() {
        const name = await fetchStateName();
        this.setState({ stateName: name,
            stateList: this.props.stateData });
    }

    
   
    render() {
       
        
        return (
            <div>
                 <h1 className="headerName">State</h1>
                 <div className="selectVal">
                <select name="state" onChange={(e) => this.props.handleStateChange(e.target.value)}>
                <option value="">select State</option>
                    {this.state.stateName.map((e, key) => {
                        return <option key={key} value={e.state}>{e.state}</option>;
                    })}
                </select>
                </div>
                 {Object.keys(this.props.stateData).length > 0 ?
                 [
                  <IndiaCard data={this.props.stateData} name= {this.props.name}/>,
                  <DistrictPicker data={this.props.stateData.districtData} districtData = {this.state.districtName} />
                 ]
                    : "" } 
            </div>
        )
    }
}

export default StatePicker




// import React, { useState, useEffect } from 'react';
// //import { NativeSelect, FormControl } from '@material-ui/core';
// import {fetchStateName} from '../../api/';
// import styles from '../CountryPicker/CountryPicker.module.css';

// const Countries = ({ handleCountryChange, stateData ,country}) => {
//   const [stateName, setStateName] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//         setStateName(await fetchStateName());
//     };

//     fetchAPI();
//   }, []);
//    console.log("sasass ", stateName)
//   return (
//     <div className={styles.countryDiv}>

//       <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
//         <option value="">select State</option>
//         {!stateName && stateName.map((state, i) =>
//          <option key={i} value={state}>{state}</option>

//          )}
//       </select>


//     {/* {Object.keys(data).length > 0 ? <Card data={data}  country={country}/> : "" } */}
//     </div>
//   );
// };

// export default Countries;

