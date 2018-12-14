import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { shallow } from 'enzyme';

describe('<App />', () => {

  const header = shallow(<Header />);

  test('renders without crashing', () => {
    expect(header).toMatchSnapshot();
  });

});
