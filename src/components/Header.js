import React, {Component} from 'react';
import { StyledNav, StyledList, Hamburger, HomeButton } from './StyledComponents/Header';
import { MdHome, MdMenu, MdPowerSettingsNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
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
    return (
        <StyledNav>
          <HomeButton
            to="/dashboard">
              <MdHome/>Exp3nse Tracker
          </HomeButton>
          <Hamburger 
            onClick={this.toggleMobileNav}> 
              <MdMenu />
          </Hamburger>
          <StyledList show={this.state.showNav}>
            <li>
              <a
                href="https://github.com/Ilya-Meer/Expense-Tracker"
                target="_blank"
                rel="noopener">
                  <FaGithub/>View on Github
              </a>
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

 