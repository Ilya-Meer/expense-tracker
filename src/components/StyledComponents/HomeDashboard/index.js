import styled from 'styled-components';

const StyledExpenseList = styled.div`
  width: 100%;

  h2 {
    padding: 5%;
  }
`

const StyledFilters = styled.div`
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #eee;

  & > div {    
    width: 100%;
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    @media all and (min-width: 1020px) {
      flex-direction: row;
    }
  }
`

export { StyledExpenseList, StyledFilters }