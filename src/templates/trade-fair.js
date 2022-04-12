import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const TradeFairTemplate = ({ title, tradefair }) => {
  return (
    <div>
      <PageTitle title={title} />
      <div class="container">
        <p className="text-base text-center p-6 md:px-0">
          {tradefair.description}
        </p>
        <div className="p-8 md:px-0">
          <h3 className="text-blue py-6  text-2xl">Floor Plan</h3>
          <PreviewCompatibleImage
            imageInfo={{
              image: tradefair.image,
              alt: tradefair.title,
            }}
          />
        </div>
      </div>
      <PageSubtitle title="Stand Fees" />

      <PageSubtitle title="Stand Application Form" />
      <section>
        <div class="container">
          <div class="">
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
            <p>
              Note: No reservation will be accepted WITHOUT the pre-payment.
            </p>
            <p className="pt-8">
              Exhibition stands will be allocated on a ‘first-come first-served’
              basis subject to space availability. Full payment is due by
              <strong>31 January 2022</strong>. Cancellation after that date
              will entail 100% of the stand price plus VAT being due and
              payable.
            </p>
          </div>
          <div id="registration-form" className="my-8">
            <h3 className="font-bold my-4 text-2xl text-center">
              COMPANY DETAIL
            </h3>
            <form>
              <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="flex flex-col">
                Company name <input type="text" name="company_name" required />
              </label>
              <label className="flex flex-col">
                VAT No <input type="text" name="vat" required />
              </label>
              <label className="flex flex-col">
                Contact person{" "}
                <input type="text" name="contact_person" required />
              </label>
              <label className="flex flex-col">
                Street address <input type="text" name="address" required />
              </label>
              <label className="flex flex-col">
                Post Code <input type="text" name="post_code" required />
              </label>
              <label className="flex flex-col">
                City <input type="text" name="city" required />
              </label>
              <label className="flex flex-col">
                Region/State <input type="text" name="region_state" required />{" "}
              </label>
              <label className="flex flex-col">
                Country <input type="text" name="countrey" required />
              </label>
              <label className="flex flex-col">
                Tel. <input type="tel" name="tel" required />
              </label>
              <label className="flex flex-col">
                Fax <input type="tel" name="fax" />
              </label>
              <label className="flex flex-col">
                E-mail (Direct) <input type="email" name="email" required />{" "}
              </label>
              <label className="flex flex-col">
                Website <input type="text" name="website" required />
              </label>
              <label>
                AVAILABLE EXHIBITION STANDS*:{" "}
                <select name="standsize">
                  <option value="7,5m2 table top">7,5m2 table top</option>

                  <option value="15m2 table top">15m2 table top</option>

                  <option value="22,5m2 table top">22,5m2 table top</option>
                </select>
              </label>
              </div>
             
          
            <div>
              <h3 className="font-bold my-4 text-2xl">PRICE INCLUDES:</h3>
              <ul className="list-disc pl-6">
                <li>
                  One night accommodation (single room) on 21 April 2022 at the
                  Sheraton Lisboa Hotel & Spa
                </li>
                <li>Listing in the Fair Catalogue</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold my-4 text-2xl">PAYMENT DEADLINES:</h3>
              <p>
                Deposit payment within 14 days of stand reservation/application
                form Balance payment by <strong>31 January 2022</strong>
              </p>
            </div>
            <div>
              <h3 className="font-bold my-4 text-2xl">
                EXHIBITION REGULATIONS
              </h3>
              <p>
                <strong>
                  WE regulations are designed to ensure that all stand exhibits
                  comply with current legislation.
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Water displayed and dispensed must have been bottled in
                  compliance with WE regulations. Bottlers who exhibit must have
                  current approved licences and permits.
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
            <div>
              <p>Please refer any queries concerning the above requirements to the exhibition organiser: <a href="mailto:office@ideamarketing.pl">office@ideamarketing.pl</a></p>
            </div>
            <button className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-4 block text-2xl">Submit</button>
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
};

const TradeFair = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TradeFairTemplate
        title={frontmatter.title}
        tradefair={frontmatter.tradefair}
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
      }
    }
  }
`;
