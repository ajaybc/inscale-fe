import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CampaignActions from '../../action-creators/campaigns';
import { filteredCampaignsSelector } from '../../selectors';

import TitleBar from '../../components/TitleBar';
import PageBody from '../../components/PageBody';
import SearchBar from '../../components/SearchBar';
import Panel from '../../components/Panel';
import CampaignList from '../../components/CampaignList';

const campaigns = [{ "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2018", "Budget": 77788377 }, { "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715 }, { "id": 3, "name": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2017", "Budget": 239507 }, { "id": 4, "name": "Trilith", "startDate": "8/25/2017", "endDate": "11/30/2017", "Budget": 179838 }, { "id": 5, "name": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2018", "Budget": 837850 }, { "id": 6, "name": "Photojam", "startDate": "7/25/2017", "endDate": "6/23/2017", "Budget": 858131 }, { "id": 7, "name": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2018", "Budget": 109078 }, { "id": 8, "name": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2018", "Budget": 272552 }, { "id": 9, "name": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017", "Budget": 301919 }, { "id": 10, "name": "Realbridge", "startDate": "3/5/2018", "endDate": "10/2/2017", "Budget": 505602 }];

class Campaigns extends Component {
  state = {
    campaigns: [],
    filters: {},
  }
  componentDidMount() {
    console.log(this.props.actions.loadCampaigns(campaigns));
    console.log(this.props);
  }
  handleSearch = (filters) => {

  }
  render() {
    console.log(this.props);
    return <div>
      <TitleBar title="Campaigns" summary="List of all campaigns" />
      <PageBody>
        <Panel>
          <SearchBar onSearch={this.handleSearch}/>
        </Panel>
        <Panel>
          <CampaignList campaigns={this.state.campaigns} />
        </Panel>
      </PageBody>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    filteredCampaigns: filteredCampaignsSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...CampaignActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);