export const addTextFilter = (filter = '') => {
  return {
    type: 'ADD_TEXT_FILTER', 
    payload: filter
  }
}

export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE', 
  }
}

export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT', 
  }
}

export const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE', 
    payload: date
  }
}

export const setEndDate = (date = undefined) => {
  return {
    type: 'SET_END_DATE', 
    payload: date
  }
}