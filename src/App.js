import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { getUserData, logoutUser } from "./redux/actions/userActions";

import * as ROUTES from "./routes/routes";
import "./App.css";
import { Cart, Home, Overview, Signin, Signup } from "./pages";
import { Header } from "./components";
import { Container } from "@material-ui/core";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/signin";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header />
          <Container className="">
            <div className="main_content container_shadow">
              <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path="/overview/:productId" component={Overview} />
                <Route exact path={ROUTES.CART} component={Cart} />
                <Route exact path={ROUTES.SIGN_UP} component={Signup} />
                <Route exact path={ROUTES.SIGN_IN} component={Signin} />
              </Switch>
            </div>
          </Container>
        </Router>
      </div>
    </Provider>
  );
}
