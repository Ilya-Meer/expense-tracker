import React, {Component} from 'react';
import { StyledNav, StyledList, Hamburger, HomeButton } from './StyledComponents/Header';
import { MdHome, MdAddCircleOutline, MdHelpOutline, MdMenu, MdPowerSettingsNew } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';

class Header extends Component {  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);

    this.state = {
      showNav: false
    }
  }
  logOut() {
    this.props.startLogout();
  }

  toggleMobileNav() {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    const NavLinkActiveStyle = {
      color: "#bcddff",
      textDecoration: 'none'
    }

    return (
        <StyledNav>
          <HomeButton
            to="/dashboard"
            activeClassName="selected"
            activeStyle={NavLinkActiveStyle}>
              <MdHome/>Exp3nse Tracker
          </HomeButton>
          <Hamburger 
            onClick={this.toggleMobileNav}> 
              <MdMenu />
          </Hamburger>
          <StyledList show={this.state.showNav}>
            <li>
              <NavLink
                to="/create"
                activeClassName="selected"
                activeStyle={NavLinkActiveStyle}>
                  <MdAddCircleOutline/>Add Expense
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                activeClassName="selected"
                activeStyle={NavLinkActiveStyle}>
                  <MdHelpOutline/>Help
              </NavLink>
            </li>
            <li onClick={this.logOut}>
              <MdPowerSettingsNew/>
              Log Out
            </li>
          </StyledList>
        </StyledNav>
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

 