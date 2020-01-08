import React from 'react';
import ExpenseChart from './ExpenseChart';

const data = {
  "id": "Expenses",
  "color": "hsl(80, 70%, 50%)",
  "data": [
    {
      "x": "01/02",
      "y": 30
    },
    {
      "x": "02/02",
      "y": 40
    },
    {
      "x": "03/02",
      "y": 111
    },
    {
      "x": "04/02",
      "y": 175
    },
    {
      "x": "05/02",
      "y": 70
    },
    {
      "x": "06/02",
      "y": 143
    },
    {
      "x": "07/02",
      "y": 227
    },
    {
      "x": "08/02",
      "y": 224
    },
    {
      "x": "09/02",
      "y": 6
    },
    {
      "x": "10/02",
      "y": 19
    }
  ]
}

const Report = () => {
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