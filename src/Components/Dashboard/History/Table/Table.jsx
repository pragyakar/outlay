import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

const Table = (props) => {

  const { expenses } = props;
  const [ expenseHistory, setExpenseHistory] = useState([]);

  useEffect(() => {
    setExpenseHistory(expenses.reverse().slice(0,10));
  }, [expenses])
  
  return (
    <div className="history-table">
      <div className="history-table-row title-row">
        <div>Date</div>
        <div>Expense</div>
        <div>Remarks</div>
        <div>Tag</div>
      </div>
      <div className="history-table-scroll-view">
      {
        expenseHistory ? expenseHistory.map((expense) =>{
          const { id, ...rest} = expense;
          return (<TableRow key={id} {...rest} />);
        }): <div className="history-error-row">No records</div>
      } 
      { expenseHistory ? 
        <div className="history-final-row">That's all</div>
      : null }
      </div>
    </div>
  );
}

export default Table;