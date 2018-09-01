import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import numeral from 'numeral';
import moment from 'moment';


const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem 5%;
  border: 1px solid #ccc;
  

  a {
    text-decoration: none;
    color: #176ddf;
  }

  h3 {
    margin: 0;
    padding-bottom: 5px;
    font-weight: 700;
  }

  p {
    margin: 0
  }
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
`



const ExpenseListItem = (props) => (
  <Styled>
    <Col>
      <Link to={`/edit/${props.id}`}>
        <h3>{props.desc}</h3>
      </Link>
      <p>Created on {moment(props.createdAt).format("MMM Do, YYYY")}</p>
    </Col>
    <Col>
      <p>{numeral(props.amount / 100).format('$0,0.00')}</p>
    </Col>
  </Styled>
)


export default ExpenseListItem