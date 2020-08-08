import React, { Component } from 'react';
//import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//import CountUp from 'react-countup';
//import cx from 'classnames';

//import styles from '../Cards/Cards.module.css';

class indiaCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stateName: []
    }
  }
  render() {
       if (!this.props.data.confirmed) {
         return 'Loading...';
       }
    debugger
    
    return (
      <div className="">
        <div className="col-md-12 col-10 mx-auto cardSize">
          <div className="card">

            <div className="card-body cardDiv cardBorder">
              
              <h3 className="card-title cardDiv"><strong className="cardDiv">{this.props.name} Report </strong></h3>
              {this.props.data.confirmed !== null ? <h4 className="card-text cardDiv">Confirmed : {this.props.data.confirmed }</h4> : ""}
              {this.props.data.recovered !== null ? <h4 className="card-text cardDiv">Recovered : {this.props.data.recovered }</h4> : ""}
              {this.props.data.active !== undefined ? <h4 className="card-text cardDiv">Active : {this.props.data.active }</h4> : ""}
              {this.props.data.deaths !== null ? <h4 className="card-text cardDiv">Deaths : {this.props.data.deaths }</h4> : ""}

            </div>
          </div>
        </div>
        
        {/* <Grid container spacing={3} justify="center">
      <Grid item  component={Card} className={cx(styles.card)}>
          <CardContent>
            <h2> {this.props.country} Report</h2>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={this.props.data.confirmed} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={this.props.data.recovered} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Active
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={this.props.data.active} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={this.props.data.deaths} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(this.props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        
      </Grid> */}
      </div>
    );
  }
};
export default indiaCard;
