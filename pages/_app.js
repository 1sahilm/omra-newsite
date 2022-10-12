import Head from "next/head";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../css/style.css";
import "../css/skin/skin-2.css";
import "../styles/globals.css";
import "../styles/switcher.css";
import "../scss/abstract/thought-leadership.css";
import "../scss/abstract/intelligent-automation.css";
import "../component/tab/styles.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // const [toggle1, setToggle1] = useState(false);
  // const [body_, setbody_] = useState();
  // const [layout, setLayout] = useState("wide");
  // const [header, setHeader] = useState("fixed");
  // const [header_, setHeader_] = useState();
  // const [sliderValu, setSliderValu] = useState(20);

  // useEffect(() => {
  //   setbody_(document.querySelector("body"));
  //   setHeader_(document.getElementsByClassName("main-bar-wraper"));
  // }, []);

  // let scrollPosition = useScrollPosition();
  // function toggle() {
  //   setToggle1(!toggle1);
  // }

  // const backGroundImage = (value) => {
  //   body_.style.backgroundImage = `url(${value})`;
  //   body_.style.backgroundSize = "auto";
  // };

  // const chageHeader = (value) => {
  //   setHeader(value);
  //   if (value === "fixed") {
  //     header_[0].classList.add("sticky-header");
  //     header_[0].classList.remove("sticky-no");
  //   } else {
  //     header_[0].classList.add("sticky-no");
  //     header_[0].classList.remove("sticky-header");
  //     header_[0].classList.remove("is-fixed");
  //   }
  // };

  // const onChange = (value) => {
  //   setSliderValu(value);
  //   body_.style.padding = value + "px";
  // };

  // useEffect(() => {
  //   header === "fixed" && scrollPosition > 10
  //     ? header_ && header_[0].classList.add("is-fixed")
  //     : header_ && header_[0].classList.remove("is-fixed");
  // }, []);

  return (
    <>
      <Head>
        <title>IT & Software Company - OMRA Solutions</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
    `,
          }}
        />
        <meta
          name="google-site-verification"
          content="miO7qBo6rWBWDfdtk4zmaveMZluOzYN9VdEekDBkbRg"
        />

        <meta name="google-site-verification" content="" />
        <meta name="author" content="OMRA Solutions" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noodp,noydir" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IT & Software Company  - OMRA Solutions"
        />
        <meta property="og:url" content="https://omrasolutions.com" />
        <meta property="og:site_name" content="OMRA Solutions" />
        <meta
          name="description"
          content="we our leading IT & Software Company in india.we help you grow and manege your business with our software like crm,hrms,elaundry and more. contact       us for get on top in your sector."
        />
        <meta
          name="keywords"
          content="IT & Software Company,crm software,drycleaning software,hrms software,elaundary software,best software company,digital marketing service,app         development company "
        />
        <link rel="canonical" href="https://omrasolutions.com" />
      </Head>
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>

      <a href="#top">
        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </>
  );
}

export default MyApp;
/**
 *    <a
        href="https://themeforest.net/cart/configure_before_adding/32950742/?license=regular"
        target="_blank"
        className="bt-buy-now theme-btn"
      >
        <i className="ti-shopping-cart" />
        <span>Buy Now</span>
      </a>
      <a
        href="https://support.w3itexperts.com"
        target="_blank"
        className="bt-support-now theme-btn"
      >
        <i className="ti-headphone-alt" />
        <span>Support</span>
      </a>
 */

/**
       *    <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', 
  {
    page_path: window.location.pathname,
    });
    `,
          }}
       */
