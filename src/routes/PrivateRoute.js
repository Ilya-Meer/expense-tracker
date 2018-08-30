import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) =>  (
  <Route {...rest} component={props => {
    return isAuthenticated ? (
      <React.Fragment>
        <Header />
        <Component {...props} />
      </React.Fragment>
    ) : <Redirect to="/"/>
  }} />
)

export { PrivateRoute }

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PrivateRoute)

 