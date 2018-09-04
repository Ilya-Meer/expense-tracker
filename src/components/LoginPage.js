import React from 'react';
import { connect } from 'react-redux';
import { FaGoogle } from 'react-icons/fa';
import { LoginPageWrapper, Dialog } from './StyledComponents/LoginPage';
import { Button } from './StyledComponents/Shared';
import { startLogin } from '../actions/authActions';

const LoginPage = (props) => (
  <LoginPageWrapper>
    <Dialog>  
      <h1>Expense Tracker</h1>
      <p>Follow your money.</p>
      <p>Control your expenses.</p>
      <Button 
        onClick={props.startLogin}>
        <FaGoogle />Log In with Google
      </Button>
    </Dialog>
  </LoginPageWrapper>
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