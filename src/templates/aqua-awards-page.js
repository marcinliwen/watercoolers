import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const AquaAwardsTemplate = ({ title, info }) => {
  return (
    <div>
      <PageTitle title={title} />
      <section>
          <div className="container">
              <div className="py-16 is-side">
              {info &&
                info.map((item) => (
                  <div key={item.title} className="cart md:flex mb-16 md:mb-20 ">
                    <div className="md:basis-1/2 px-8">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: item.image,
                          alt: item.title,
                        }}
                      />
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	px-8">
                      <h3 className="font-bold mb-8 mt-4 text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-base mb-8">{item.description}</p>
                    </div>
                  </div>
                ))}
                </div>
          </div>
      </section>
      <PageSubtitle title="Aqua Awards Application Form" />
      <section>
          <div className="container">
              <h2 className="my-20 text-3xl uppercase text-center">ONLINE APPLICATION FORM</h2>
          </div>
      </section>
    </div>
  );
};

AquaAwardsTemplate.propTypes = {
    title: PropTypes.string,
    info: PropTypes.object
}
const AquaAwards = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AquaAwardsTemplate 
        title={frontmatter.title} 
        info={frontmatter.info}
    />
    </Layout>
  );
};

AquaAwards.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AquaAwards;

export const pageQuery = graphql`
query AquaAwardsTemplate {
markdownRemark(
    frontmatter: { templateKey: { eq: "aqua-awards-page" } }
) {
    frontmatter {
        title
        info {
            title
            description
            image {
                childImageSharp {
                    gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 512)
                  }
            }
        }
    }
}
}`;
