import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const VenueAccommodationTemplate = ({ title, venue, gallery }) => {
  console.log(gallery);
  return (
    <div>
      <PageTitle title={title} />
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
          <div>
            <h3 className="font-bold my-4 text-2xl">{venue.title}</h3>
            <p className="text-base ">{venue.description}</p>
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
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
      {gallery.map(item=>
        <PreviewCompatibleImage
        imageInfo={{
          image: item.image,
        }}
      />)}
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
          description
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
