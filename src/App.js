import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import "./App.css";
import { Cart, Home, Overview, Signin, Signup } from "./pages";
import { Header } from "./components";
import { Container } from "@material-ui/core";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Container className="">
          <div className="main_content container_shadow">
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.OVERVIEW} component={Overview} />
              <Route exact path={ROUTES.CART} component={Cart} />
              <Route exact path={ROUTES.SIGN_UP} component={Signup} />
              <Route exact path={ROUTES.SIGN_IN} component={Signin} />
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}
