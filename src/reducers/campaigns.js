import { LOAD_CAMPAIGNS } from '../constants/action-types';

export default function campaigns(state = [], action) {
  switch (action.type) {
    case LOAD_CAMPAIGNS:
      return action.payload;
    default:
      return state;
  }
}
