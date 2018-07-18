import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import * as CampaignActions from '../../action-creators/campaigns';
import * as FilterActions from '../../action-creators/filters';
import { filteredCampaignsSelector, filtersSelector } from '../../selectors';

import TitleBar from '../../components/TitleBar';
import PageBody from '../../components/PageBody';
import SearchBar from '../../components/SearchBar';
import Panel from '../../components/Panel';
import CampaignList from '../../components/CampaignList';

const campaigns = [{ "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2019", "Budget": 77788377 }, { "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2019", "Budget": 608715 }, { "id": 3, "name": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2017", "Budget": 239507 }, { "id": 4, "name": "Trilith", "startDate": "8/25/2017", "endDate": "11/30/2017", "Budget": 179838 }, { "id": 5, "name": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2018", "Budget": 837850 }, { "id": 6, "name": "Photojam", "startDate": "7/25/2017", "endDate": "6/23/2017", "Budget": 858131 }, { "id": 7, "name": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2018", "Budget": 109078 }, { "id": 8, "name": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2018", "Budget": 272552 }, { "id": 9, "name": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017", "Budget": 301919 }, { "id": 10, "name": "Realbridge", "startDate": "3/5/2018", "endDate": "10/2/2017", "Budget": 505602 }];

function parseQuery(location) {
  const qs = location.search.substring(1);
  if (qs) {
    return queryString.parse(qs);
  }
  return {};
}
class Campaigns extends Component {
  componentDidMount() {
    this.props.actions.loadCampaigns(campaigns);

    const qp = parseQuery(this.props.location);
    this.props.actions.loadFilters(qp);

    this.historyUnlisten = this.props.history.listen((location) => {
      const qp = parseQuery(location);
      this.props.actions.loadFilters(qp);
    });
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  handleSearch = (filters) => {
    const qs = queryString.stringify({
      ...filters,
      startDate: (filters.startDate)?filters.startDate.format('DD/MM/Y'):null,
      endDate: (filters.endDate)?filters.endDate.format('DD/MM/Y'):null,
    });
    this.props.history.push(`?${qs}`);
  }
  render() {
    return <div>
      <TitleBar title="Campaigns" summary="List of all campaigns" />
      <PageBody>
        <Panel>
          <SearchBar onSearch={this.handleSearch} {...this.props.filters}/>
        </Panel>
        <Panel>
          <CampaignList campaigns={this.props.filteredCampaigns} />
        </Panel>
      </PageBody>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    filteredCampaigns: filteredCampaignsSelector(state),
    filters: filtersSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...CampaignActions, ...FilterActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);