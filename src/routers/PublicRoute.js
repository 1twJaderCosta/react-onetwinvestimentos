import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Route {...rest} component={props => <Component {...props} />} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth && state.auth.authenticated
});

export default connect(mapStateToProps)(PublicRoute);
