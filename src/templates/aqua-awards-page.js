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
                    <div className="md:basis-1/2 ">
                    <StaticImage src="../img/aa-logo.png" placeholder="none"/>
                    </div>
                    <div className="md:basis-1/2 flex flex-col justify-center	">
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
                  <div className="border-t-2 border-bggray pt-8">
                    <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">Fantastic benefits waiting for winners</h3>
                    <p className="mb-8 md:text-center">The Aqua Awards is an excellent way to promote your brand to the event’s visitors and the wider audience online.
Winning presentations will be shown during the Aqua Awards ceremony at the gala dinner and statuette & certificate will be given to the
winners. Interview with the winners will be published on the Watercoolers Europe website and in the monthly newsletter.</p>
                    <div className="benefits-container">
                      <div className="benefits-item">
                        <StaticImage src="../img/icons/award.png" placeholder="none"/>
                        <p>Statuette</p>
                      </div>
                      <div className="benefits-item">
                        <StaticImage src="../img/icons/certificate.png" placeholder="none" />
                        <p>Certificate</p>
                      </div>
                      <div className="benefits-item">
                        <StaticImage src="../img/icons/presentation.png" placeholder="none"/>
                        <p>Presentation</p>
                      </div>
                      <div className="benefits-item">
                        <StaticImage src="../img/icons/interview.png"placeholder="none" />
                        <p>Interview</p>
                      </div>
                      <div className="benefits-item">
                        <StaticImage src="../img/icons/publications.png" placeholder="none"/>
                        <p>Publications</p>
                      </div>
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
      <section className="bg-bggray py-20">
        <div className="container">
          <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">If you believe you have a great product or the highest level of service don’t hesitate. Submit your application and a prestigious aqua award can be yours!</h3>
          <h4 className="font-bold  md:text-center">How to enter?</h4>
          <p  className="md:text-center mb-8" >Just complete the Aqua Awards entry and submit it online</p>
          <h4 className="font-bold  md:text-center">Criteria for judging</h4>
          <p className="md:text-center mb-8">The winners will be chosen by the Jury appointed by WE (75%) and National Associations (25%)</p>
          <h4 className="font-bold  md:text-center">There are 5 categories</h4>
          <p className="md:text-center mb-8">Any of which could gain your company the coveted WE Aqua Awards</p>
          <div className="category-container">
                <div className="category-item mb-4 md:mb-0 p-6 bg-white">
                  <StaticImage  className="mb-2" src="../img/icons/website.png" placeholder="none"/>
                  <h3 className="font-bold h-16 text-xl">Best website</h3>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Efective navigation</li>
                    <li>Relevant content</li>
                    <li>Performance and speed</li>
                    <li>Attractive and appealing design</li>
                    <li>Inclusion of WE/National Association logo</li>
                    <li>Promotion of the watercooler industry if appropriate</li>
                  </ul>
                </div>
                <div  className="category-item mb-4  md:mb-0 p-6 bg-white">
                  <StaticImage  className="mb-2" src="../img/icons/rocket.png" placeholder="none"/>
                  <h3 className="font-bold h-16 text-xl">Best product innovation</h3>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Innovative technology within the standards of the industry</li>
                    <li>Stands out from the croud</li>
                    <li>A recognised benefit to the user</li>
                  </ul>
                </div>
                <div  className="category-item mb-4  md:mb-0 p-6 bg-white">
                  <StaticImage  className="mb-2" src="../img/icons/recycle-sign.png" placeholder="none"/>
                  <h3 className="font-bold h-16 text-xl">Best environmental practice / green initiative</h3>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Immediate positive impact on target audience</li>
                    <li>Relevance to audience</li>
                    <li>Lasting impression on audience of key message</li>
                    <li>Promotion of the watercooler industr</li>
                    <li>Include of the WE/National Association logo</li>
                    <li>Attractive and appealing design</li>
                  </ul>
                </div>
                <div  className="category-item mb-4  md:mb-0 p-6 bg-white">
                  <StaticImage className="mb-2" src="../img/icons/drop.png" placeholder="none"/>
                  <h3 className="font-bold h-16 text-xl">Best promotion of health & hydration</h3>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Total commitment to the benefit of the environment</li>
                    <li>Immediate impact on target audience</li>
                    <li>Lasting impression on target audience to continue this initiative</li>
                    <li>Promotion of the watercooler industry</li>
                    <li>Attractive and appealing design</li>
                  </ul>
                </div>
                <div  className="category-item mb-4 md:mb-0 p-6 bg-white">
                  <StaticImage  className="mb-2" src="../img/icons/ads.png" placeholder="none"/>
                  <h3 className="font-bold h-16 text-xl">Best marketing campaign</h3>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Easily understood campaign message</li>
                    <li>Immediate positive impact on target audience - to inform/persuade/remind customers of campaign message</li>
                    <li>Lasting impression on target audience of this message</li>
                    <li>Promotion of the watercooler industry</li>
                    <li>Inclusion of the WE/National Association logo</li>
                    <li>Attractive and appealing design</li>
                  </ul>
                </div>
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
