import React from 'react';

const TableFilters = (props) => {
  const { currentFilter, changeCurrentFilter } = props;
  return (
    <div className="history-table-filters">
      <span 
        className={`filter-tag tag-all ${ currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('all')} 
      >
        All
      </span>
      <span 
        className={`filter-tag tag-food ${ currentFilter === 'food' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('food')} 
      >
        Food
      </span>
      <span 
        className={`filter-tag tag-groceries ${ currentFilter === 'groceries' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('groceries')} 
      >
        Groceries
      </span>
      <span 
        className={`filter-tag tag-petrol ${ currentFilter === 'petrol' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('petrol')} 
      >
        Petrol
      </span>
      <span 
        className={`filter-tag tag-repairs ${ currentFilter === 'repairs' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('repairs')} 
      >
        Repairs
      </span>
      <span 
        className={`filter-tag tag-haircut ${ currentFilter === 'haircut' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('haircut')} 
      >
        Haircut
      </span>
      <span 
        className={`filter-tag tag-tax ${ currentFilter === 'tax' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('tax')} 
      >
        Tax
      </span>
      <span 
        className={`filter-tag tag-others ${ currentFilter === 'others' ? 'active' : ''}`}
        onClick={() => changeCurrentFilter('others')} 
      >
        Others
      </span>
    </div>
  );
}

export default TableFilters;