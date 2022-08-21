import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
          <div className="flex flex-col md:flex-row">
            <div className="text-white text-sm font-light flex flex-col gap-1  mb-12 md:mb-0">
              <Link to="/contact">CONTACT</Link>
              <a href="/terms-and-conditions" target="_blank" rel="noreferrer">
                TERMS & CONDITIONS FOR EXHIBITORS
              </a>
              <a href="/GENERAL_INFORMATION_LISBON_2022.pdf" target="_blank" rel="noreferrer">
                GENERAL INFORMATION
              </a>
              <a href="/private-policy-we.pdf" target="_blank" rel="noreferrer">
                PRIVACY POLICY
              </a>
            </div>
            <div className=" md:ml-12  mb-12 md:mb-0">
              <p className="text-white text-sm font-light">
                IDEA & MARKETING
                <br />
                Beata Mąkólska
                <br />
                Jedności 118
                <br />
                05-506 Janczewice, Poland
                <br />
                NIP: 123-002-55-82
                <br />
                REGON: 388439940
              </p>
            </div>
            <div className="md:ml-12 mr-auto">
              <p className="text-white text-sm font-light">MEDIA PARTNER:</p>
              <StaticImage
                  src="../img/foodbev.png"
                  placeholder="none"
                  alt="Foodbev media logo"
                  className="max-w-[100px] mt-2"
                />
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
