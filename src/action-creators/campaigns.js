import { LOAD_CAMPAIGNS } from '../constants/action-types';

export function loadCampaigns(campaigns) {
  return (dispatch) => {
    dispatch({
      type: LOAD_CAMPAIGNS,
      // payload: { items: results.items, count: results.count },
      payload: campaigns,
    });
  };
}
