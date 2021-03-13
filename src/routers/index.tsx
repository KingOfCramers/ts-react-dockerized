import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import Dashboard from "../views/Dashboard";
import About from "../views/About";
import NotFound from "../views/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import useToken from "../hooks/useToken";

function AppRouter() {
  const { token, setToken } = useToken();

  // When this page is refreshed and we have the cookie, how can we tell it to render our BrowserRouter and not the Login page?
  // We need to take that cookie and make a request back to our server to see if its a valid user.

  if (!token) {
    return <Login setToken={setToken} />;
  } else {
    return (
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </QueryParamProvider>
      </BrowserRouter>
    );
  }
}

export { AppRouter };
