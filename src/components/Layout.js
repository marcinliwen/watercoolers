import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Bannerslider from "./Bannerslider";
/* import "./all.sass"; */
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import CookieConsent from "react-cookie-consent";

const TemplateWrapper = ({ location, pageName,  children }) => {
  const { title, description } = useSiteMetadata();

  const [cookie, setCookie] = React.useState(false);
  React.useEffect(() => {
    setTimeout(()=>{
      setCookie(true)
    }, 500)
    
  })
console.log(pageName)
const descriptionPage = pageName ? pageName + " - " + description : description;
  return (
    <div className="h-full grid grid-rows-layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={descriptionPage} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.png`}
        />
        {location === "/" ? <meta name="google-site-verification" content="2Tsu7Q9ZqKdksBeYLBS4tJHjRABjswNbcZhddMN1YzQ" /> : ''}
        {location === "/contact/thanks" ? <meta name="robots" content="noindex" />: ''}
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Sponsors />
      <Bannerslider />
      <Footer />
      <CookieConsent
        disableStyles={true}
        location="none"
        containerClasses={` ${cookie ? 'bottom-8': 'bottom-[-100%]'} z-1000 ease-in-out duration-300 delay-500 fixed bottom-4 left-4 right-4  md:w-[450px] md:left-8 md:right-auto bg-white text-blue p-5 flex flex-col items-end shadow-xl`}
        buttonClasses="bg-blue text-white py-2 px-6  ml-auto mt-8"
      >
        This website uses cookies to enhance the user experience.
        Check <a href="/private-policy-we.pdf" target="_blank" rel="noreferrer" className="text-pink" >PRIVACY POLICY</a>
      </CookieConsent>
    </div>
  );
};

export default TemplateWrapper;
