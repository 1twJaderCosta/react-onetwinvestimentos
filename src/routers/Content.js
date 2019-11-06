import React from "react";
import { Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import HomePage from "../views/Home";
import NotFoundPage from "../views/NotFound";
import Admin from "layouts/Admin.js";
import LoginPage from "../views/Login";
import RegisterPage from "../views/Register";

import ROUTES from "../data/routes";

const Content = () => (
  <Switch>
    {/* <Redirect from="/" to="/admin/dashboard" /> */}
    <PublicRoute path={ROUTES.HOME} component={HomePage} exact />
    <PublicRoute path={ROUTES.LOGIN} component={LoginPage} exact />
    <PublicRoute path={ROUTES.REGISTER} component={RegisterPage} exact />
    <PublicRoute path={"/admin"} component={Admin} exact />
    <PublicRoute path={"/admin/dashboard"} component={Admin} exact />
    <PublicRoute path={"/admin/user"} component={Admin} exact />
    <PublicRoute path={"/admin/table"} component={Admin} exact />
    <PublicRoute path={"/admin/typography"} component={Admin} exact />
    <PublicRoute path={"/admin/icons"} component={Admin} exact />
    <PublicRoute path={"/admin/maps"} component={Admin} exact />
    <PublicRoute path={"/admin/notifications"} component={Admin} exact />

    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Content;
