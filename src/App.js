import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReactLink
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TamkTable from "./components/TamkTable";
import RestTable from "./components/RestTable";
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
          <div className="container">
            <div className="">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <ReactLink to="/">
                    <a className="nav-link">Tamk</a>
                  </ReactLink>
                </li>
                <li className="nav-item">
                  <ReactLink to="/rest">
                    <a className="nav-link">Restcountries</a>
                  </ReactLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rest">
            <RestTable />
          </Route>
          <Route path="/">
            <TamkTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
