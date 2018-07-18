import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';

import Status from './index.jsx';

it('Status displays active when current date is between the start and end date', () => {
  const tree = renderer
    .create(<Status startDate={moment().add(-5, 'days')} endDate={moment().add(5, 'days')}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Status displays inactive when current date is not between the start and end date', () => {
  const tree = renderer
    .create(<Status startDate={moment().add(-5, 'days')} endDate={moment().add(-2, 'days')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});