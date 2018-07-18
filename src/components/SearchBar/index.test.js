import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import SearchBar from './index.jsx';

it('SearchBar renders correctly when filters are provided', () => {
  const tree = renderer
    .create(<SearchBar onSearch={_ => _} startDate={moment('2018-05-01')} endDate={moment('2018-05-05')} query={'test'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});