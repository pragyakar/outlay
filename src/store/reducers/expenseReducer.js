const initState = {
  expenses: [
    {id: '1', timestamp: '123123123', amount: '100', remarks: 'Some remarks'},
    {id: '2', timestamp: '123123123', amount: '150', remarks: 'Some other remarks'},
  ]
}

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_REDUCER':
      console.log('add reducer');
  }
  return state;
}

export default expenseReducer;