import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loader } from "components/layouts";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default Router;
