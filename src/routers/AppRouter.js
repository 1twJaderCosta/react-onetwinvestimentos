import React from "react";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Loading from "../components/Loading";

import Content from "./Content";

export const history = createHistory();

class AppRouter extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <div>
          <Loading />
          <Content />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
