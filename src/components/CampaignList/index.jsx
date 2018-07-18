import React, {Component} from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import Status from '../Status';
import Price from '../Price';

const DATE_FORMAT = 'DD/MM/Y';

export default class CampaignList extends Component {
  render () {
    const { campaigns } = this.props;
    return <div className="CampaignList">
      <table className="CampaignList__table">
        <thead>
          <tr>
            <th>Name</th>
            <th width="20%">Start Date</th>
            <th width="20%">End Date</th>
            <th width="15%">Active</th>
            <th width="15%">Budget</th>
          </tr>
        </thead>
        <tbody>
          {
            campaigns.map((campaign) => {
              return <tr key={campaign.id} >
                <td>{campaign.name}</td>
                <td>{campaign.startDate.format(DATE_FORMAT)}</td>
                <td>{campaign.endDate.format(DATE_FORMAT)}</td>
                <td><Status startDate={campaign.startDate} endDate={campaign.endDate}/></td>
                <td><Price>{campaign.Budget}</Price></td>
              </tr>
            })
          }
          {
            campaigns.length === 0 && <tr>
              <td colSpan="5" style={{'textAlign':'center'}}>No campaigns found</td>
            </tr>
          }
        </tbody>
      </table>
    </div>;
  }
}