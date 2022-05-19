import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const VenueAccommodationTemplate = ({ title, venue, gallery }) => {

  return (
    <div>
      <PageTitle title={title} />
      <section id="venue-info">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
          <div>
            <h3 className="font-bold mb-6 text-2xl">{venue.title}</h3>
            <p className="font-bold mb-2">
              WE 2022 Conference and Trade Show will take place in Sheraton
              Lisboa Hotel & Spa. The location has many benefits:
            </p>
            <ul className="list-disc text-sm pl-6 mb-4">
              <li>
                central city location in the gorgeous ancient capital of
                Portugal
              </li>
              <li>
                unbeatable access to the city's finest dining, cultural and
                historic attractions
              </li>
              <li>
                comfortable, modern hotel accommodation, with luxurious bedding,
                marble bathrooms
              </li>
              <li>
                in-house dining options, including Portuguese-style tapas and
                local dishes
              </li>
              <li>rooftop bar with a beautiful view of Lisbon city</li>
              <li>elegant outdoor pool</li>
              <li>day spa</li>
              <li>conference center</li>
            </ul>
            
            <p className="font-bold mb-2">
              Price of single room with breakfast: 185 EUR (VAT included)
            </p>
            <p className="font-bold mb-4">
              Price of double room with breakfast: 205 EUR (VAT included)
            </p>

            <p>
              <strong>Sheraton Lisbona Hotel & Spa</strong>
              <br /> Rua Latino Coelho, 1 <br />
              Lisbon, 1069 Portugal <br />
              t: +351 21 312 0000
            </p>
            <a
              className="my-2 block font-bold hover:text-blue ease-in-out duration-300"
              href="https://www.marriott.com/hotels/travel/lissi-sheraton-lisboa-hotel-and-spa/"
              target="_blank"
            >
              Hotel information
            </a>
          </div>
          <PreviewCompatibleImage
            imageInfo={{
              image: venue.image,
              alt: venue.title,
            }}
          />
        </div>
      </section>
      <PageSubtitle title="Booking online" />
      <section><div className="container">
        <a className="py-3 px-4 bg-green text-white block hover:bg-greenhover ease-in-out duration-300 text-center my-12 w-32 mx-auto" href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1652979882546&key=GRP&app=resvlink" target="_blank">Book now</a>
        </div></section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
        {gallery.map((item) => 
          <PreviewCompatibleImage
            imageInfo={{
              image: item.image,
            }}
          />
        )}
      </div>
    </div>
  );
};

VenueAccommodationTemplate.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.object,
  gallery: PropTypes.array,
};

const VenueAccommodation = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <VenueAccommodationTemplate
        title={frontmatter.title}
        venue={frontmatter.venue}
        gallery={frontmatter.gallery}
      />
    </Layout>
  );
};

VenueAccommodation.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VenueAccommodation;

export const pageQuery = graphql`
  query VenueAccommodationTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "venue-and-accommodation" } }
    ) {
      frontmatter {
        title
        venue {
          title
          body
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 512)
            }
          }
        }
        gallery {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 512)
            }
          }
        }
      }
    }
  }
`;
