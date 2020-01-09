import React from 'react';
import StatBox from './StatBox';
import moment from 'moment';

const TopStatistics = (props) => {

  const { expenses } = props;
  // console.log(expenses);
  
  const groupExpensesByDay = () => {
    let groupedData = []; 
    expenses && expenses.map((expense) => {
      const timestamp = moment(+expense.timestamp).format('DD/MM');
      const amount = +expense.amount;
      const obj = {timestamp, amount}
      let repeat = false
      groupedData.map(data => {
        if (data.timestamp === obj.timestamp) {
          repeat = true;
          data.amount = data.amount + (+obj.amount)
        } else {
          repeat = false
        }
      });
      if (repeat !== true) {
        groupedData.push(obj);
      } 
    });
    // console.log(groupedData);
    
    return groupedData;
  } 

  const getAmountArray = () => {
    let dailyAmountArray = [] 
    groupedExpenses.map((expense) => {
      dailyAmountArray.push(expense.amount)
    });
    return dailyAmountArray;
  }

  const groupedExpenses = groupExpensesByDay();
  const amountArray = getAmountArray();
  
  const getAverageExpense = () => {
    let totalExpense = 0;
    const size = expenses && expenses.length;
    amountArray.forEach((amount) => {
      totalExpense += amount
    });
    const averageExpense = Math.floor(totalExpense /size);
    return averageExpense;
  }

  const getHighestExpense = () => {
    return Math.max(...amountArray);
  }

  const getLowestExpense = () => {
    return Math.min(...amountArray);
  }
  
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Top Stats 🔥 <span className="tips">(Last 30 days)</span></h1>
      <StatBox label={"Average"} amount={getAverageExpense()} />
      <StatBox label={"Highest"} amount={getHighestExpense()} />
      <StatBox label={"Lowest"} amount={getLowestExpense()} />
    </div>
  )
};

export default TopStatistics;