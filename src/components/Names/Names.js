import React from 'react';
import { connect } from 'react-redux';

const Names = ({ names }) => (
  <div className="Names">
    Names
    <ul className="names-list">
      {
        names.length > 0 ?
          names.map((name, i) => <li key={`name-${i}`}>{name}</li>) :
          <div>No Names</div>
      }
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

export default connect(mapStateToProps)(Names);