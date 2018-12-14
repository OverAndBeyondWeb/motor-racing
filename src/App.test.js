import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

describe('<App />', () => {

  const app = shallow(<App />);

  test('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

});
