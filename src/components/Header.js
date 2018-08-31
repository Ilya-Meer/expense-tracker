import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

class Header extends Component {  
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    this.props.startLogout();
  }

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
              to="/dashboard"
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
              to="/help"
              style={NavLinkStyle}
              activeClassName="selected"
              activeStyle={NavLinkActiveStyle}>
                Help
            </NavLink>
            <button onClick={this.logOut}>Log Out</button>
          </StyledList>
        </StyledNav>
      </StyledHeader>
    )
  }
}

export { Header };

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => {
      dispatch(startLogout())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header)

 