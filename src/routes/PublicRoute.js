import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) =>  (
  <Route {...rest} component={props => {
    return !isAuthenticated ? (
        <Component {...props} />
    ) : <Redirect to="/dashboard"/>
  }} />
)

export { PublicRoute }

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PublicRoute)

 