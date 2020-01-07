import React from 'react';

const TableRow = (props) => {
  return (
    <div className="history-table-row">
      <div>{props.timestamp}</div>
      <div>NRs. {props.amount}</div>
      <div>{props.remarks}</div>
      <div>Edit | Delete</div>
    </div>
  );
}

export default TableRow;