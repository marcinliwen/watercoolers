import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const RegistrationTemplate = ({ title }) => {
  return (
    <div>
      <PageTitle title={title} className="bg-green" />

      <section>
        <div className="container">
          <h2 className="my-20 text-3xl uppercase text-center">
            ONLINE registration + Credit Cards payment panel
          </h2>
        </div>
      </section>
    </div>
  );
};

RegistrationTemplate.propTypes = {
  title: PropTypes.string,
};

const Registration = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <RegistrationTemplate title={frontmatter.title} />
    </Layout>
  );
};

Registration.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Registration;

export const pageQuery = graphql`
  query RegistrationTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "registration-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
