import { useEffect } from "react";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Link from "next/link";
import NextSeo from "../layout/next-seo";

function second_knowmore() {
  return (
    <>
      <NextSeo
        title="Oure Parent Ecosystme- OMRA Solutions"
        description={``}
        keywords={``}
        canonical="https://www.omrasolutions.com/our-partner-ecosystem"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ecosystemsch,
          }}
        ></script>
      </NextSeo>
      <Header2 />

      <section>
        <div className="image-section1">
          <div className="container">
            <h1 className="banner-title">Our partner ecosystem</h1>
          </div>
        </div>
      </section>

      <section className="paragraph-section">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div>
                <h3>Our partner ecosystem</h3>
                <p>
                  A platform to manage all aspects of your digital and
                  traditional partnerships. We partner with over 34+ projects so
                  that we can dynamically bring you best-of-breed technology, to
                  not only help you deliver today&apos;s business outcomes, but
                  also be ready for tomorrow. In today&apos;s digital world,
                  collaboration is the key to achieving long term success. We
                  partner with our clients and an ecosystem of partners to
                  create a better future for all using advanced technology. We
                  enable our customers to harness the power of the Enterprise
                  Technology Stack at scale and transform their businesses
                  through joint business objectives, investments, innovation,
                  and co development with our partners. Whether it is to develop
                  new products or to amplify existing services, our partnerships
                  drive innovation and collaboration with OMRA Solutions.
                </p>

                <p>
                  We work with some of the most renowned industry leaders. We
                  support the leading cloud service providers with our Cloud
                  Connect product, we bring networks together with remote
                  peering for our internet exchange partners, and we tap into
                  new companies through our data center and carrier
                  partnerships. Thanks to these collaborations we can deliver
                  our state of the art solutions to put your business ahead of
                  the curve.
                </p>
                <h3>Marketing partners</h3>

                <p>
                  These are brands or individuals who help you to promote your
                  product and expand your reach through partner marketing,
                  whether directly or indirectly. Alongside traditional
                  marketing partners like affiliates, they might include: Vendor
                  management consultants. A vendor management consultant helps
                  businesses to decide on their technology strategy, select
                  their technology vendors and implement those technologies. We
                  are associated with many organizations:
                </p>

                <p className="paragraph-box">
                  JUSTDIAL &#45; They can be invaluable advocates for B2B
                  technology companies. Comparison or listing site. These
                  industry specific partners list, sometimes review, and
                  technologies. They often have a great deal of influence over
                  your end customer. OMRA Solutions are working with Just dial
                  to create a digital catalog of their merchants, and SMEs to
                  promote their products as digital catalogs. We are developing
                  products&#47;services for merchants to make the possibility of
                  more opportunities for their online business. We are having
                  rich experience with Interactive content, digital cataloging,
                  and communication tools.
                </p>
                <h3>WE COLLABORATED ON &#45; 01 OCTOBER 2020.</h3>

                <p className="paragraph-box">
                  DU TELECOM &#45; OMRA Solutions made alliances with Du
                  Telecom. Du Telecom is an Emirates Integrated
                  Telecommunications Company. We are working with them as a
                  partner for Voice Blend Process. Our expert team handles the
                  inbound &amp; outbound calls to serve around 9 million
                  individual customers due to its mobile, Wifi, Broadband, and
                  post-paid mobile revenue to counter Revenue.
                </p>

                <h3>WE COLLABORATED ON &#45; 01 SEPTEMBER 2021</h3>

                <p className="paragraph-box">
                  STARSTELL &#45; OMRA Solution built a partnership with Stars
                  tell Online Prediction by the best astrologer 24*7 for Voice
                  Blend Process. Our team is handling their customers to enrich
                  people&apos;s lives with appropriate guidance to ensure the
                  best Astrological Counseling. We are their leading partners to
                  make the best support &amp; handle inbound &amp; outbound
                  calls to generate their revenue.
                </p>

                <h3>WE COLLABORATED ON &#45; 01 JUNE 2021</h3>

                <p className="paragraph-box">
                  JEENA SEEKHO &#45; OMRA Solutions have collaborated with Jeena
                  Seekho as their Voice Blend process Partner. We are handling
                  inbound &amp; outbound calls for them. Jeena Seekho is the
                  name that suggests a trademark of purity. The minds behind
                  Jeena Seekho have endeavored to create ayurvedic products that
                  are untouched from malignity; with this pride our team is
                  handling voice blend services for them.
                </p>
              </div>
              <h3>WE COLLABORATED ON &#45; 01 FEBRUARY 2021</h3>
              <p className="paragraph-box">
                We (OMRA SOLUTIONS) are a leading organization in the space of
                technology development, and fulfillment of the Sales processes
                in the B2B and B2C segments. We are helping brands in the
                automation process, Hiring developers, and helping renowned
                brands to achieve their goals in terms of sales business
                operations. We are working in business process outsourcing
                services, Sales Processes, and Automation technology. We are a
                process oriented organization with certification of ISO
                9001:2015 (Quality Management Systems). We Localize your voice
                based communications with our extensive team members and
                technologies. We&apos;ll help you to introduce your product in
                the best way. We are hiring a dedicated developers &amp;
                programmers team, who are passionate about taking your business
                ideas to the next level and exceeding the quality benchmark. We
                are helping corporate businesses by always giving priority to
                clients&apos; requirements. We are ISO 9001:2015 Certified. We
                are serving renowned brands in Business Process Outsourcing, and
                Voice Blend processes, Increase the revenue of businesses to
                boost Sales. From Hiring developers to Sales &amp; Business
                Process Outsourcing, we specialize in all aspects of IT
                Development and Resource Management. With more than 34 completed
                projects, we are helping the corporate to hit its sales target
                with our dedicated team.
              </p>
            </div>

            <div className="col-1 "></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default second_knowmore;

const ecosystemsch = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Our partner ecosystem - Omra Solutions",
  "image":"https://omrasolutions.com/images/newlogo.png",
"description": "A platform to manage all aspects of your digital and traditional partnerships. We partner with over 34+ projects so that we can dynamically bring you best-of-breed technology, to not only help you deliver today's business outcomes, but also be ready for tomorrow.",
  "@id": "https://omrasolutions.com/",
 "url": "https://omrasolutions.com/our-partner-ecosystem", 
"telephone": " +91 79825 18911",
  "priceRange": "Ask",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office- 103 and 105, D-20, Sector 63 Rd",
    "addressLocality": "Noida",
    "postalCode": "201305",
    "addressCountry": "+91",
    "addressRegion": "91"
  },
"openingHoursSpecification": 
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:30"
  },
  "sameAs": [
    "https://www.facebook.com/omrasolution",
    "https://twitter.com/SolutionsOmra",
    "https://www.instagram.com/omra.digitalsolution/",
"https://www.linkedin.com/company/omra-solutions",
"https://www.youtube.com/channel/UCHAvY_F3UWz2R43gkYS3lTg"
  ] 

}`;
