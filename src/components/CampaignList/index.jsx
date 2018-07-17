import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import Status from '../Status';
import Price from '../Price';

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
                <td>{campaign.startDate}</td>
                <td>{campaign.endDate}</td>
                <td><Status startDate={campaign.startDate} endDate={campaign.endDate}/></td>
                <td><Price>{campaign.Budget}</Price></td>
              </tr>
            })
          }
        </tbody>
      </table>
      <div className="CampaignList__pagination">
        <ReactPaginate 
          pageCount={100}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          forcePage={50}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          // onPageChange={this.handlePageClick}
          />
      </div>
    </div>;
  }
}