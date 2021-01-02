import React from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
