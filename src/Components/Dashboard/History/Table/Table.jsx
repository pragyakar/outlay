import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import { 
  getAllExpenses, 
  getExpenseByCategory, 
  getOtherExpenses 
} from './TableData';
import TableFilters from './Filters';

const Table = (props) => {

  const { expenses } = props;
  const [ tableData, setTableData] = useState([]);
  const [ currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {    
    if (currentFilter.toLowerCase() === 'all') {
      setTableData(getAllExpenses(expenses, 10));
    } else if (currentFilter.toLowerCase() === 'others'){
      setTableData(getOtherExpenses(expenses));
    } else {
      setTableData(getExpenseByCategory(expenses, currentFilter));
    }
  }, [expenses, currentFilter]);

  const changeCurrentFilter = (tagName) => {
    setCurrentFilter(tagName);
  }
  console.log(tableData,'change');
  
  
  return (
    <div className="history-table">
      <TableFilters 
        changeCurrentFilter={changeCurrentFilter} 
        currentFilter={currentFilter}
      />
      <div className="history-table-row title-row">
        <div>Date</div>
        <div>Expense</div>
        <div>Remarks</div>
        <div>Tag</div>
      </div>
      <div className="history-table-scroll-view">
      {
        tableData && tableData.map((expense) =>{
          const { id, ...rest} = expense;
          return (<TableRow key={id} {...rest} />);
        })
      } 
      {
        tableData.length === 0 && 
          <div className="history-error-row">No records</div>
      }
      { tableData.length > 0 &&
        <div className="history-final-row">That's all</div> 
      }
      </div>
    </div>
  );
}

export default Table;