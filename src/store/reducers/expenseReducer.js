const initState = {
  expenses: [
    {id: '1', timestamp: '123123123', amount: '100', remarks: 'Some remarks'},
    {id: '2', timestamp: '123123123', amount: '150', remarks: 'Some other remarks'},
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