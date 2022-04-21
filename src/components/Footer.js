import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/we-white-logo.png";
/* import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg"; */

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-blue py-10">

        <div className="container py-2">
          <div className="flex flex-wrap gap-16">
          <img
            src={logo}
            alt="We"
            style={{ width: "300px", height: "auto" }}
          />
          <div className="text-white text-sm font-light flex flex-col gap-4">
            <a href="/">CONTACT</a>
            <a href="/">TERMS & CONDITIONS FOR EXHIBITORS</a>
            <a href="/">GENERAL INFORMATION</a>
            <a href="/">PRIVATE POLICY</a>
          </div>
          </div>
          
        </div>
      </footer>
    );
  }
};

export default Footer;
