import moment from "moment";

export const getTodaysExpenses = (expenses) => {

  let total = 0;
  const today = moment().startOf('day').format("x");

  expenses.map((expense) => {
    if (expense.timestamp > today) {
      total += +expense.amount
    }
  });
  console.log(total);
  
  return total;
}