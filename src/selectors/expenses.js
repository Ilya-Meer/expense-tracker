const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } ) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch  =  expense.desc.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((prev, next) => {
    if (sortBy === 'amount') {
      return prev.amount > next.amount ? -1 : 1
    } else if (sortBy === 'date') {
      return prev.createdAt > next.createdAt ? -1 : 1
    }
  })
}

export default getVisibleExpenses;