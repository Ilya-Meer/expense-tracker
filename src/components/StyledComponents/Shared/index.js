import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  padding: 5%;
`

const StyledForm = styled.form`
  max-width: 500px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > * {    
    width: 100%;
    margin: 10px 0;
  }

  input {
    width: 98%;
  }

  textarea {
    width: 98%;
    padding: 5px;
  }
`

const Input = styled.input`
  width: 98%;
  height: 2.5rem;
  max-width: 500px;
  padding: 0 0 0 5px;
  @media all and (min-width: 1020px) {
    width: auto;
  }
`
const Select = styled.select`
  width: 100%;
  height: 3rem;
  max-width: 508px;
  margin: 10px 0;
  @media all and (min-width: 1020px) {
    width: auto;
    margin: 0 10px;
  }
`
const Button = styled.button`
  width: 150px;
  padding: .375rem .75rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #fff;
  background-color: ${props => props.negative ? '#dc3545' : '#176dff'};
  border-radius: .25rem;
  cursor: pointer;
  transition: background-color .15s 
  &:hover {
    background-color: ${props => props.negative ? '#c82333' : '#0069d9'};
    transition: background-color .15s;
  }
`

export { H2, Input, Select, StyledForm, Button }