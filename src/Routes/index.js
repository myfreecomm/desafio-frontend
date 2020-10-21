import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

/**importando paginas */
import Home from "../Pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
