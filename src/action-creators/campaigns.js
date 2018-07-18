import moment from 'moment';
import { LOAD_CAMPAIGNS } from '../constants/action-types';

export function loadCampaigns(campaigns) {
  return (dispatch) => {
    dispatch({
      type: LOAD_CAMPAIGNS,
      payload: campaigns.map((campaign) => {
        return {
          ...campaign,
          startDate: moment(campaign.startDate, 'MM/DD/Y'),
          endDate: moment(campaign.endDate, 'MM/DD/Y'),
        }
      }),
    });
  };
}
