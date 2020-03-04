import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App/App.css";
import Banner from "./Banner/Banner";
import App from "./App/App.js";
import SearchResults from "./SearchResults/SearchResults.js";
import Context from "./Context.js";

const Index = () => {
  return (
    <Router>
      <Context>
        <Banner />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/results" component={SearchResults} />
        </Switch>
      </Context>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));