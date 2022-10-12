import Blog2 from "../element/blog-2";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import HomeSlider from "../element/home-slider";
import Secondsec from "../element/secondsec";
import Fourthsection from "../element/fourthsection";
import ReportSection from "../element/reportsection";
import Leadership from "../element/leader";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json">{`
    {
      @context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "OMRA Solutions",
	"image": "",
	"@id": "https://omrasolutions.com/",
	"url": "https://omrasolutions.com/",
	"telephone": "",
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
      " 
    `}</script>
      </Head>
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
    </>
  );
}

export default HomePage;
