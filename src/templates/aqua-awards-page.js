import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
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
              <div  className="cart md:flex mb-16 md:mb-20 ">
                    <div className="md:basis-1/2 px-8">
                    <StaticImage src="../img/aa-logo.png" />
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	px-8">
                      <h3 className="font-bold mb-8 mt-4 text-2xl">
                        History
                      </h3>
                      <p className="text-base mb-8">The Aqua Awards Ceremony held at the annual Watercoolers Europe
Conference & Fair is a tradition extending back for over 20 years and
recognises excellence in marketing, innovation and public relations, as well as
products and programmes which enhance sustainability and protect
the environment. To date, well over 400 awards have been presented.</p>
                    </div>
                  </div>
                  <div  className="cart md:flex mb-16 md:mb-20 ">
                    <div className="md:basis-1/2 px-8">
                    <StaticImage src="../img/aa-logo.png" />
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	px-8">
                      <h3 className="font-bold mb-8 mt-4 text-2xl">
                      Benefits for Applicants
                      </h3>
                      <p className="text-base mb-4">The Aqua Awards is an excellent way to promote your brand to the event’s visitors and the wider audience online.</p>
                      <p className="mb-8">Check out the fantastic package for winners and applicants.</p>
                    </div>
                  </div>
                  <div  className="cart md:flex mb-16 md:mb-20 ">
                    <div className="md:basis-1/2 px-8">
                    <StaticImage src="../img/aa-logo.png" />
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	px-8">
                      <h3 className="font-bold mb-8 mt-4 text-2xl">
                      Categories
                      </h3>
                      <p className="text-base mb-4 font-bold">There are 5 award categories – any of which could gain your compnay the coveted WE Aqua Awards:</p>
                      <ul className="list-disc pl-6 text-sm">
                      <li>Best Website</li>
                      <li>Best Product Innovation</li>
                      <li>Best Promotion of Health & Hydration</li>
                      <li>Best Environmental Practice/Green Initiative</li>
                      <li>Best Marketing Campaign</li>
                      </ul>
                      <p className="mb-8">Check out the fantastic package for winners and applicants.</p>
                    </div>
                  </div>
              {/* {info &&
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
                ))} */}
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
