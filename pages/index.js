import React from "react";
import Blog2 from "../element/blog-2";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import HomeSlider from "../element/home-slider";
import Secondsec from "../element/secondsec";
import Fourthsection from "../element/fourthsection";
import ReportSection from "../element/reportsection";
import Leadership from "../element/leader";
import NextSeo from "../layout/next-seo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Script from "next/script";

function HomePage() {
  return (
    <React.Fragment>
      <NextSeo
        title="IT & Software Company  - OMRA Solutions"
        canonical="https://omrasolutions.com"
        description="we our leading IT & Software Company in india.we help you grow and manege your business with our software like crm,hrms,elaundry and more. contact us for get on top in your sector."
        keywords="IT & Software Company,crm software,drycleaning software,hrms software,elaundary software,best software company,digital marketing service,app development company"
      >
        <script
          type="application/ld+json"
          key="item-jsonld"
          dangerouslySetInnerHTML={{
            __html: jsonLd,
          }}
        />
      </NextSeo>
      <Header2 />
      <div className="page-content bg-white">
        <HomeSlider />
        <Secondsec />
        <Fourthsection />
        <Leadership />
        <ReportSection />
        <Blog2 />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;

const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OMRA Solutions",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
  ],
  "@id": "https://omrasolutions.com/",
  "url": "https://omrasolutions.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office- 103 and 105, D-20, Sector 63 Rd, Noida, Uttar Pradesh 201305",
    "addressLocality": "Noida",
    "postalCode": "201305",
    "addressCountry": "+91",
    "addressRegion": "91"
  },
  "priceRange": "ask",
  "sameAs": [
    "https://www.instagram.com/omra.digitalsolution/",
    "https://www.facebook.com/omrasolution",
    "https://www.youtube.com/channel/UCHAvY_F3UWz2R43gkYS3lTg"
  ],
  "openingHoursSpecification": [
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
    }
  ]
}`;
