import React from "react";
import Footer from "../layout/footer";
import Header2 from "../layout/header-2";
import NextSeo from "../layout/next-seo";
import Styles from "../scss/demo/elaundry.module.scss";

function Elaundry() {
  return (
    <>
      <NextSeo
        title="Laundry Management Software - OMRA Solutions"
        canonical="https://www.omrasolutionss.com/elaundry"
        keywords="LaundryManagement Software,Laundry & Dry Cleaning Software,Dry Cleaning Software"
        description="We offer Laundry Management Software. Here you manage Single/Multi Stores smoothly with amazing features like  Home Pickup and Delivery facility                 Rider-POS Mobile, Application and Online Booking through Customer with this software on your device"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: elaundrysch,
          }}
        ></script>
      </NextSeo>
      <Header2 />
      <section className="mydiv009">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section className="mydivspi">
        <div className="container">
          <div className="row">
            <div className={Styles.feature_Box}>
              <div className="col-md-12">
                <h1>Features that accelerate the growth of Laundry Business</h1>
                <h2>
                  E &#45;Laundry Solution &#45;Easy to access Technology woth
                  complete Trackablity
                </h2>
                <div className={Styles.top_Para}>
                  <div>
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp; Store Managment <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp;Reporting &amp; Order Tracking Managment
                    <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp; Invoice and Tag Generation
                    <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp;Rider Mobile Applications-POS
                  </div>
                  <br />
                  <div>
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp; Plant &#47; Warehouse Managment <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp;Customer Mobile Application <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp; Whatsapp and Email Notification
                    <br />
                    <img src="/image/arrow3.svg" alt="icon" />
                    &nbsp; Complete Reporting Mangement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="valuecontent1" style={{ marginLeft: "-178p" }}>
                <h1 className={Styles.valuecontent1}>
                  Manage Single &#47; Multiple Stores and Franchise Model
                </h1>
                <p style={{ padding: "0" }}>
                  A perfect Solution for Laundry and Dry Cleaning Industry to
                  manage Single Store or any Size of Franchise Model. The
                  Complete accessibility in a Single click from anywhere anytime
                  to get proper Business Reporting. The Complete Order tracking
                  and connectivity of all Laundry and Dry Clean Models like
                  Brand Owner or Admin Access&#44; Super Admin for
                  Franchise&#44; Store Billing&#44; Connected Customer Mobile
                  App and Web Platform&#44; Rider Mobile App for Order Pickup
                  and Delivery&#44; Factory and Factory&#47;Warehouse
                  Management.
                </p>
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Customer Notification <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Integrated Customer Wallet for Advance Payments
              </div>
            </div>
            <div className="col-md-7">
              <img
                src="/image/elaundry3.svg"
                alt="img"
                className="hireimages1"
              />
              <br /> <br />
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.mydiv88}>
        <div className="container">
          <h1 className={Styles.center_box}>Single Store</h1>
          <p className={Styles.paddingSide}>
            A tradition of quality cleaning&#44; fast order with fast
            delivery&#44; automate your billings with tagging on garments&#44;
            separately &#33; Stay ahead from the problems with our complete
            business management solutions. Best laundry POS for your business.
          </p>
          <h4 className={Styles.titile_box}>
            E-Laundry increases 35&#37; revenue in your Laundry business &#33;
          </h4>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="" style={{ marginLeft: "-178p" }}>
                <h1 className={Styles.valuecontent1}>
                  Experience the new level of laundry Focus in business growth
                  &#33;
                </h1>
                <p style={{ padding: "0" }}>
                  Are you getting stuck in store management&#63; Are you getting
                  stuck in managing business&#63;
                </p>
                <p style={{ padding: "0" }}>
                  These things can takes your focus away from growing your
                  business. So&#44; let&apos;s take your business on autopilot
                  with complete solutions &amp; customer management.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/image/egirl.png" alt="img" className="hireimages1" />
              <br /> <br />
            </div>
          </div>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hirecontent1" style={{ marginLeft: "-178p" }}>
                <br />
                <img src="/image/pp.png" alt="img" className="hireimages1" />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className={Styles.valuecontent1}>
                Acquire and retain 57&#37; more customers
              </h1>
              <p style={{ padding: "0" }}>
                Provided better customer experience through digital payments and
                communicating with your customers via SMS Or E-mail
                notification. We will make them feel special by recording their
                preferences even when you&apos;re not around.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.mydiv88}>
        <div className="container">
          <h1 className={Styles.center_box}>Multi Store</h1>
          <p className={Styles.paddingSide}>
            Manage all your stores&#44; plants&#44; staff and services under one
            roof &#33; Take advantage of multistore features to accelerate your
            business&#44; increase your productivity and elevate your profits.
          </p>
          <h4 className={Styles.titile_box}>
            Take privilege of our multistore benefits &#33;
          </h4>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="" style={{ marginLeft: "-178p" }}>
                <h1 className={Styles.valuecontent1}>
                  Connected plant with multi store or franchise
                </h1>
                <p style={{ padding: "0" }}>
                  If you run a central cleaning facility&#44; we provide a plant
                  mode feature in the software&#44; where staff at the plant can
                  manage order from multi stores.
                </p>
                <br />
                <p style={{ padding: "0" }}>
                  You will have the option to link database between multi stores
                  which can Allow you to quickly update prices across stores and
                  make sure your stores have details of every customer.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/image/ware.png" alt="img" className="hireimages1" />
            </div>
          </div>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="hirecontent1" style={{ marginLeft: "-178p" }}>
                <img
                  src="/image/circle.png"
                  alt="img"
                  className="hireimages1"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className={Styles.graph_box}>
                <h1 className={Styles.valuecontent1}>
                  Overview your business statics for all your stores in one
                  place.
                </h1>
                <p style={{ padding: "0" }}>
                  If you run multiple stores&#44; we are providing you with an
                  overview page where all key statistics are available and you
                  can view it &#33;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.mydiv88}>
        <div className="container">
          <h1 className={Styles.center_box}>New Store</h1>
          <p className={Styles.paddingSide}>
            Manage all your stores&#44; plants&#44; staff and services under one
            roof &#33; Take advantage of multi-store features to accelerate your
            business&#44; increase your productivity and elevate your profits.
          </p>
          <h4 className={Styles.titile_box}>
            Let start your laundry business in a smart way&#44; not in an
            Ordinary way &#33;
          </h4>
        </div>
      </section>

      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="" style={{ marginLeft: "-178p" }}>
                <h1 className={Styles.valuecontent1}>
                  Accelerate your business growth with E-Laundry that is
                  integrated with technology
                </h1>
                <p style={{ padding: "0" }}>
                  Send promotional notifications&#44; offers professional
                  services to achieve customer&apos;s trust and enjoy more
                  referrals&#44; make evidence based business decisions which
                  are integrated with latest echnology and customer can
                  experience latest digital services.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img src="/image/boxx.png" alt="img" className="hireimages1" />
              <br /> <br />
            </div>
          </div>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hirecontentel" style={{ marginLeft: "-178p" }}>
                <br /> <br /> <br />
                <img
                  src="/image/women.png"
                  alt="img"
                  className="hireimages1 "
                />
              </div>
            </div>
            <div className="col-md-6">
              <br /> <br />
              <h1 className={Styles.valuecontent1}>
                Implement the Industry&apos;s best practices in the process to
                make your business smoother
              </h1>
              <p style={{ padding: "0" }}>
                E&#45;laundry helps you to streamline your business and
                implement industry standard proven techniques to maximize
                revenue and minimize stress for you. All you have to do is&#44;
                Try E&#45;Laundry and take your business to higher level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Elaundry;

const elaundrysch = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Laundry Management Software - OMRA Solutions",
  "image":"https://omrasolutions.com/images/newlogo.png",
"description": "We offer Laundry Management Software. Here you manage Single/Multi Stores smoothly with amazing features like Home Pickup and Delivery facility Rider-POS Mobile, Application and Online Booking through Customer with this software on your device",
  "@id": "https://omrasolutions.com/",
 "url": "https://omrasolutions.com/elaundry", 
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
