import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    const StyledHeader = styled.header`
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0 auto;
      color: magenta;
      text-align: center;
      box-shadow: 0 1px 6px rgba(0,0,0,.16), 0 1px 6px rgba(0,0,0,.23);
    `;

    const StyledNav = styled.nav`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;


    const StyledList = styled.ul`
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `;

    const Li = styled.li`
      display: inline;
      margin: 0 1rem;
      color: ${props => props.primary ? "black" : "magenta"}
      cursor: pointer;
      &:hover {
        color: red;
      }
    `

    const h1style = {
      paddingLeft: "2rem", 
      fontSize: "16px"
    }

    return (
      <StyledHeader>
        <StyledNav>
          <h1 style={h1style}>Exp3nse Tr@ck3r</h1>
          <StyledList>
            <Li primary>New Expense</Li>
            <Li>View All Expenses</Li>
            <Li>Help Page</Li>
          </StyledList>
        </StyledNav>
      </StyledHeader>
    )
  }
}





