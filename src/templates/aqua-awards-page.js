import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const AquaAwardsTemplate = ({ title }) => {
  return (
    <div>
      <PageTitle title={title} />
    </div>
  );
};
const AquaAwards = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AquaAwardsTemplate title={frontmatter.title} />
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
    }
}
}`;
