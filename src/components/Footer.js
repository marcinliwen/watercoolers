import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/we-logo-grey.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-blue py-4">

        <div className="container border-t-gray-300 border-t py-2">
          <img
            src={logo}
            alt="We"
            style={{ width: "126px", height: "auto" }}
          />
        </div>
      </footer>
    );
  }
};

export default Footer;
