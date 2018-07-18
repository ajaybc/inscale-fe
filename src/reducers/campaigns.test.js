import moment from 'moment';
import campaignsReducer from './campaigns';
import { LOAD_CAMPAIGNS } from "../constants/action-types";

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

it('New campaigns are added successfully', () => {
  expect(campaignsReducer([], {
    type: LOAD_CAMPAIGNS,
    payload: campaigns
  })).toBe(campaigns);
});