import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { testAction } from './actions/actions';

class App extends Component {


  render() {
    return (
      <div className="App">
        The count is {this.props.count}
        <div>
          <button onClick={() => this.props.test(5)}>Test</button>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    test: data => dispatch(testAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
