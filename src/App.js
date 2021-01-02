import React from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
