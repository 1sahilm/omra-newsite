import "../css/style.css";
import "../css/skin/skin-2.css";
import "../styles/globals.css";
import "../styles/switcher.css";
import "../component/tab/styles.css";
import "slick-carousel/slick/slick.css";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/abstract/thought-leadership.css";
import "../scss/abstract/intelligent-automation.css";

import Script from "next/script";

import NextSeo from "../layout/next-seo";
import Head from "next/head";
import * as ga from "../lib/ga";
import { useEffect } from "react";
import { useRouter } from "next/router";

function RootApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        {/* <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
    `,
          }}
        /> */}
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

export default RootApp;
