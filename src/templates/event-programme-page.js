import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PageSubtitle from "../components/PageSubtitle";
import Fee from "../components/Fee"
export const EventProgrammeTemplate = ({
  title,
  event,
  eventList,
  conference,
  workshops,
}) => {
  return (
    <div>
      <PageTitle title={title} />
      {/*  <section>
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
      </section> */}
      <section id="programm" className="bg-bggray py-12 mb-12">
        <div className="container">
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-blue mb-4">
              WEDNESDAY 19 OCTOBER 2022
            </h3>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>15:45</span>
              <span>Pick up from the Sheraton Lisboa Hotel</span>
              <span>16:00</span>
              <span>City Tour</span>
              <span>19:30</span>
              <span>Dinner at the restaurant</span>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-blue mb-4">
              THURSDAY 20 OCTOBER 2022
            </h3>
            <h4 className="text-pink uppercase mb-4 text-xl">CONFERENCE</h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span className="w-12">09:00</span>
              <span>Registration</span>
              <span>09:30</span>
              <span>Welcome</span>
              <span>09:35</span>
              <span>Chair’s address</span>
              <span>09:40</span>
              <span>
                <strong>
                  Latest European market and industry developments and outlook
                </strong>
                <br />
                <span>Richard Hall, Zenith Global</span>
              </span>
              <span>10:10</span>
              <span>
                <strong>Sustainable Future</strong>
                <br />
                <span>Bill Bruce, Bill Bruce Communications</span>
              </span>
              <span>10:30</span>
              <span>Hydration Break</span>
              <span>11:00</span>
              <span>
                <strong>
                  The 21st Century Watercooler Industry – Reality and Trends
                </strong>
                <br />
                <span>
                  Gonçalo Tremoceiro: General Manager for Culligan Portugal and
                  Iberian Director at Acquajet; <br />
                  Miguel Ribeiro Ferreira: Culligan Iberia M&A Advisor
                </span>
              </span>
              <span>11:30</span>
              <span>
                <strong>Adapt and thrive in the age of disruption</strong>
                <br /> <span>Keynote speaker: Terence Mauri </span>
              </span>
              <span>12:30</span>
              <span>Lunch</span>
            </div>

            <h4 className="text-pink uppercase mb-4 text-xl">
              WORKSHOPS – SESSION 1 - Business Strategy
            </h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>13:30</span>
              <span>
                <strong>
                  The addition of air purifiers to your marketing portfolio
                </strong>
              </span>
              <br />
              <span>Peter Hogervorst, Dolphin</span>
              <span>14:15</span>
              <span>
                <strong>
                  The home water dispenser market – lessons learnt from around
                  the world
                </strong>
              </span>
              <br />
              <span>Nick Swan, Love Water</span>
              <span>14:45</span>
              <span>Hydration break</span>
              <span>15:00</span>
              <span>
                <strong>
                  Introducing municipal hydration into your portfolio
                </strong>
                <br />
                <span>Mark Cross, MIW Water Cooler Experts</span>
              </span>
              <span>15:30</span>
              <span>FINISH</span>
            </div>
            <h4 className="text-pink uppercase mb-4 text-xl">
              WORKSHOPS – SESSION 2 -{" "}
              <span className="normal-case">Technical & Sustainability</span>
            </h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>13:30</span>
              <span>
                <strong>
                  How to use your system and data to prepare for the future
                </strong>
                <br />
                <span>Francisco dos Santos, Activewhere</span>
              </span>
              <span>14:15</span>
              <span>
                <strong>
                  Sanitisation & microbiology in the light of Covid-19
                </strong>
                <br />
                <span>Alex Mezquida, Eden Springs</span>
              </span>
              <span>14:45</span>
              <span>Hydration break</span>
              <span>15:00</span>
              <span>To be advised.</span>
              <span>15:30</span>
              <span>FINISH</span>
            </div>
            <h4 className="text-pink uppercase mb-4 text-xl">GALA DINNER</h4>
            <div className="grid grid-cols-[80px_1fr] gap-y-2 mb-8">
              <span>19.30</span>
              <span>Transfer from the Sheraton Lisboa Hotel</span>
              <span>20:00</span>
              <span>Gala Dinner</span>
              <span>23:30</span>
              <span>Transfer to the Sheraton Lisboa Hotel</span>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-blue mb-4">
              FRIDAY 21 OCTOBER 2022
            </h3>
            <div className="grid grid-cols-[120px_1fr] gap-y-2 mb-8">
              <span>10:00 – 16:00</span>
              <span>International Trade Show</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="plan-content">
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage src="../img/programm/lizbona.png" alt="Lisboa"/>
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  19 October - City Tour
                </h3>
                <p className="text-base mb-2 ">
                  Lisbon is just waiting to be explored by you!{" "}
                </p>
                <p className="mb-2">
                  Join our amazing city tour and discover one of the most
                  spectacular cities in the world and its breathtaking
                  monuments:{" "}
                </p>
                <ul className="list-disc pl-6 text-sm mb-2">
                  <li>Avenida da Liberdade</li>
                  <li>Baixa Pombalina</li>
                  <li>Belém area</li>
                  <li>Torre de Belém</li>
                  <li>Padrão dos Descobrimentos</li>
                  <li>Pastéis de Belém </li>
                  <li>Mosteiro dos Jerónimos</li>
                </ul>
                <p>
                  In the evening, together with the other tour participants, you
                  can enjoy a dinner in one of the finest local restaurant.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8 ">
              <div className="md:basis-1/2 ">
                <StaticImage src="../img/programm/conference.png" alt="Conference programm"/>
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  20 October- Conference
                </h3>
                <p className="text-base mb-2 ">
                  Take part in the high-quality conference programme that will
                  give you insights benefitting your everyday work.
                </p>
                <p className="mb-2">
                  Hear leading international experts present new research and
                  trends in an intensive programme of lectures.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage
                  src="../img/programm/workshops.png"
                  alt="workshops"
                  placeholder="none"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  20 October - Workshops
                </h3>
                <p className="text-base mb-2 ">
                  Workshops will help you grow and improve your business.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2">
                <StaticImage
                  src="../img/programm/sudlizboa.png"
                  alt="Sud Lisboa"
                  placeholder="none"
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  20 October - Aqua Awards & Gala Dinner
                </h3>
                <p className="text-base mb-2 ">
                  Don’t miss the highlight moment of the WE event.
                </p>
                <p className="text-base mb-2 ">
                  Cement relationships at Europe’s premier gala dinner. Bring
                  your partner to share in the excitement.
                </p>
                <p className="text-base mb-2 ">
                  The winners of the Aqua Awards competition will be announced
                  at the Gala Dinner.
                </p>
                <p className="text-base mb-2 ">
                  This year the ceremony will be held in the magnificent SUD
                  LISBOA - one of the most beautiful location in Lisbon.
                </p>
              </div>
            </div>
            <div className="cart md:flex mb-16 md:mb-20  md:gap-8">
              <div className="md:basis-1/2 ">
                <StaticImage src="../img/programm/trade-fair.png" placeholder="none" alt="Trade fair Programm"/>
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center	">
                <h3 className="font-bold mb-4 mt-4 text-2xl">
                  21 October - Trade Fair
                </h3>
                <p className="text-base mb-2 ">
                  After 3 years break caused by COVID-19 pandemic it is a great
                  opportunity to meet in person with your customers and business
                  partners, show your products and services to a targeted,
                  industry specific, Europe-wide audience.
                </p>
                <p className="text-base mb-2 ">
                  Strengthen your business relationship and reach out to new
                  partners and contact.
                </p>
              </div>
            </div>
            {/* {eventList &&
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
              ))} */}
          </div>
        </div>
      </section>
      <PageSubtitle title="Registration Fees" />
      <Fee />
      <PageSubtitle title="Presentations & Speakers" />
      <section>
        <div className="container">
          <div className="py-16">
            <h2 className="text-pink uppercase text-3xl mb-4">
              Conference speakers
            </h2>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48  mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Terence-Mauri.jpg" placeholder="none" alt="Terence Mauri"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Terence Mauri
                  </h4>
                  {/* <span className="text-sm text-pink leading-4 block">{item.role}</span> */}
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Keynote Speaker:</span>{" "}
                  <span className="uppercase">
                    ADAPT AND THRIVE IN THE AGE OF DISRUPTION
                  </span>
                </p>
                <p className="">
                  Terence is a future trends and disruption expert who
                  challenges leaders to innovate, adapt and thrive in the age of
                  disruption.{" "}
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48  mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Richard.png" placeholder="none" alt="Richard Hall"/>
                <div className=" md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Richard Hall
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Chairman Zenith Global
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>{" "}
                  <span className="uppercase">
                    LATEST EUROPEAN MARKET AND INDUSTRY DEVELOPMENTS AND OUTLOOK
                  </span>
                </p>
                <p className="text-blue mb-4">
                  Statistics and insights for bottled and mains-fed water
                  dispensers as well as integrated tap systems in East and West
                  Europe to give a full overview for future business planning.
                  Delegates will receive a copy of a special WE member summary
                  report at the conference.
                </p>
                <p className="mb-2">
                  Richard Hall is an acknowledged expert on the international
                  food and drinks sector, chairing and speaking at numerous
                  industry conferences. In 1991 he formed Zenith as a specialist
                  business consultancy for the food and drink industries. The
                  company now has more than 1000 clients in over 50 countries.
                  He also chairs FoodBev Media, which he founded in 2000. Its
                  team publishes three business journals, including
                  “Refreshment”, and manages the foodbev.com website.
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Bill-Bruce.png" placeholder="none" alt=" Bill Bruce"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Bill Bruce
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Senior Consultant Bill Bruce Communications
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>{" "}
                  <span className="uppercase">SUSTAINABLE FUTURE</span>
                </p>
                <p className="mb-4 text-blue">
                  Bill Bruce considers a ‘Sustainable future’ for the European
                  water cooler industry, looking at: the need for a circular
                  economy; the language we use when talking about ‘green’;
                  carbon footprints and carbon neutrality; the realities of the
                  environmental sustainability landscape; the effects of
                  European legislation consumer opinion; and what the future
                  holds…
                </p>
                <p className="mb-2">
                  Bill Bruce has a long history of working in the watercooler
                  sector, having been the editor of Europe’s first dedicated
                  sector magazine: H20 Europe (over 20 years ago), and more
                  recent sector publications such as The Point, Cooler
                  Innovation, Cooler Plus and Refreshment.
                </p>
                <p className="mb-2">
                  Bill left FoodBev in 2016 and now runs his own PR,
                  communications and marketing consultancy, specialising in
                  clients in the food and beverage, and food packaging
                  industries.
                </p>
                <p className="mb-2">
                  With 40 years’ experience, Bill Bruce is an all-rounder who
                  started his career as a graphic designer, before moving into
                  marketing, PR and journalism. For the past 25 years his main
                  focus has been the food and beverage industry with a
                  particular interest in packaging and environmental
                  sustainability.
                </p>
              </div>
            </div>
            <div className="speacer-person  mb-16">
              <div className="md:flex-1 ">
                <p className="text-blue font-bold mb-2 md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                    THE 21ST CENTURY WATERCOOLER INDUSTRY – REALITY AND TRENDS
                  </span>
                </p>
                <p className="text-blue">
                  How is the watercooler industry adapting to the technologies
                  of other industries and what are the trends? How are Acquajet
                  and Fonte Viva managing their businesses with the support of
                  technology?
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Goncalo-Tremoceiro.png" placeholder="none" alt="Gonçalo Tremoceiro"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Gonçalo Tremoceiro
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    General Manager for Culligan Portugal and Iberian Director
                    at Acquajet
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <u className="list-disc">
                  <li>
                    Executive Board Member | General Manager for Culligan
                    Portugal and Iberian Director at Acquajet
                  </li>
                  <li>Fonte Viva General Manager from 2010 to 2021.</li>
                  <li>
                    B2B Commercial Manager at Nespresso Portugal from 2008 to
                    2010
                  </li>
                  <li>
                    Sales & Marketing Manager at Grupo Sumol (Pepsi bottler)
                    from 2002 to 2008
                  </li>
                  <li>Brand Manager at L'Oréal Portugal from 1999 to 2002</li>
                </u>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Miguel-Ribeiro-Ferreira.png" placeholder="none" alt="Miguel Ribeiro Ferreira"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Miguel Ribeiro Ferreira
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Culligan Iberia M&A Advisor
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <u className="list-disc">
                  <li>Culligan Iberia M&A Advisor</li>
                  <li>
                    Pioneer in the Watercooler business in Portugal and Spain
                  </li>
                  <li>Founding partner of Bebágua (Portugal) in 1996</li>
                  <li>
                    Chairman of Acquajet (Spain) from 2000 to 2021 and Fonte
                    Viva (Portugal) from 2005 to 2021
                  </li>
                  <li>
                    Business Angel and Investor in various fields of activity,
                    namely in the areas of Real Estate development, Start-Ups of
                    various activities, industry;
                  </li>
                  <li>
                    Participates in various social responsibility projects.
                  </li>
                </u>
              </div>
            </div>

            {/* {conference &&
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
            ))} */}
            <h2 className="text-pink uppercase text-3xl mb-4">
              Workshops speakers
            </h2>
            <p className="text-blue font-bold mb-4 text-xl">
              SESSION 1 - Business Strategy
            </p>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/Peter-Hogervorst.png" placeholder="none" alt="Peter Hogervorst"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Peter Hogervorst
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, Dolphin Water
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                  Air cleaners; an addition to your water dispenser business
                  </span>
                </p>
                <p className="text-blue mb-2">Indoor air quality is affected by many factors and activities. The presence of several people in poorly ventilated indoor rooms quickly leads to 'stale air' Air purifiers offer a simple, effective and inexpensive solution to significantly improve indoor air quality. This will lead to more concentrated and fitter employees and fewer problems with respiratory problems such as asthma and allergies. The business model is comparable to the water cooler business model.  Air cleaners only need a power socket, can be sold or rented, and filter change.</p>
                <p className="mb-2">Peter Hogervorst has spent all his working life in bottling. Starting at Heineken in 1987 and moving to the 5 Gallon industry with Dolphin in 2000, he has experience in bottling beer, soft drinks and, of course, water. In 2007 he completed the acquisition of Dolphin Production in Mierlo, Netherlands. In 2012 he acquired Porla Brunn, Sweden. In 2015 the German branch was founded in a joint venture with family owned Teamblue resulting in Teamblue Dolphin with more than 100 years of experience in the watercooler industry, especially in bottling. In 2021 the former Kalimba spring in Lanaken, Belgium was acquired and Dolphin Bottling Belgium was founded.  Every year around 100 million litres of water are filled by the group for more than 50 distributors in 9 countries from the North Cape to the Alps. In 2020 Teamblue Dolphin started with the sale of Air Cleaners in Germany, the Netherlands and Belgium resulting in over 1500 installations.</p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                {/* <StaticImage src="../img/speakers/no-person.png" /> */}
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Nick Swan
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, Love Water
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold  mb-2 smd:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                    The Home Water Dispenser Market – Lessons learnt from around
                    the world
                  </span>
                </p>
                <ul className="list-disc mb-4 pl-6 text-blue">
                  <li>
                    Brief recap on Middle East, USA and UK experience in this
                    industry.
                  </li>
                  <li>Love Water and the UK Home market</li>
                  <li>The advantages of having a Home customer base</li>
                  <li>Choosing your ideal customer profile</li>
                  <li>Choosing your Product Range</li>
                  <li>Rent or Sell? – That is the question</li>
                  <li>Home Service Contracts</li>
                  <li>Minimising bad debts</li>
                  <li>Sanitising Home dispensers</li>
                  <li>Delivery Schedules and Service Levels</li>
                  <li>Customer communication</li>
                  <li>Marketing – What works and what doesn’t.</li>
                  <li>Efficiency Stats and Customer Turnover</li>
                  <li>Impact from the Pandemic</li>
                  <li>The future</li>
                </ul>
                <p className="mb-2">
                  Nick entered the water dispenser industry in 1985 when he
                  joined Ionics/Aquacool in a sales and marketing role to help
                  build a new business supplying homes and businesses in Bahrain
                  with water dispensers. This was followed by managing their
                  operation in Jeddah, Saudi Arabia, and eventually working in
                  the US running their Baltimore operation.
                </p>
                <p className="mb-2">
                  When Nick decided to head back to the UK, it was in the early
                  days of the industry there in 1990. He joined a small London
                  business called Aquaporte as Sales & Marketing Director. This
                  business was eventually sold, and in 1996 Nick started a
                  London watercooler business called Office Refreshments Ltd.
                  This was sold in 2004, and after a few years Nick re-entered
                  the industry starting Love Water.
                </p>
                <p className="mb-2">
                  Love Water was originally geared towards building a home
                  customer base but over time this has expanded into B2B, but
                  the home customers still retain over 25% of the business
                  income.
                </p>
                <p className="mb-2">
                  Nick will give you an insightful view of his experience in the
                  home water dispenser business in the Middle East, the USA and
                  in England. He will give his views on the dos and don’ts, and
                  why in today’s Hybrid workforce, there has never been a better
                  time to market to this sector.
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/MarkCross.png"  alt="Mark Cross"/> 
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Mark Cross
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Managing Director, MIW Water Cooler Experts
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">1 Million a Minute – Be part of the solution</span>
                </p>
                <p className="text-blue mb-4">We have long since known that single-use plastic bottles have had a huge impact on our environment and a major contributor to the 380 million metric tonnes of plastic produced annually.  But could there be a way to encourage reuse with a refill revolution?  Hydration Solution expert, Mark Cross, talks through some examples of ingenious bottle filling products and initiatives, showing that small changes businesses are making to reach their sustainability goals can have a huge impact.</p>
                <p className="mb-2">Mark is incredibly enthusiastic about the water dispenser industry.  He has over 20 years commercial experience in the UK water dispenser market, starting with Aquacool and Angel Springs, now with Waterlogic.    Having worked in field sales, key account management, inside sales, digital, CRM, PPC and SEO he now heads up Waterlogic UK sales and marketing and is Managing Director of MIW Water Cooler Experts.  </p>
              </div>
            </div>
            <p className="text-blue font-bold mb-4 text-xl">
              SESSION 1 - Business Strategy
            </p>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                <StaticImage src="../img/speakers/FranciscoDosSantos.png" placeholder="none" alt="Francisco dos Santos"/>
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Francisco dos Santos
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    IT – Activewhere
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                    How to use your IT system and data to prepare for the future
                  </span>
                </p>
              </div>
            </div>
            <div className="speacer-person md:flex mb-16">
              <div className="md:basis-48 mb-8 md:mb-0">
                {/* <StaticImage src="../img/speakers/no-person.png" /> */}
                <div className="md:pl-0 flex flex-col justify-end md:block">
                  <h4 className="font-bold text-pink leading-4 mt-2">
                    Alex Mezquida
                  </h4>
                  <span className="text-sm text-pink leading-4 block">
                    Group Quality Director <br />
                    Eden Springs
                  </span>
                </div>
              </div>
              <div className="md:flex-1 md:pl-4">
                <p className="text-blue font-bold md:flex">
                  <span className="mr-2">Presentation:</span>
                  <span className="uppercase">
                    Sanitisation & microbiology in the light of Covid-19
                  </span>
                </p>
              </div>
            </div>

            {/*  {workshops &&
              workshops.map((item) => (
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
                      <h4 className="font-bold text-pink leading-4 mt-2">
                        {item.name}
                      </h4>
                      <span className="text-sm text-pink leading-4 block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                  <div className="md:flex-1 md:pl-4">
                    <p className="mb-8">{item.resume}</p>
                    <p className="text-blue font-bold md:flex">
                      <span className="mr-2">Presentation:</span>
                      <span className="uppercase">{item.title}</span>
                    </p>
                    <p className="text-blue">{item.description}</p>
                  </div>
                </div>
              ))} */}
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
  workshops: PropTypes.array,
};

const EventProgramme = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location.pathname}>
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
              gatsbyImageData(
                quality: 100
                layout: CONSTRAINED
                width: 200
                height: 200
              )
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
              gatsbyImageData(
                quality: 100
                layout: CONSTRAINED
                width: 200
                height: 200
              )
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
