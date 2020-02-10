import React from 'react';

import LineChart from './LineChart';
import { groupExpensesByDay } from '../../../../DataFunctions/groupData';


const SummaryGraph = (props) => {

  const { expenses } = props;
  const graphData = groupExpensesByDay(expenses);
  
  const data = {
    "id": "Expenses",
    "color": "hsl(80, 70%, 50%)",
    "data": graphData
  }

  return (
    <div className="graph-container">
      <div className="container graph-box">
        <LineChart data={[data]} />
      </div>
    </div>
  );
}

export default SummaryGraph;