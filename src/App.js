import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Names from './components/Names/Names';
import Locations from './components/Locations/Locations';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fillStoreWithAPIData } from './actions/actions';

class App extends Component {


  componentDidMount() {
    //this.props.getData();
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
    getData: () => dispatch(fillStoreWithAPIData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
