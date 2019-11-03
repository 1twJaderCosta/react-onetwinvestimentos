import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Route
        {...rest}
        component={props =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth && state.auth.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
