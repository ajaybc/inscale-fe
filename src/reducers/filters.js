import { UPDATE_FILTERS } from '../constants/action-types';

export default function filters(state = {}, action) {
  switch (action.type) {
    case UPDATE_FILTERS:
      return action.payload;
    default:
      return state;
  }
}
