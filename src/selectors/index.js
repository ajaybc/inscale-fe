import { createSelector } from 'reselect';

export const campaignsSelector = state => state.campaigns;
export const filtersSelector = state => state.filters;

export const areValidFiltersSelector = createSelector(
  filtersSelector,
  filters => {
    console.log('filters', filters)
    if ((filters.startDate && filters.startDate) && (filters.startDate > filters.endDate)) {
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
      return campaigns;
    }
    return [];
  }
);