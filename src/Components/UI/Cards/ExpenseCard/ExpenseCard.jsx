import React from 'react';
import moment from 'moment';
import getTagStyle from './tagStyle';

const ExpenseCard = (props) => {

  const { amount, remarks, timestamp, tag} = props;

  return (
    <div className="expense-card">
      <div className="expense-card-details">
        <div className="expense-card-items">
          <span className="expense-card-title">NRs. {amount}</span>
          <span className="expense-card-remarks">{remarks}</span>
          <span className="expense-card-date">{moment(+timestamp).format('L')}</span>
        </div>
      </div>
      <div className="expense-card-tags">
        <span className="expense-card-tag" style={getTagStyle(tag)}>{tag}</span>
      </div>
    </div>
  );
}

export default ExpenseCard;