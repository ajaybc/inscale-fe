import React, { Component } from 'react';
import TitleBar from '../../components/TitleBar';
import PageBody from '../../components/PageBody';
import SearchBar from '../../components/SearchBar';
import Panel from '../../components/Panel';
class Campaigns extends Component {
  render() {
    return <div>
      <TitleBar title="Campaigns" summary="List of all campaigns" />
      <PageBody>
        <Panel>
          <SearchBar />
        </Panel>
      </PageBody>
    </div>
  }
}
export default Campaigns;