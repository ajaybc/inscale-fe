import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import * as CampaignActions from '../../action-creators/campaigns';
import * as FilterActions from '../../action-creators/filters';
import { filteredCampaignsSelector, filtersSelector, campaignsSelector } from '../../selectors';

import TitleBar from '../../components/TitleBar';
import PageBody from '../../components/PageBody';
import SearchBar from '../../components/SearchBar';
import Panel from '../../components/Panel';
import CampaignList from '../../components/CampaignList';

function parseQuery(location) {
  const qs = location.search.substring(1);
  if (qs) {
    return queryString.parse(qs);
  }
  return {};
}
class Campaigns extends Component {
  componentDidMount() {
    const qp = parseQuery(this.props.location);
    this.props.actions.loadFilters(qp);

    this.historyUnlisten = this.props.history.listen((location) => {
      const qp = parseQuery(location);
      this.props.actions.loadFilters(qp);
    });

    window.addEventListener('message', (e) => {
      // Event listener that listens for a any message from the Test Function
      // There is a risk that the ID for the campaigns can be duplicate.
      // Just hoping that the id will be unique in the given data
      if (e.data.source === 'inscale') {
        console.log('Loading data', e.data.campaigns);
        this.props.actions.loadCampaigns([...this.props.campaigns, ...e.data.campaigns]);
      }
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
    campaigns: campaignsSelector(state),
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