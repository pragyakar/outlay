export const addExpense = (expense) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore()
    firestore.collection('expenses').add({
      ...expense
    }).then(() => {
      dispatch({ type: 'ADD_EXPENSE', expense});
    }).catch((error) => {
      dispatch({ type: 'ADD_EXPENSE_ERROR', error});
    })
  }
};