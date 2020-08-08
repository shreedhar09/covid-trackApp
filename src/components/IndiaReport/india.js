import React from 'react'
import { fetchStateData } from '../../api/';
import IndiaCard from './indiaCard';
import StatePicker from './StatePicker';
import {Link} from 'react-router-dom';
//import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//import CountUp from 'react-countup';
//import cx from 'classnames';

//import styles from '../Cards/Cards.module.css';

class india extends React.Component {
    state = {

        indiaData: {},
        stateData: {},
        stateName: {},
        name:""
    }

    async componentDidMount() {

        const data = await fetchStateData();
        this.setState({
            indiaData: data.countryData.data,
            stateData: data.stateData.data
        });
    }

    handleStateChange = async (state) => {
        debugger
        const countryData = this.state.stateData.filter((menu) =>
            state === menu.state);
    
        this.setState({ stateName: countryData[0], 
            name: state,
            indiaData: this.state.indiaData });

    }

    render() {
        debugger
    
        return (
            <div>
                <h1 className="headerName">India</h1>
                <IndiaCard data={this.state.indiaData} name="India" />
           
            
                <StatePicker stateData={this.state.stateName} name= {this.state.name} data={this.state.indiaData} handleStateChange={this.handleStateChange} />
                <Link to="/" className="backbtn">Back</Link>
            </div>
        )
    }
}

export default india;
