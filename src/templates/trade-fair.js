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
                <p className="text-base text-center p-6 md:px-0">{tradefair.description}</p>
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
            <PageSubtitle title='Stand Fees' />
            

            <PageSubtitle title='Stand Application Form' />
        </div>
)}



TradeFairTemplate.propTypes = {
    title: PropTypes.string,
    tradefair: PropTypes.object
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
    markdownRemark(
      frontmatter: { templateKey: { eq: "trade-fair" } }
    ) {
      frontmatter {
        title
        tradefair{
            description
            image {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED width: 1024)
                }
              }
        }
      }
    }
}`