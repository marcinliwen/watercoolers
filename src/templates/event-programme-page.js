import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";

export const EventProgrammeTemplate = ({
  title,
  event,
  eventList,
  conference,
  workshops
}) => {
  return (
    <div>
      <PageTitle title={title} />
      <section>
        <div className="container">
          <div className="md:flex my-16 md:my-20">
          <div className="md:basis-1/2 px-8">
          <PreviewCompatibleImage
            imageInfo={{
              image: event.image_conf,
              alt: title,
            }}
          />
          </div>
          <div className="md:basis-1/2 px-8">
          <PreviewCompatibleImage
            imageInfo={{
              image: event.image_work,
              alt: title,
            }}
          />
          </div>
          </div>
         
        </div>
      </section>
      <section>
        <div className="container">
          <div className="plan-content">
            {eventList &&
              eventList.map((item) => (
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
      <PageSubtitle title="Presentations & Speakers" />
      <section>
        <div className="container">
          <div className="py-16">
            <h2 className="text-pink uppercase text-3xl mb-8">Conference speakers</h2>
          {conference &&
            conference.map((item) => (
              <div key={item.title} className="speacer-person md:flex mb-16">
                <div className="md:basis-48 flex  md:block mb-8 md:mb-0">
                  {item.image && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: item.image,
                        alt: item.name,
                      }}
                    />
                  )}
                  <div className="pl-4 md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">{item.name}</h4>
                  <span className="text-sm text-pink leading-4 block">{item.role}</span>
                  </div>
                </div>
                <div className="md:flex-1 md:pl-4">
                  <p className="mb-8">{item.resume}</p>
                  <p className="text-blue font-bold md:flex"><span className="mr-2">Presentation:</span> <span className="uppercase">{item.title}</span></p>
                  <p className="text-blue">{item.description}</p>
                </div>
              </div>
            ))}
            <h2 className="text-pink uppercase text-3xl mb-8">Workshops speakers</h2>
            {workshops &&
            workshops.map((item) => (
              <div  key={item.title} className="speacer-person md:flex mb-16">
                <div className="md:basis-48 flex  md:block mb-8 md:mb-0">
                  {item.image && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: item.image,
                        alt: item.name,
                      }}
                    />
                  )}
                  <div className="pl-4 md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">{item.name}</h4>
                  <span className="text-sm text-pink leading-4 block">{item.role}</span>
                  </div>
                </div>
                <div className="md:flex-1 md:pl-4">
                  <p className="mb-8">{item.resume}</p>
                  <p className="text-blue font-bold md:flex"><span className="mr-2">Presentation:</span> <span className="uppercase">{item.title}</span></p>
                  <p className="text-blue">{item.description}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

EventProgrammeTemplate.propTypes = {
  title: PropTypes.string,
  event: PropTypes.object,
  eventList: PropTypes.array,
  conference: PropTypes.array,
  workshops: PropTypes.array
};

const EventProgramme = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EventProgrammeTemplate
        title={frontmatter.title}
        event={frontmatter.event}
        eventList={frontmatter.eventList}
        conference={frontmatter.conference}
        workshops={frontmatter.workshops}
      />
    </Layout>
  );
};

EventProgramme.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventProgramme;

export const pageQuery = graphql`
  query EventProgrammeTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "event-programme-page" } }
    ) {
      frontmatter {
        title
        event {
          image_conf {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 1024)
            }
          }
          image_work {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 1024)
            }
          }
        }
        eventList {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          title
          description
        }
        conference {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 200, height: 200)
            }
          }
          name
          role
          resume
          title
          description
        }
        workshops {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 200, height: 200)
            }
          }
          name
          role
          resume
          title
          description
        }
      }
    }
  }
`;
