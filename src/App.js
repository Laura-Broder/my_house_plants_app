import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./my-normalize.css";
import "./App.css";
import ManageList from "./components/manageUsersList/ManageList.component";
import Home from "./components/homepage/Home.component";
import WeatherWidget from "./components/weatherWidget/WeatherWidget.component";
import SearchDatabase from "./components/searchDatabase/SearchDatabase.component";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex-row">
          <nav className="navbar navbar--flex-column">
            <ul>
              <li className="navbar__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/manage-list">Manage Your List</NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/search-database">Search in Database</NavLink>
              </li>
              <li className="navbar__item"></li>
            </ul>
            <WeatherWidget />
          </nav>
          <Route path="/manage-list">
            <ManageList />
          </Route>
          <Route path="/search-database">
            <SearchDatabase />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
