import { UPDATE_FILTERS } from '../constants/action-types';

export function loadFilters(filters) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_FILTERS,
      payload: filters,
    });
  };
}
