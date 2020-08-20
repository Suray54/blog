import React, { Component } from "react";
import "./navbar.styles.scss";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              login
            </Link>
          </li>
          <li className="nav-item">
            <div className="social">
              <a
                href="https://www.facebook.com/suranjan.rai.12"
                rel="nofollow"
                className="social__item"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/RaiSuranjan"
                rel="nofollow"
                className="social__item"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/suranjan-rai-991309136/"
                rel="nofollow"
                className="social__item"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
