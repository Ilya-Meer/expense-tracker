import React, { Component } from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (<div>
    <p>I am the  Edit route!</p>
    <p>You are currently editing expense No. {props.match.params.id}</p>
    </div>)
};

export default EditExpensePage;