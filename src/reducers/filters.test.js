import moment from 'moment';
import filtersReducer from './filters';
import { UPDATE_FILTERS } from "../constants/action-types";

const filters = {
  startDate: moment('2018-06-01'),
  endDate: moment('2018-06-10'),
  query: 'test'
}

it('filters are updated successfully', () => {
  expect(filtersReducer([], {
    type: UPDATE_FILTERS,
    payload: filters
  })).toBe(filters);
});