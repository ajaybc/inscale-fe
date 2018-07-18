import moment from 'moment';
import { filtersSelector, areValidFiltersSelector, filteredCampaignsSelector} from './index';

it('filters are wrapped with moment successfully', () => {
  expect(filtersSelector({
    filters: {
      startDate: '01/06/2018',
      endDate: '10/06/2018',
      query: 'test'
    }
  })).toEqual({
    startDate: moment('01/06/2018', 'DD/MM/Y'),
    endDate: moment('10/06/2018', 'DD/MM/Y'),
    query: 'test'
  });
});

it('Are valid filters condition returns true for valid filter date range', () => {
  expect(areValidFiltersSelector({
    filters: {
      startDate: '01/06/2018',
      endDate: '10/06/2018',
      query: 'test'
    }
  })).toEqual(true);
});

it('Are valid filters condition fails for invalid filter date range', () => {
  expect(areValidFiltersSelector({
    filters: {
      startDate: '10/06/2018',
      endDate: '01/06/2018',
      query: 'test'
    }
  })).toEqual(false);
});

it('Returns filtered campaigns', () => {
  expect(filteredCampaignsSelector({
    filters: {
      startDate: '10/08/1989',
      query: 'test'
    },
    campaigns: [
      {
        "id": 1,
        "name": "test",
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
    ]
  })).toEqual([
    {
      "id": 1,
      "name": "test",
      "startDate": moment('1989-08-11'),
      "endDate": moment('2018-08-11'),
      "Budget": 88377
    }
  ]);
});