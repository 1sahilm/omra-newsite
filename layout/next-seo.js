import Head from "next/head";
import React from "react";

const NextSeo = ({
  title,
  description,
  children,
  //   url = "https://omrasolutions.com",
  imageUrl,
  canonical = "https://omrasolutions.com",
  keywords,
}) => {
  return (
    <Head>
      {/* BASIC SEO */}
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      <meta
        name="google-site-verification"
        content="miO7qBo6rWBWDfdtk4zmaveMZluOzYN9VdEekDBkbRg"
      />
      <meta name="author" content="OMRA Solutions" />
      <meta name="robots" content="index,follow" />
      <meta name="robots" content="noodp,noydir" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="OMRA Solutions" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />

      {/* FAVICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {children}
    </Head>
  );
};

export default NextSeo;

{
  /* <meta property="og:type" content="website"/> */
}
{
  /* <meta property="og:title" content="IT & Software Company  - OMRA Solutions" /> */
}
{
  /* <meta property="og:url" content="https://omrasolutions.com"/> */
}
{
  /* <meta name="description" content="we our leading IT & Software Company in india.we help you grow and manege your business with our software like crm,hrms,elaundry and more. contact     us for get on top in your sector."/> */
}
