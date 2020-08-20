import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Blogs from "./pages/blogs/blogs.component";
import Auth from "./pages/auth/auth.component";
import Navbar from "./layouts/navbar/navbar.component";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="space"></div>
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route exact path="/login" component={Auth} />
        </Switch>
      </div>
    );
  }
}
