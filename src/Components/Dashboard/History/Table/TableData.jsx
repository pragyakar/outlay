export const getAllExpenses = (expenses, threshold) => {
  let allExpenses = expenses.reverse().slice(0, threshold);
  return allExpenses;
}

export const getExpenseByCategory = (expenses, tagName) => {
  let categorizedExpenses = [];
  expenses.map((expense) => {
    if (expense.tag.toLowerCase() === tagName) {
      categorizedExpenses.push(expense);
    }
  });
  return categorizedExpenses;
}

export const getOtherExpenses = (expenses) => {
  let otherExpenses = [];
  const tagList = ['petrol', 'groceries', 'food', 'tax', 'repairs', 'haircut']
  expenses.map((expense) => {
    if (!tagList.includes(expense.tag.toLowerCase())) {
      otherExpenses.push(expense);
    }
  });
  return otherExpenses;
}