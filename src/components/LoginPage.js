import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

const LoginPage = (props) => (
  <div>
    <button onClick={props.startLogin}>Log In</button>
    <button>Sign Up</button>
  </div>
);

export { LoginPage };



const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {
      dispatch(startLogin())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)