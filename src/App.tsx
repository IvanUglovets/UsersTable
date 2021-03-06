import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/table" component={MainPage} />
      <Route exact component={ErrorPage} />
    </Switch>
  );
};

export default App;
