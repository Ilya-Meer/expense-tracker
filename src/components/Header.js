import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
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

    const NavLinkStyle = {
      display: "inline",
      margin: "0 1rem",
      color: "magenta", 
      textDecoration: 'none', 
    }

    const NavLinkActiveStyle = {
      color: "#001d48",
    }

    const h1style = {
      paddingLeft: "2rem", 
      fontSize: "16px"
    }

    return (
      <StyledHeader>
        <StyledNav>
            <NavLink
              exact={true}
              to="/"
              style={NavLinkStyle}
              activeClassName="selected"
              activeStyle={NavLinkActiveStyle}>
                <h1 style={h1style}>Exp3nse Tr@ck3r</h1>
            </NavLink>
          
          <StyledList>
            <NavLink
              to="/create"
              style={NavLinkStyle}
              activeClassName="selected"
              activeStyle={NavLinkActiveStyle}>
                Add Expense
            </NavLink>
            <NavLink
              to="/edit"
              style={NavLinkStyle}
              activeClassName="selected"
              activeStyle={NavLinkActiveStyle}>
                View All
            </NavLink>
            <NavLink
              to="/help"
              style={NavLinkStyle}
              activeClassName="selected"
              activeStyle={NavLinkActiveStyle}>
                Help
            </NavLink>
          </StyledList>
        </StyledNav>
      </StyledHeader>
    )
  }
}





