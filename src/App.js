import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        The count is {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
