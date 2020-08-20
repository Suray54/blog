import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Blogs from "./pages/blogs/blogs.component";
import Auth from "./pages/auth/auth.component";
import Navbar from "./layouts/navbar/navbar.component";
import "./App.css";
import Footer from "./layouts/footer/footer.component";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/" component={Blogs} />
          <Route exact path="/login" component={Auth} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
