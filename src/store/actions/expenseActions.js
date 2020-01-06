export const addExpense = (expense) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    dispatch({ type: 'ADD_EXPENSE', expense});
  }
};