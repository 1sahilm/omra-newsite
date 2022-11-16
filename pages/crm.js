import React from "react";
import Image from "next/image";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Styles from "../scss/demo/crm.module.scss";
import NextSeo from "../layout/next-seo";
import Script from "next/script";
const Crm = () => {
  return (
    <>
      <NextSeo
        title="CRM software - OMRA Solutions"
        canonical="https://omrasolutions.com/crm"
        description="Our CRM software customer relationship management system here you enables to manage you business smoothly and you get better manage customer interactions, provide support, and maintain  relationships with your customer through CRM software."
        keywords="CRM software, crm software services, crm software, Customer Relationship Management system, Lead management System, CRM analytics"
      >
        <script type="application/ld+json">
          {" "}
          {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CRM software - OMRA Solutions",
  "image":"https://omrasolutions.com/images/newlogo.png",
"description": "Our CRM software customer relationship management system here you enables to manage you business smoothly and you get better manage customer interactions, provide support, and maintain relationships with your customer through CRM software.",
  "@id": "https://omrasolutions.com/",
 "url": "https://omrasolutions.com/crm", 
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
}
`}
        </script>
      </NextSeo>
      <Header2 />
      <div className="mainpage">
        <div className={Styles.bannerImage}>
          <Image
            src="/images/background/baner3.png"
            width={1700}
            height={815}
            priority
          />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}>
              <div className="col-md-12">
                <div className={Styles.bannertext}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainpage">
        <div className={Styles.bannerImage1}>
          <Image
            src="/images/background/midbanner3.png"
            width={1700}
            height={850}
            priority
          />
          <div className={Styles.feature_Box}>
            <div className="col-md-12">
              <h2 className={Styles.feature_Box3}>
                AI Driven CRM for your Sales Forces
              </h2>
              <p className={Styles.center_align}>
                Customer support software for any business&#44; any size
              </p>
              <h1>
                Building better workplace&#44;
                <br />
                one team at a time
              </h1>
              <p className={Styles.center_align3}>
                Track&#44; Automate &amp; Maximize Your Team&apos;s Productivity
                with our CRM Software
              </p>
              <h2>
                We believe in building industry &#45;first solutions that best
                &#45;fit your process
              </h2>
              <div className={Styles.top_Para}>
                <div>
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp; More Customizable
                  <br />
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp;Smart user experience
                  <br />
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp;Fast Implementation
                  <br />
                </div>
                <div>
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp;Hassle &#45;free CRM
                  <br />
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp;Smart solution for SMEs
                  <br />
                  <img src="/image/arrow3.svg" alt="icon" />
                  &nbsp;Deploy with ease
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="valuecontent1" style={{ marginLeft: "-178p" }}>
                <h1 className={Styles.valuecontent1}>
                  Stand out your Customer Service with a CRM that Fits Your
                  Business
                </h1>

                <p style={{ padding: "0" }}>
                  Our CRM software system helps you to automate the sales
                  process of assigning the lead to your team members based on
                  various benchmarks and enriching the leads by providing an
                  effective solution to all the leads with regular associated
                  files&#44; updates&#44; notes&#44; etc. You can collaborate
                  &amp; work with your whole team in closure the deal
                  effectively. The CRM stands to Manage Leads &amp; Deals&#44;
                  Time Tracking&#44; Grow and Automate&#44; Dashboard and
                  Report&#44; Privacy and Security&#44; Customize your CRM and
                  you can manage your contacts through one solution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/image/pp.jpg" alt="img" className="hireimages1" />
              <br /> <br />
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.mydiv8}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>CRM Features</h3>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn1.png" alt="img" />
              </div>
              <h2>Sales Force Automation</h2>
              <p>
                Streamline &amp; automate the sales activities such as managing
                leads&#44; sales forecasting&#44; and so on by leveraging our
                CRM sales force automation.
              </p>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn4.png" alt="img" />
              </div>
              <h2>Lead Management Software</h2>
              <p>
                Our customer relationship management software enables you to
                build automated workflows at every stage of the lead management
                conversions.
              </p>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn6.png" alt="img" />
              </div>
              <h2>Marketing Automation Tools</h2>
              <p>
                Elevate your brand image with our CRM automation and work on
                multiple marketing activities from lead capturing to improve
                sales conversions.
              </p>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn2.png" alt="img" />
              </div>
              <h2>Sales CRM Integrations</h2>
              <p>
                Discover new options to improve your business with our CRM by
                bringing all the valuable customer information from various
                mediums directly.
              </p>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn3.png" alt="img" />
              </div>
              <h2>Sales CRM Software</h2>
              <p>
                Track your leads from contacting to convert by getting practical
                sales performance reports and the CRM boost your sales
                performance efficiency.
              </p>
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.box551} box1 `}>
                <img src="/image/icn5.png" alt="img" />
              </div>
              <h2>Synchronize with CRM</h2>
              <p>
                Our CRM software offers all encompassing information regarding
                your sales track management&#44; by using it fullest with
                synchronization options.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Crm;
