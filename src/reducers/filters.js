import { FILTERS_UPDATED } from '../constants/action-types';

export default function filters(state = {}, action) {
  switch (action.type) {
    case FILTERS_UPDATED:
      return action.payload;
    default:
      return state;
  }
}
