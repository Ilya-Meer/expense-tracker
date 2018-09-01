import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(to right, #0575e6, #021b79);
  box-shadow: 0 1px 6px rgba(0,0,0,.16), 0 1px 6px rgba(0,0,0,.23);
  position: relative;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`
const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 3rem 0;
  display: ${props => props.show === true ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 115px;
  right: 0;
  background: #fff;
  @media all and (min-width: 650px) {
    width: 50%;
    margin: 0 2rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: static;
    background: none;
  }

  li, a {
    color: #176dff;
    cursor: pointer;
    @media all and (min-width: 650px) {
      color: #fff;
    }
  }

  li {
    width: 150px;
    margin: 1rem 0;
    display: flex;
    list-style: none;
    @media all and (min-width: 650px) {
      width: auto;
      margin: 0;
      align-items: center;
    }
  }
`
const HomeButton = styled(NavLink)`
  width: 140px; 
  margin: 0 1rem;
  display: flex;
  justifyContent: space-between;
  color: #fff;
`
const Hamburger = styled.button`
  display: block;
  color: #fff;
  cursor: pointer;
  background: none;
  border: none;
  box-shadow: none;
  font-size: 2.5rem;
  @media all and (min-width: 650px) {
    display: none;
  }
`

export { HomeButton, Hamburger, StyledNav, StyledList };