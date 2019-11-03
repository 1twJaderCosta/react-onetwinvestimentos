import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import settingsReducer from "./reducers/settings";
import loadingReducer from "./reducers/loading";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      settings: settingsReducer,
      loading: loadingReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
