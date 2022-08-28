import { useEffect } from "react";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Link from "next/link";

function termsOfUse() {
  return (
    <>
      <Header2 />

      <section>
        <div className="image-it">
          <div className="container">
            <h1 className="banner-title">Terms Of Use</h1>
          </div>
        </div>
      </section>

      <section className=" section45">
        <div className="container">
          <div className="row">
            <div className="">
              <h3 className="gradient-color">Terms of use</h3>
              <p className="terms">
                The “Terms of Use” determined hereunder and the terms and
                conditions specified hereunder, are applicable to every person
                and entity, who accesses the website, www.omrasolutions.com,
                (Hereinafter referred to as the “Website”), or any part thereof.
                By your usage of this Website, it shall be deemed, that you have
                understood, complied, and accepted all the Terms of Use, as are
                mentioned here under. Access to the website, is available for a
                temporary period. Any information contained or referenced in
                this website is suitable only as an introduction to the services
                provided by OMRA Solutions. For specific information, please
                contact us directly via the contact details provided in this
                website.
              </p>

              <p className="terms">
                Through your access to and use of this website, you accept the
                terms &amp; conditions set forth below. Please review the terms
                and conditions concerning your use of our website. By accessing
                &amp; using any information and/or materials from our website,
                you agree to be tied by our terms and conditions. We reserve the
                right to change these terms and conditions at our sole
                discernment, without issuing any notice, or informing you in any
                manner. Please do not use our website or any resource/material
                of it without our permission. In case of any violation of these
                terms and conditions, we reserve the right to seek all remedies
                available by law and in equity for such violations, without any
                notice to you. It shall be your responsibility to time and again
                check for any changes or amendments in the terms of use of this
                website, and your continued usage of the website, shall be
                construed to be deemed acceptance of the terms of use, as may be
                amended from time to time. These terms and conditions apply to
                all visits to our website.
              </p>
              <h3 className="gradient-color">Limited License</h3>
              <p className="terms">
                All the contents on our website are are possible by extent,
                protected by copyright or otherwise proprietary. You may view
                and copy material available in the public portions of our
                website, solely for non commercial, personal &amp; informational
                use. No other use of the information is authorized. However,
                such activity shall not be modified by you in any manner. If
                such information needs to be reproduced, the same shall be
                reproduced as a whole. An illustration and the graphics have to
                be reproduced along with the corresponding text, and no such
                replication shall be made, which might mislead any person or
                entity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default termsOfUse;
