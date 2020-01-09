import React, { useState, useEffect } from 'react';
import StatBox from './StatBox';
import moment from 'moment';

const TopStatistics = (props) => {

  const { expenses } = props;
  const [averageExpense, setAverageExpense] = useState(0);
  const [highestExpense, setHighestExpense] = useState(0);
  const [lowestExpense, setLowestExpense] = useState(0);

  const groupedExpenses = groupExpensesByDay(expenses);
  const amountArray = getAmountArray(groupedExpenses);
  
  useEffect(() => {
    setAverageExpense(getAverageExpense(amountArray));
    setHighestExpense(getHighestExpense(amountArray));
    setLowestExpense(getLowestExpense(amountArray));
  }, []);
  
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Top Stats 🔥 <span className="tips">(Last 30 days)</span></h1>
      <StatBox label={"Average"} amount={averageExpense} />
      <StatBox label={"Highest"} amount={highestExpense} />
      <StatBox label={"Lowest"} amount={lowestExpense} />
    </div>
  )
};

const groupExpensesByDay = (expenses) => {
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
  return groupedData;
} 

const getAmountArray = (groupedExpenses) => {
  let dailyAmountArray = [] 
  groupedExpenses.map((expense) => {
    dailyAmountArray.push(expense.amount)
  });
  return dailyAmountArray;
}

const getAverageExpense = (amountArray) => {
  let totalExpense = 0;
  const size = amountArray && amountArray.length;
  amountArray.forEach((amount) => {
    totalExpense += amount
  });
  const averageExpense = Math.floor(totalExpense /size);
  return averageExpense;
}

const getHighestExpense = (amountArray) => {
  return Math.max(...amountArray);
}

const getLowestExpense = (amountArray) => {
  return Math.min(...amountArray);
}

export default TopStatistics;