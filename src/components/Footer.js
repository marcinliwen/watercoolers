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
          <div className="flex flex-wrap">
          
          <div className="text-white text-sm font-light flex flex-col gap-1 mr-auto mb-12 md:mb-0">
            <Link to="/contact">CONTACT</Link>
            <a href="/terms-and-conditions" target="_blank">TERMS & CONDITIONS FOR EXHIBITORS</a>
            <a href="/">GENERAL INFORMATION</a>
            <a href="/private-policy-we.pdf" target="_blank">PRIVACY POLICY</a>
          </div>
          <div className="basis-[168px]">
          <img
            src={logo}
            alt="We"
            style={{ width: "168px", height: "auto" }}
            
          />
          </div>
          
          </div>
          
        </div>
      </footer>
    );
  }
};

export default Footer;
