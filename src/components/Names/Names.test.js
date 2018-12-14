import React from 'react';
import ReactDOM from 'react-dom';
import Names from './Names';

import { shallow } from 'enzyme';

describe('<Names />', () => {

  const names = shallow(<Names />)

  test('renders the component', () => {
    expect(names).toMatchSnapShot
  });
  
});