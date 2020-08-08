import React, { Component } from 'react'
import IndiaCard from './indiaCard';
class districtPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            districtName:{},
            name:""
        }
    }
    handleDistrictChange = async (district) => {
        debugger
        const districtData = this.props.data.filter((menu) =>
        district === menu.name);
    
        this.setState({ districtName: districtData[0],
        name : district });

    }
    render() {  debugger
        
        return (
            <div>
                <h1 className="headerName">District</h1>
                <div className="selectVal">
                 <select name="district" onChange={(e) => this.handleDistrictChange(e.target.value)}>
                 <option value="">select District</option>
                    {this.props.data.map((e, key) => {
                        return <option key={key} value={e.name}>{e.name}</option>;
                    })}
                </select>
                </div>
                 {Object.keys(this.state.districtName).length > 0 ? <IndiaCard data={this.state.districtName} name= {this.state.name} /> : "" }  
            </div>
        )
        
    }
}

export default districtPicker
