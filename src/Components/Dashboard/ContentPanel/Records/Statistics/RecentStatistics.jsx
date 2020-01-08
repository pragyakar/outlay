import React from 'react';
import StatBox from './StatBox';
import moment from 'moment';

const RecentStatistics = (props) => {

  const { expenses } = props;
  const oneDayAgo = moment().subtract(24, 'hours').format("x");
  const oneWeekAgo = moment().subtract(7, 'days').format("x");
  const oneMonthAgo = moment().subtract(30, 'days').format("x");
  
  const todaysExpenses = () => {
    let total = 0;
    expenses.map((expense) => {
      if (expense.timestamp > oneDayAgo) {
        total += +expense.amount
      }
    });
    return total;
  }

  const weeksExpenses = () => {
    let total = 0;
    expenses.map((expense) => {
      if (expense.timestamp > oneWeekAgo) {
        total += +expense.amount
      }
    });
    return total;
  }

  const monthsExpenses = () => {
    let total = 0;
    expenses.map((expense) => {
      if (expense.timestamp > oneMonthAgo) {
        total += +expense.amount
      }
    });
    return total;
  }
  
  return (
    <div className="statistics-container">
      <h1 className="statistics-title">Recent Stats 🕒</h1>
      <StatBox label={"Last 24 hours"} amount={todaysExpenses()} />
      <StatBox label={"Last 7 days"} amount={weeksExpenses()} />
      <StatBox label={"Last 30 days"} amount={monthsExpenses()} />
    </div>
  )
};

export default RecentStatistics;