import React from "react";
import { Link } from "gatsby";
import logo from "../img/we-logo.png";
import phone from "../img/phone.svg";
import MailChimpForm from "../components/MailChimpForm"

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
        className="is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="flex w-full justify-between py-6">
            <div className="navbar-brand">
              <Link to="/" className="" title="Logo">
                <img
                  src={logo}
                  alt="Watercoolers Europe"
                  style={{ width: "126px" }}
                />
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
            <div className="hidden md:flex gap-4 ">
              <MailChimpForm />
              {/* <a href="\" className="flex items-start text-blue"  rel="noopener noreferrer">
                <img src={subscribe} alt="Newsletter" style={{width:'24px'}} className="mr-2 "/>
                Newsletter
              </a> */}
              <Link to="/contact" className="flex items-start text-blue "><img src={phone} alt="Contect" style={{width:'24px'}} className="mr-2"/>Contact</Link>
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu pb-6  ${this.state.navBarActiveClass}`}
          >
            <div role="button" className={`navbar-close md:hidden`} tabIndex={0} onKeyPress={() => this.toggleHamburger()}
                onClick={() => this.toggleHamburger()}>
                   <span />
                <span />
                </div>
            <div className="block md:flex text-center justify-center mx-auto">
              <Link className="py-3 px-4 block hover:text-blue ease-in-out duration-300" to="/venue-and-accommodation">
                Venue & Accommodation
              </Link>
              <Link className="py-3 px-4 block  hover:text-blue ease-in-out duration-300" to="/trade-fair">
                Trade Fair
              </Link>
              <Link className="py-3 px-4 block  hover:text-blue ease-in-out duration-300" to="/event-programme">
                Event Programme
              </Link>
              <Link className="py-3 px-4 block  hover:text-blue ease-in-out duration-300" to="/aqua-awards">
                Aqua Awards & Gala Dinner
              </Link>
              <a className="py-3 px-4 bg-green text-white block hover:bg-greenhover ease-in-out duration-300" href="https://systemcoffee.pl/?lang=en&go2rej=1&kid=1316" target="_blank" rel="noreferrer"> Registration</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
