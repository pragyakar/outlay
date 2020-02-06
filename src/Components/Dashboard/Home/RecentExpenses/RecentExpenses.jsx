import React from 'react';
import ExpenseCard from '../../../UI/Cards/ExpenseCard';

const RecentExpenses = (props) => {

  const { expenses } = props;

  return (
    <div className="summary-container">
      <div className="container">
        <span className="recent-title">Recent Expenses</span>
        <div className="recent-container">
          { expenses && expenses.map((expense) => (
            <ExpenseCard 
              key={expense.id}
              amount={expense.amount}
              remarks={expense.remarks}
              timestamp={expense.timestamp}
              tag={expense.tag}
            /> 
          ))}
          { expenses && expenses.length <= 0 && 
            <div className="notice">
              <span>No Records.</span>
            </div>
          }
          { expenses ? '' : 'Loading...' }
        </div>
      </div>
    </div>
  );
}

export default RecentExpenses;