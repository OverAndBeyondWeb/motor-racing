import React from 'react';
import { connect } from 'react-redux';

const Locations = ({ locations }) => (
  <div className="Locations">
    Locations
    <ul>
      {
        locations.length > 0 ?
          locations.map((location, i) => <li key={`loc-${i}`}>{`${location.locality}, ${location.country}`}</li>) :
          <div>No Locations</div>
      }
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps)(Locations);