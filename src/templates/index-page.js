import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import HomeBanner from "../components/HomeBanner";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  category,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  console.log(category)
  return (
    <div>
      <HomeBanner img={heroImage}/>
      <section className="">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:py-12 md:px-0">
         {category.map(item=>
            <div className="">
              <PreviewCompatibleImage
              imageInfo={{
                image: item.image,
                alt: item.title ,
              }} />
              <h3 className="font-bold my-4 text-2xl">{item.title}</h3>
              <div className="text-base mb-8">{item.description}</div>
              <Link to={item.link} className="py-3 px-4 bg-green hover:bg-greenhover text-white block w-max ml-auto ease-in-out duration-300" >Read more</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  category: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        category={frontmatter.category}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        category{
          title
          description
          link
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
