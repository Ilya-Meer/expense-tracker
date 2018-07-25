import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } ) => {
  

  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt); 
    console.log(createdAtMoment._d);
    
    const startDateMatch = startDate ? moment(createdAtMoment).isSameOrAfter(startDate, 'day') : true;
    const endDateMatch = endDate ? moment(createdAtMoment).isSameOrBefore(endDate, 'day') : true;
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