import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./my-normalize.css";
import "./App.css";
import ManageList from "./components/ManageList.component";
import Home from "./components/Home.component";

function App() {
  return (
    <div className="App">
      {/* <ManageList /> */}
      <Router>
        <div className="flex-row">
          <nav>
            <ul>
              <li className="container">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="container">
                <NavLink to="/manage-list">Manage Your List</NavLink>
              </li>
              <li className="container">
                <NavLink to="/search-database">Search in Database</NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/manage-list">
            <ManageList />
          </Route>
          {/* <Route path="/search-database">
            <SearchDatabase />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
