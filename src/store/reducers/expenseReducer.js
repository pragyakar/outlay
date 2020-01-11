const initState = {
  expenses: [
    {id: '1', timestamp: '1578242866000', amount: '100', tag: 'Petrol', remarks: 'Some remarks'},
    {id: '2', timestamp: '1578329266000', amount: '150', tag: 'Tarkari', remarks: 'Some other remarks'},
    {id: '3', timestamp: '1578329266000', amount: '250', tag: 'Haircut', remarks: 'Some other remarks'},
    {id: '4', timestamp: '1578329266000', amount: '150', tag: 'Food', remarks: 'Some other remarks'},
    {id: '5', timestamp: '1578329266000', amount: '800', tag: 'Repairs', remarks: 'Some other remarks'}
  ]
}

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log('ADD EXPENSE', action.expense);
      return state;
    case 'ADD_EXPENSE_ERROR':
      console.log('ADD EXPENSE ERROR', action.error);
      return state;
    default:
      return state;
  }
}

export default expenseReducer;