import React from 'react';
import ExpenseChart from './ExpenseChart';
import moment from 'moment';

const groupExpensesByDay = (expenses) => {
  let myData = []; 
  expenses && expenses.map((expense) => {
    const x = moment(+expense.timestamp).format('DD/MM');
    const y = +expense.amount;
    const obj = {x, y}
    let repeat = false
    myData.map(data => {
      if (data.x === obj.x) {
        repeat = true;
        data.y = data.y + (+obj.y)
      } else {
        repeat = false
      }
    });
    if (repeat !== true) {
      myData.push(obj);
    } 
  });
  return myData;
} 

const Report = (props) => {

  const { expenses } = props;
  
  const graphData = groupExpensesByDay(expenses);

  const data = {
    "id": "Expenses",
    "color": "hsl(80, 70%, 50%)",
    "data": graphData
  }
  // console.log(graphData);
  
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