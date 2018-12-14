import React from 'react';
import ReactDOM from 'react-dom';
import Locations from './Locations';

import { shallow } from 'enzyme';

describe('<Locations />', () => {

  const locations = shallow(<Locations />)

  test('renders the component', () => {
    expect(locations).toMatchSnapShot
  });

});