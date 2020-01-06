export const addExpense = (expense) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_EXPENSE', expense});
  }
};