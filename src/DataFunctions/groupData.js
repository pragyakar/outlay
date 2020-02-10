import moment from 'moment';

export const groupExpensesByDay = (expenses) => {
  let groupedExpenses = [];
  expenses && expenses.map((expense) => {
    const x = moment(+expense.timestamp).format("DD/MM");
    const y = +expense.amount;
    const groupedObject = {x, y}
    let repeat = false;
    groupedExpenses.map(expense => {
      if (expense.x === groupedObject.x) {
        repeat = true;
        expense.y = expense.y + (+groupedObject.y)
      } else {
        repeat = false;
      }
    });
    if (repeat !== true) {
      groupedExpenses.push(groupedObject);
    }
  });
  return groupedExpenses.reverse();
}