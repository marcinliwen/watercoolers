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
            <div className="cart md:flex mb-16 md:mb-20 ">
              <div className="md:basis-1/2 ">
                <StaticImage src="../img/aa-logo.png" placeholder="none" />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-8 mt-4 text-2xl">History</h3>
                <p className="text-base mb-8">
                  The Aqua Awards Ceremony held at the annual Watercoolers
                  Europe Conference & Fair is a tradition extending back for
                  over 20 years and recognises excellence in marketing,
                  innovation and public relations, as well as products and
                  programmes which enhance sustainability and protect the
                  environment. To date, well over 400 awards have been
                  presented.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-bggray pt-8">
              <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">
                Fantastic benefits waiting for winners
              </h3>
              <p className="mb-8 md:text-center">
                The Aqua Awards is an excellent way to promote your brand to the
                event’s visitors and the wider audience online. Winning
                presentations will be shown during the Aqua Awards ceremony at
                the gala dinner and statuette & certificate will be given to the
                winners. Interview with the winners will be published on the
                Watercoolers Europe website and in the monthly newsletter.
              </p>
              <div className="benefits-container">
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/award.png"
                    placeholder="none"
                  />
                  <p>Statuette</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/certificate.png"
                    placeholder="none"
                  />
                  <p>Certificate</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/presentation.png"
                    placeholder="none"
                  />
                  <p>Presentation</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/interview.png"
                    placeholder="none"
                  />
                  <p>Interview</p>
                </div>
                <div className="benefits-item">
                  <StaticImage
                    src="../img/icons/publications.png"
                    placeholder="none"
                  />
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
          <h3 className="font-bold mb-8 mt-4 text-2xl md:text-center">
            If you believe you have a great product or the highest level of
            service don’t hesitate. Submit your application and a prestigious
            aqua award can be yours!
          </h3>
          <h4 className="font-bold  md:text-center">How to enter?</h4>
          <p className="md:text-center mb-8">
            Just complete the Aqua Awards entry and submit it online.
          </p>
          <h4 className="font-bold  md:text-center">There are 5 categories</h4>
          <p className="md:text-center">
            Any of which could gain your company the coveted WE Aqua Awards.
          </p>
          <p className="md:text-center mb-8">
            The winners will be chosen by the Jury appointed by WE (75%) and
            National Associations (25%).
          </p>
          <h4 className="font-bold text-center uppercase text-2xl mb-4">
            Criteria for judging
          </h4>
          <div className="category-container">
            <div className="category-item mb-4 md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/website.png"
                placeholder="none"
              />
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
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/rocket.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best product innovation
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>
                  Innovative technology within the standards of the industry
                </li>
                <li>Stands out from the croud</li>
                <li>A recognised benefit to the user</li>
              </ul>
            </div>
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/recycle-sign.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best environmental practice / green initiative
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Immediate positive impact on target audience</li>
                <li>Relevance to audience</li>
                <li>Lasting impression on audience of key message</li>
                <li>Promotion of the watercooler industr</li>
                <li>Include of the WE/National Association logo</li>
                <li>Attractive and appealing design</li>
              </ul>
            </div>
            <div className="category-item mb-4  md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/drop.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best promotion of health & hydration
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Total commitment to the benefit of the environment</li>
                <li>Immediate impact on target audience</li>
                <li>
                  Lasting impression on target audience to continue this
                  initiative
                </li>
                <li>Promotion of the watercooler industry</li>
                <li>Attractive and appealing design</li>
              </ul>
            </div>
            <div className="category-item mb-4 md:mb-0 p-6 bg-white">
              <StaticImage
                className="mb-2"
                src="../img/icons/ads.png"
                placeholder="none"
              />
              <h3 className="font-bold h-16 text-xl">
                Best marketing campaign
              </h3>
              <ul className="list-disc pl-6 text-sm">
                <li>Easily understood campaign message</li>
                <li>
                  Immediate positive impact on target audience - to
                  inform/persuade/remind customers of campaign message
                </li>
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
        </div>
      </section>
      <section>
        <div className="container">
          <div id="registration-form" className="my-8">
            <form
              name="aqua_awards_form"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="aqua_awards_form"
              />
              <h3 className="font-bold mt-12 mb-4 text-2xl">
                COMPANY DETAILS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col md:col-span-2">
                  <span>
                    Company name <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="company_name" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    VAT No{" "}
                    <span className="text-red-600">
                      * (mandatory only for EU countries){" "}
                    </span>
                  </span>
                  <input type="text" name="vat" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Contact person <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="contact_person" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Street address <span className="text-red-600">*</span>{" "}
                  </span>
                  <input type="text" name="address" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Post Code <span className="text-red-600">*</span>{" "}
                  </span>
                  <input type="text" name="post_code" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    City <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="text" name="city" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Region/State <span className="text-red-600">*</span>
                  </span>
                  <input type="text" name="region_state" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Country <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="text" name="countrey" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    Tel. <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="tel" name="tel" required />
                </label>
                <label className="flex flex-col">
                  <span>
                    E-mail (Direct) <span className="text-red-600">*</span>
                  </span>{" "}
                  <input type="email" name="email" required />
                </label>
                <label className="flex flex-col">
                  Website <input type="text" name="website" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mt-12 mb-4 md:min-h-[128px] lg:min-h-[100px] text-2xl">
                  PLEASE INDICATE YOUR COMPANY’S CATEGORY AND TO WHICH
                  ASSOCIATION YOU BELONG
                </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <label>
                <input type="checkbox" name="bottler" />
                  <span className="ml-2">BOTTLER</span>
                 
                </label>
                <label>
                <input type="checkbox" name="distributor" />
                  <span className="ml-2">DISTRIBUTOR</span>
                 
                </label>
                <label>
                <input
                    type="checkbox"
                    name="industry_supplier_manufacturer"
                  />
                  <span className="ml-2">INDUSTRY SUPPLIER/MANUFACTURER</span>
                 
                </label>
                <label>
                <input type="checkbox" name="direct_we_member" />
                  <span className="ml-2">DIRECT WE MEMBER</span>
                  
                </label>
                <label className="flex flex-col">
                  <span className="ml-2">
                    NATIONAL ASSOCIATION MEMBER, PLEASE SPECIFY:
                  </span>
                  <textarea name="national_association_member"></textarea>
                </label>
              </div>
              </div>
              <div>
                <h3 className="font-bold mt-12 mb-4 md:min-h-[128px] lg:min-h-[100px] text-2xl">
                PLEASE INDICATE BELOW THE CATEGORIES YOU ARE ENTERING
                </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <label>
                <input type="checkbox" name="best_website" />
                  <span className="ml-2">BEST WEBSITE</span>
                  
                </label>
                <label>
                <input type="checkbox" name="best_product_innovation" />
                  <span className="ml-2">BEST PRODUCT INNOVATION</span>
                  
                </label>
                <label>
                <input
                    type="checkbox"
                    name="best_promotion_health_hydration"
                  />
                  <span className="ml-2">BEST PROMOTION OF HEALTH & HYDRATION</span>
                  
                </label>
                <label>
                <input type="checkbox" name="best_environmental_practice" />
                  <span className="ml-2">BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE</span>
                
                </label>
                <label>
                <input type="checkbox" name="best_marketing_campaign" />
                  <span className="ml-2">BEST MARKETING CAMPAIGN</span>
                  
                </label>
              </div>
              </div>
              </div>
              <div className="my-12 bg-bluelight py-8 px-8 md:px-20">
                <h3 className="font-bold mt-12 mb-4 text-2xl">PLEASE INDICATE BELOW THE MATERIALS YOU ARE ATTACHING</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">PRESENTATION</div>
                  <label>
                    <input type="checkbox" name="powerpoint" />
                    <span className="ml-2">POWERPOINT</span>
                   </label>
                   <label>
                    <input type="checkbox" name="keynote" />
                    <span className="ml-2">KEYNOTE</span>
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">MOVIE AND SOUND FILES</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="mp4_file" />
                    <span className="ml-2">MP4 FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px] block">NUMBER OF MP4 FILES</span>
                    <input type="number" name="mp4_file_num" className="w-[58px] py-0 px-2" />
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="mp3_file_2"  />
                    <span className="ml-2">MP3 FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF MP3 FILES</span>
                    <input type="number" name="mp3_file_num_2" className="w-[58px] py-0 px-2" />
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">PHOTOS</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="jpg_file" />
                    <span className="ml-2">JPG FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF JPG FILES</span>
                    <input type="number" name="jpg_file_num" className="w-[58px] py-0 px-2"/>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="png_file" />
                    <span className="ml-2">PNG FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF PNG FILES</span>
                    <input type="number" name="mp3_file_num_" className="w-[58px] py-0 px-2" />
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="gif_file" />
                    <span className="ml-2">GIF FILE</span>
                   </label>
                   <label className="flex items-center">                   
                    <span className="mr-2 w-[160px]">NUMBER OF GIF FILES</span>
                    <input type="number" name="gif_file_num_" className="w-[58px] py-0 px-2"/>
                   </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
                  <div className="md:col-span-2">LOGO</div>
                  <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">COMPANY LOGO (.EPS OR .AI)</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="product_logo" />
                    <span className="ml-2">PRODUCT LOGO (.EPS OR .AI)</span>
                   </label>
                   
                </div>
                <div className="grid grid-cols-1 gap-2 mb-12">
                <div className="">STATEMENT</div>
                <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST WEBSITE</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST PRODUCT INNOVATION</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST PROMOTION OF HEALTH & HYDRATION</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST ENVIRONMENTAL PRACTICE/GREEN INITIATIVE</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST MARKETING CAMPAIGN</span>
                   </label>
                   <label className="flex items-center">
                    <input type="checkbox" name="company_logo" />
                    <span className="ml-2">OBJECTIVE STATEMENT FOR CATEGORY: BEST SERVICE PERSON</span>
                   </label>
                </div>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="accept_terms_and_conditions"
                    value="yes"
                    required
                  />
                  <span className="ml-2">
                    I hereby accept the{" "}
                    <a
                      href="/private-policy-we.pdf"
                      className="text-pink"
                      target="_blank"
                    >
                      Private Policy
                    </a>{" "}
                    <span className="text-red-600">*</span>.{" "}
                  </span>
                </label>
              </div>
             
              <button
                type="submit"
                className="bg-green hover:bg-greenhover py-4 px-8 text-white mx-auto my-4 block text-2xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

AquaAwardsTemplate.propTypes = {
  title: PropTypes.string,
  info: PropTypes.object,
};
const AquaAwards = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AquaAwardsTemplate title={frontmatter.title} info={frontmatter.info} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "aqua-awards-page" } }) {
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
  }
`;
