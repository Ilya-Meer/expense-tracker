import React from 'react';
import { StyledPageWrapper } from './StyledComponents/Shared';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import ExpenseListFilters from './ExpenseListFilters';



const HomeDashboard = () => (
  <StyledPageWrapper secondaryPage={false}>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </StyledPageWrapper>
);

export default HomeDashboard;