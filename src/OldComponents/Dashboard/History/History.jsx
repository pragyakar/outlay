import React from 'react';
import HistoryTable from './Table/Table';

const History = (props) => {
  const formatExpenses = [].concat(props.expenses).reverse();
  return (
    <div className="history-container">
      <p className="container-title">Recent Expenses 💵</p>
      <p className="container-subtitle">Last 10 expense records</p>
      <HistoryTable expenses={formatExpenses}/>
    </div> 
  )
}

export default History;
