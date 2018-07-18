import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import CampaignList from './index.jsx';

const campaigns = [
  {
    "id": 1,
    "name": "Divavu",
    "startDate": moment('1989-08-11'),
    "endDate": moment('2018-08-11'),
    "Budget": 88377
  },
  {
    "id": 2,
    "name": "Jaxspan",
    "startDate": moment('1989-08-12'),
    "endDate": moment('2018-08-12'),
    "Budget": 608715
  },
  {
    "id": 3,
    "name": "Miboo",
    "startDate": moment('1989-08-13'),
    "endDate": moment('2018-08-13'),
    "Budget": 2395073232
  }
];

it('CampaignList renders correctly when campaigns are provided', () => {
  const tree = renderer
    .create(<CampaignList campaigns={campaigns} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('CampaignList renders correctly when campaigns are empty', () => {
  const tree = renderer
    .create(<CampaignList campaigns={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});