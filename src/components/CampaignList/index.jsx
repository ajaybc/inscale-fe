import React, {Component} from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import Status from '../Status';
import Price from '../Price';
import Pagination from '../Pagination';

const DATE_FORMAT = 'DD/MM/Y';

export default class CampaignList extends Component {
  render () {
    const { campaigns } = this.props;
    return <div className="CampaignList">
      <table className="CampaignList__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
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
        </tbody>
      </table>
      <Pagination 
        pageCount={100}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        forcePage={50}
        onPageChange={(a, b) => {
          console.log(a, b);
        }}
      />
    </div>;
  }
}