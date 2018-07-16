import React, { Component } from 'react';
import TitleBar from '../../components/TitleBar';
import PageBody from '../../components/PageBody';
class Campaigns extends Component {
  render() {
    return <div>
      <TitleBar title="Campaigns" summary="List of all campaigns" />
      <PageBody>
        Campaign List
      </PageBody>
    </div>
  }
}
export default Campaigns;