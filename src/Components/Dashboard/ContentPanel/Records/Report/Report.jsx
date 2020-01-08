import React from 'react';
import ExpenseChart from './ExpenseChart';
import moment from 'moment';

const Report = (props) => {

  const { expenses } = props;
  const myData = []; 
  expenses && expenses.map((expense) => {
    const x = moment(+expense.timestamp).format('DD/MM');
    const y = expense.amount;
    const obj = { 
      x,
      y
    }
    myData.push(obj);
  });
  
  const data = {
    "id": "Expenses",
    "color": "hsl(80, 70%, 50%)",
    "data": myData
  }
  console.log(myData);
  
  return (
    <div className="report-container">
      <h1 className="report-title">Report 📈 <span className="tips">(Last 10 days)</span></h1>
      <div className="chart-wrapper">
        <ExpenseChart data={[data]}/>
      </div>
    </div>
  );
}

export default Report;