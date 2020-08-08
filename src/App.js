import React from 'react';
import HomeUi from './components/homeUi';
import './'
import india from './components/IndiaReport/india';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <>
        <Switch>
         <Route exact path="/" component={HomeUi} />
         <Route exact path="/india" component={india} />
         <Redirect to="/" />
        </Switch>
       
      </>
    );
  }
}

export default App;