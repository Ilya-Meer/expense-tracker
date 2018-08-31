const expenseTotal = (expenses) => {
  return expenses.reduce((prev, next) => prev += parseInt(next.amount, 10), 0)
}

export default expenseTotal;