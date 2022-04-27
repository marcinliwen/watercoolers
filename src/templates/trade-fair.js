import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";
import { StaticImage } from "gatsby-plugin-image";

export const TradeFairTemplate = ({ title, tradefair, fees }) => {
  console.log(tradefair);
  return (
    <div>
      <PageTitle title={title} />
      <div class="container">
        {/* <h3 className="font-bold mt-8  mb-6 text-2xl text-center">
          Don’t miss the next Watercoolers Europe annula event. Book now in your
          calendar.
        </h3>
        <p className="text-base text-center p-6 md:px-0">
          {tradefair.description}
        </p> */}
        <div className="py-8 md:px-0">
          <h3 className="font-bold my-4 text-2xl">Floor Plan</h3>
          <StaticImage src="../img/floor_plan_stage.png" placeholder="none"/>
        </div>
        <div className="plan-nr md:grid grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-[108px_1fr] list">
            <span className="first">S21</span><span className="first">ACTIVEWHERE TECNOLOGIAS DE INFORMAÇÃO LDA</span>
            <span className="">S04</span><span>AQUEDUCT - THE WELL WATER</span>
            <span className="">S08</span><span>AQUISENSE TECHNOLOGIES</span>
            <span className="">S15</span><span>ASE PACKAGING SOLUTIONS GMBH</span>
            <span className="">S19</span><span>BARDI</span>
            <span className="">S29</span><span>BLACKHAWK MOLDING, CO., INC.</span>
            <span className="">S17/22</span><span>BLUPURA SRL</span>
            <span className="">S26</span><span>CANALETAS S.A.</span>
            <span className="">S24/25</span><span>COSMETAL SRL</span>
            <span className="">S16</span><span>CRYSTAL MOUNTAIN</span>
            <span className="">S09</span><span>GREIF POLAND SP. Z O.O.</span>
            <span className="">S28</span><span>H2O DIRECT LIMITED</span>
            <span className="">S13</span><span>HODMETER</span>
            <span className="">S20</span><span>KLARAN BY CRYSTAL IS</span>
            <span className="last">S12</span><span className="last">KTLC EUROPE LTD</span>
          </div>
          <div className="grid grid-cols-[108px_1fr] list">
            <span className="first">S07</span><span className="first">MARCO BEVERAGE SYSTEMS</span>
            <span className="">S31</span><span>MIW WATER COOLER EXPERTS</span>
            <span className="">S05/10</span><span>OASIS WATER FRIENDLY SOLUTIONS</span>
            <span className="">S14</span><span>OP SARL</span>
            <span className="">S18</span><span>PALLETCO LLC</span>
            <span className="">S23</span><span>PETAINER</span>
            <span className="">S02</span><span>PITKIT LTD</span>
            <span className="">S11</span><span>POLYMER SOLUTIONS INTERNATIONAL INC.</span>
            <span className="">S06</span><span>SILGAN CLOSURES</span>
            <span className="">S13</span><span>VIKI PLAST</span>
            <span className="">S30</span><span>ZERICA SRL</span>
            <span className="">S01</span><span></span>
            <span className="">S03</span><span></span>
            <span className="">S27</span><span></span>
            <span className="">S32</span><span ></span>
          </div>
        </div>
      </div>
      <PageSubtitle title="Stand Fees" />
      <section>
        <div className="container">
          <h3 className="font-bold mt-4 text-2xl">Sand Fees (0% VAT)</h3>
          <p className="font-extrabold mb-8">
            6% VAT ON ONE SINGLE BEDROOM PRICE WILL BE ADDED TO THE STAND FEE
            (10.50 EUR)
          </p>

          <div className="prices-container uppercase font-bold grid grid-cols-2 mb-12">
            <div className="py-4 px-6 bg-bgblue">Member status</div>
            <div className="py-4 px-6 bg-bgblue">Stand Fee</div>
            <div className="text-pink py-4 px-6 bg-bggray">
              INTERNATIONAL SUPPLIER MEMBERS
            </div>
            <div className="text-gray py-4 px-6 bg-bggray">€ 3 530</div>
            <div className="text-pink py-4 px-6 bg-bggray">
              NATIONAL ASSOCIATION MEMBERS
            </div>
            <div className="text-gray py-4 px-6 bg-bggray">€ 3 950</div>
            <div className="text-pink py-4 px-6 bg-bggray">NON-WE MEMBERS</div>
            <div className="text-gray py-4 px-6 bg-bggray">€ 4 330</div>
          </div>
          <div className="  mb-12">
            <h3 className="font-bold my-4 text-2xl">Price includes:</h3>
            <ul className="list-disc text-sm pl-6 mb-4">
              <li>
                7,5 m<sup>2</sup> table top stand: to be dressed individually by the
                exhibitors
              </li>
              <li>
                One night accommodation (single room) on 20 October 2022 at the
                Sheraton Lisboa Hotel &amp; Spa
              </li>
              <li>Listing in the Fair Catalogue</li>
            </ul>
            <h3 className="font-bold my-4 text-2xl">Payment deadlines:</h3>
            <p className="">
              Deposit payment within 14 days of stand reservation/application
              form. Balance payment by <strong>31 August 2022</strong>
            </p>
          </div>
        </div>
      </section>

      <PageSubtitle title="Stand Application Form" />
      <section>
        <div className="container">
          <div className="">
            <h3 className="font-bold my-4 text-2xl">
              To reserve a stand, please:
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Complete this reservation form, indicating your preferred
                location
              </li>
              <li>
                Send a NON-REFUNDABLE pre-payment of € 1,500 (bank transfer with
                ALL bank charges to be paid by the Payer).
              </li>
            </ul>
            <p className="font-bold">
              Note: No reservation will be accepted WITHOUT the pre-payment.
            </p>
            <p className="pt-8">
              Exhibition stands will be allocated on a ‘first-come first-served’
              basis subject to space availability. Full payment is due by
              <strong> 31 August 2022</strong>. Cancellation after that date
              will entail 100% of the stand price plus VAT being due and
              payable.
            </p>
          </div>
          <div id="registration-form" className="my-8">
            <h3 className="font-bold my-4 text-2xl text-center">
              COMPANY DETAILS
            </h3>
            <form name="stand_application_form" method="POST" netlify-honeypot="bot-field" data-netlify="true"  action="/contact/thanks/">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="stand_application_form"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col">
                  <span>Company name <span className="text-red-600">*</span></span>
                  <input type="text" name="company_name" required />
                </label>
                <label className="flex flex-col">
                  <span>VAT No <span className="text-red-600">* (mandatory only for EU countries) </span></span><input type="text" name="vat" required />
                </label>
                <label className="flex flex-col">
                  <span>Contact person <span className="text-red-600">*</span></span>
                  <input type="text" name="contact_person" required />
                </label>
                <label className="flex flex-col">
                  <span>Street address <span className="text-red-600">*</span> </span><input type="text" name="address" required />
                </label>
                <label className="flex flex-col">
                  <span>Post Code <span className="text-red-600">*</span> </span><input type="text" name="post_code" required />
                </label>
                <label className="flex flex-col">
                  <span>City <span className="text-red-600">*</span></span> <input type="text" name="city" required />
                </label>
                <label className="flex flex-col">
                  <span>Region/State <span className="text-red-600">*</span></span>
                  <input type="text" name="region_state" required />
                </label>
                <label className="flex flex-col">
                  <span>Country <span className="text-red-600">*</span></span> <input type="text" name="countrey" required />
                </label>
                <label className="flex flex-col">
                  <span>Tel. <span className="text-red-600">*</span></span> <input type="tel" name="tel" required />
                </label>
                <label className="flex flex-col">
                  Fax <input type="tel" name="fax" />
                </label>
                <label className="flex flex-col">
                  <span>E-mail (Direct) <span className="text-red-600">*</span></span> <input type="email" name="email" required />
                </label>
                <label className="flex flex-col">
                  Website <input type="text" name="website" />
                </label>
                <label>
                  <span className="mr-2">AVAILABLE EXHIBITION STANDS:<span className="text-red-600">*</span></span>
                  <select name="standsize">
                    <option value="7,5 m2 table top">7,5 m&sup2; table top</option>

                    <option value="15 m2 table top">15 m&sup2; table top</option>

                    <option value="22,5 m2 table top">22,5 m&sup2; table top</option>
                  </select>
                </label>
                <label>
                  <span className="mr-2">PREFFERED STAND NO.:<span className="text-red-600">*</span></span>
                  <input type="text" name="stand-no" required />
                </label>
              </div>
              <div>
                <h3 className="font-bold my-4 text-2xl">
                  Exhibition regulations
                </h3>
                <p className="">
                  <strong>
                    WE regulations are designed to ensure that all stand
                    exhibits comply with current legislation.
                  </strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Water displayed and dispensed must have been bottled in
                    compliance with WE regulations. Bottlers who exhibit must
                    have current approved licences and permits.
                  </li>
                  <li>
                    Electrical, mechanical or hydraulic equipment must have the
                    appropriate and valid safety and conformity certificates.
                  </li>
                  <li>
                    Materials used with food products must comply with the
                    relevant European Directives for use in contact with food.
                  </li>
                  <li>
                    Water coolers and dispensers exhibited are required to have
                    been tested according to the WE sanitary protocols.
                  </li>
                  <li>
                    Certificates of Compliance to WE approved standards must be
                    available for inspection prior to the opening of the event.
                  </li>
                </ul>
              </div>
              <div className="my-12">
                <p className="">
                  Please refer any queries concerning the above requirements to
                  the exhibition organiser: 
                  <a href="mailto:office@ideamarketing.pl" className="ml-1">
                     office@ideamarketing.pl
                  </a>
                </p>
              </div>
              <div>
                <label>
                <input type="checkbox" name="accept_terms_and_conditions" value="yes" required/>
                <span className="ml-2">I hereby accept the <a href="/terms-and-conditions" className="text-pink" target="_blank" >Exhibition Terms and Conditions</a> <span className="text-red-600">*</span>. </span>
                </label>
              </div>
              <button type="submit" className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-4 block text-2xl">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

TradeFairTemplate.propTypes = {
  title: PropTypes.string,
  tradefair: PropTypes.object,
  fees: PropTypes.object,
};

const TradeFair = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TradeFairTemplate
        title={frontmatter.title}
        tradefair={frontmatter.tradefair}
        fees={frontmatter.fees}
      />
    </Layout>
  );
};

TradeFair.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TradeFair;

export const pageQuery = graphql`
  query TradeFairTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "trade-fair" } }) {
      frontmatter {
        title
        tradefair {
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 1024)
            }
          }
        }
        fees {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
