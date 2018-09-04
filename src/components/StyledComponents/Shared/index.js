import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  width: ${props => props.secondaryPage ? '80%' : '100%'}; 
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;  
`

const H2 = styled.h2`
  margin: 0;
  padding: 1rem 0;
  text-align: center;
  @media all and (min-width: 620px) {
    text-align: left;
  }
`

const StyledForm = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {    
    width: 100%;
    margin: 10px 0;
  }
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  max-width: 500px;
  margin: 10px 0;
  padding: 0 0 0 5px;
  @media all and (min-width: 1020px) {
    width: auto;
  }
`
const Select = styled.select`
  width: 100%;
  height: 50px;
  max-width: 500px;
  margin: 10px 0;
  padding: 0 5px;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  background: #fff;
  border: 1px solid #ccc;
`
const Button = styled.button`
  width: 200px;
  padding: .375rem .75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #fff;
  background-color: ${props => props.negative ? '#dc3545' : '#176dff'};
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 5px 6px 0px, rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
  cursor: pointer;
  transition: all .15s 
  svg {
    margin-right: 10px;
    font-weight: 700;
    font-size: 1rem;
  }
  &:hover {
    background-color: ${props => props.negative ? '#c82333' : '#0069d9'};
    box-shadow: rgba(0, 0, 0, 0.14) 0px 8px 10px 0px, rgba(0, 0, 0, 0.15) 0px 4px 4px 0px;
    transition: all .15s;
  }
`

export { StyledPageWrapper, H2, Input, Select, StyledForm, Button }