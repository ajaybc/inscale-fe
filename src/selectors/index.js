import { createSelector } from 'reselect';
import moment from 'moment';

const DATE_FORMAT = 'DD/MM/Y';

export const campaignsSelector = state => state.campaigns;
export const filtersSelector = state => {
  return {
    ...state.filters,
    startDate: (state.filters.startDate) ? moment(state.filters.startDate, DATE_FORMAT):null,
    endDate: (state.filters.endDate) ? moment(state.filters.endDate, DATE_FORMAT):null,
  }
};

export const areValidFiltersSelector = createSelector(
  filtersSelector,
  filters => {
    if ((filters.startDate && filters.endDate) && (filters.startDate > filters.endDate)) {
      return false;
    }
    return true;
  }
);

export const filteredCampaignsSelector = createSelector(
  campaignsSelector,
  filtersSelector,
  areValidFiltersSelector,
  (campaigns, filters, areValidFilters) => {
    if (areValidFilters) {
      // TODO: Do the actual filtering logic later
      return campaigns.filter((campaign) => {
        if (campaign.startDate > campaign.endDate) {
          // Means this is an invalid campaign
          return false;
        }
        return true;
      }).filter((campaign) => {
        if (filters.startDate) {
          if (campaign.startDate >= filters.startDate) {
            return true;
          }
          return false;
        }
        return true;
      }).filter((campaign) => {
        if (filters.endDate) {
          if (campaign.endDate <= filters.endDate) {
            return true;
          }
          return false;
        }
        return true;
      }).filter((campaign) => {
        if (filters.query) {
          return campaign.name.toLowerCase().startsWith(filters.query.toLowerCase())
        }
        return true;
      });
    }
    return [];
  }
);