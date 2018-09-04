import styled from 'styled-components';

const StyledExpenseList = styled.div`
  width: 80%;
  margin: 1rem auto;
`

const StyledFilters = styled.div`
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8f8;
  
  & > div {
    @media all and (min-width: 1000px) {
      display: flex;
      flex-direction: row;
    }
  }
`

const SingleFilter = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 1000px) {
    width: unset;
    margin-right: 2rem;
  }

`

const StyledSummary = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 620px) {
    align-items: flex-start;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: space;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 300;
    @media all and (min-width: 620px) {
      flex-direction: row;
    }

    span {
      padding: 1rem 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #176ddf;
      @media all and (min-width: 620px) {
        padding: 0 2rem;
        &:first-of-type {
          padding: 0 1rem;
        }
      }
    }
  }

  a {
    width: 225px;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .75rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
    text-decoration: none;
    color: #fff;
    background-color: #176dff;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 5px 6px 0px, rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
    transition: background-color .15s 
    svg {
      margin-right: 10px;
      font-size: 1.2rem;
    }
    &:hover {
      background-color: #0069d9;
      box-shadow: rgba(0, 0, 0, 0.14) 0px 8px 10px 0px, rgba(0, 0, 0, 0.15) 0px 4px 4px 0px;
      transition: all .2s;
    }
  }
`



export { StyledExpenseList, StyledSummary, StyledFilters, SingleFilter }