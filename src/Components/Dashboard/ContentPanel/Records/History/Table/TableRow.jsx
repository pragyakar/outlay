import React from 'react';
import moment from 'moment';

const TableRow = (props) => {
  return (
    <div className="history-table-row">
      <div>{moment(+props.timestamp).format("MMM Do YYYY")}</div>
      <div>NRs. {props.amount}</div>
      <div>{props.remarks}</div>
      <div>Edit | Delete</div>
    </div>
  );
}

export default TableRow;