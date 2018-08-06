import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } ) => {
  
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt); 
    const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
    const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
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