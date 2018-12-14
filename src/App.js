import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Names from './components/Names/Names';
import Locations from './components/Locations/Locations';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { testAction } from './actions/actions';
import axios from 'axios';

class App extends Component {


  componentDidMount() {
    // axios.get('http://ergast.com/api/f1/2018/circuits.json')
    //   .then(resp => {
    //     console.log(resp);
    //   });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header title={this.props.title}/>
          <Route render={() => (<div>Click an option</div>)} path="/" exact />
          <Route component={Names} path="/names" />
          <Route component={Locations} path="/locations" />
        </div>
      </Router>  
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    test: data => dispatch(testAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
