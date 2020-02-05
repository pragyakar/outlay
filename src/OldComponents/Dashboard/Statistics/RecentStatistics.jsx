import React, { useState, useEffect } from 'react';
import StatBox from './StatBox';
import moment from 'moment';

const RecentStatistics = (props) => {

  const { expenses } = props;
  const today = moment().startOf('day').format("x");
  const oneWeekAgo = moment().subtract(7, 'days').format("x");
  const oneMonthAgo = moment().subtract(30, 'days').format("x");
  const [todaysExpenses, setTodaysExpenses] = useState(0);
  const [weeksExpenses, setWeeksExpenses] = useState(0);
  const [monthsExpenses, setMonthsExpenses] = useState(0);
  
  useEffect(() => {
    setTodaysExpenses(getTodaysExpenses(expenses, today));
    setWeeksExpenses(getWeeksExpenses(expenses, oneWeekAgo));
    setMonthsExpenses(getMonthsExpenses(expenses, oneMonthAgo));
  }, [expenses]); 

  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Recent Stats 🕒</h1>
      <StatBox label={"Today"} amount={todaysExpenses} />
      <StatBox label={"Last 7 days"} amount={weeksExpenses} />
      <StatBox label={"Last 30 days"} amount={monthsExpenses} />
    </div>
  )
};

const getTodaysExpenses = (expenses, today) => {
  let total = 0;
  expenses && expenses.map((expense) => {
    if (expense.timestamp > today) {
      total += +expense.amount
    }
  });
  return total;
}

const getWeeksExpenses = (expenses, oneWeekAgo) => {
  let total = 0;
  expenses && expenses.map((expense) => {
    if (expense.timestamp > oneWeekAgo) {
      total += +expense.amount
    }
  });
  return total;
}

const getMonthsExpenses = (expenses, oneMonthAgo) => {
  let total = 0;
  expenses && expenses.map((expense) => {
    if (expense.timestamp > oneMonthAgo) {
      total += +expense.amount
    }
  });
  return total;
}

export default RecentStatistics;