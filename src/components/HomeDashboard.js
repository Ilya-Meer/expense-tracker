import React from 'react';
import styled from 'styled-components';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import ExpenseListFilters from './ExpenseListFilters';


const Styled = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;  
`

const HomeDashboard = () => (
  <Styled>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </Styled>
);

export default HomeDashboard;