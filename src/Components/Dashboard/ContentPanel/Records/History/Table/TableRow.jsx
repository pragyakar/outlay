import React from 'react';
import moment from 'moment';
import getTagStyle from './tagStyles';

const TableRow = (props) => {
  
  return (
    <div className="history-table-row">
      <div>{moment(+props.timestamp).format("MMM Do YYYY")}</div>
      <div>NRs. {props.amount}</div>
      <div>{props.remarks}</div>
      <div>
        <span className="table-tag" style={getTagStyle(props.tag)}>
          {props.tag}
        </span>
      </div>
    </div>
  );
}

export default TableRow;