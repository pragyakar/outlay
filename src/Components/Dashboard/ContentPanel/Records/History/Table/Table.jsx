import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
  const { expenses } = props;
  
  return (
    <div className="history-table">
      <div className="history-table-row title-row">
        <div>Date</div>
        <div>Expense</div>
        <div>Remarks</div>
        <div>Actions</div>
      </div>
      {
        expenses ? expenses.map((expense) =>{
          const { id, ...rest} = expense;
          return (<TableRow key={id} {...rest} />);
        }): 'No records'
      } 
    </div>
  );
}

export default Table;