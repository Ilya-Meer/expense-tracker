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
  
  @media all and (min-width: 620px) {
    li, a {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -32px;
        right: -5px;
        height: 3px;
        width: 100%;
        background-color: #fff;
        opacity: 0;
        transition: all .15s;
      }
      &:hover {
       &::after {
        opacity: 1;
        transition: all .55s;
       } 
      }
    }

  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`
const StyledList = styled.ul`
  width: 100%;
  height: ${props => props.show === true ? 'calc(100vh - 116px)' : '0px'};
  margin: 0;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 115px;
  right: 0;
  background: #fff;
  opacity: ${props => props.show === true ? '1' : '0'};
  transition: all .2s;
  @media all and (min-width: 650px) {
    width: 50%;
    height: unset;
    margin: 0 2rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: static;
    background: none;
    opacity: 1;
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
    align-items: center;
    list-style: none;
    @media all and (min-width: 650px) {
      width: auto;
      margin: 0;
    }
  }

  svg {
    margin-right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
  }
`
const HomeButton = styled(NavLink)`
  margin: 0 1rem;
  display: flex;
  justifyContent: space-between;
  color: #fff;

  svg {
    margin-right: 10px;
    font-weight: 700;
    font-size: 1.5rem;
  }
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