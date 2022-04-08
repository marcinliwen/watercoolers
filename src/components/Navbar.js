import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="block md:flex has-text-centered">
              <Link className="py-3 px-4 block" to="/about">
              Venue & Accommodation
              </Link>
              <Link className="py-3 px-4 block" to="/products">
              Trade Fair
              </Link>
              <Link className="py-3 px-4 block" to="/blog">
              Event Programme
              </Link>
              <Link className="py-3 px-4 block" to="/contact">
              Aqua Awards & Gala Dinner
              </Link>
              <Link className="py-3 px-4 bg-green-600 text-white block" to="/contact/examples">
               Registration
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a href ="\" className="navbar-item" rel="noopener noreferrer">Newsletter</a>
              <Link className="navbar-item">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
