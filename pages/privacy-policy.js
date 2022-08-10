import { useEffect } from "react";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Link from "next/link";
// import "../css/skin/skin-1.css";

function privacyPolicy() {
  return (
    <>
      <Header2 />

      <section>
        <div className="image-it">
          <div className="container">
            <h1 className="banner-title">Privacy Policy </h1>
            {/* <p>
              Deliver superior experiences through intelligent automation, with
              AQT
            </p> */}
          </div>
        </div>
      </section>
      {/* <!-- Section 1 Starts --> */}

      <section className=" section45">
        <div className="container">
          <div className="row">
            <div className="">
              <h3 className="gradient-color">Our Privacy Statement</h3>
              <p className="privacy">
                We respect your privacy & securities and the following
                information provides an overview of how your privacy is
                protected on our website:
              </p>

              <h3 className="gradient-color">
                What information do we gather from you?
              </h3>
              <ul className="bullets space-section">
                <li>
                  Indirectly (for example, through our site’s technology);
                </li>
                <li>
                  Directly (for example, when you provide information on various
                  platforms of the OMRA Solutions website).
                </li>
              </ul>
              <p className="privacy">
                An example of how we collect information indirectly is through
                our internet access logs. When you access the OMRA Solutions
                Services website, your Internet address is automatically
                collected and placed in our access logs. We collect information
                in various ways. One way is through the use of cookies. Cookies
                are tiny files that save & fetch information about your visit to
                the OMRA Solutions website, such as how you entered & navigated
                through our website. The cookies we use identify you by number,
                not by name. If you are uncomfortable regarding the use of
                cookies, you can disable cookies on your computer by changing
                the settings in the preferences or options menu of your browser.
                We also collect information when you voluntarily submit it to
                us. Throughout our website, we provide the opportunity to fill
                out a contact platform, register for an event/conference, order
                a paper, or participate in a web-based survey. When we collect
                this type of information, we notify you as to why we are asking
                for the information and how this information will be used. It is
                completely up to you whether or not you want to provide it.
              </p>
              <h3 className="gradient-color">
                How do we use your information?
              </h3>
              <p className="privacy">
                We analyze information to establish what is most effective about
                our website & to help us identify ways to improve it. If you
                freely submit information, we spread it internally to OMRA
                Solutions' employees so that they can follow up with you or
                process your information in accordance with the explanation of
                how the information will be used at the point of data
                collection.
              </p>
              <h3 className="gradient-color">
                Do we share your information with outward companies?
              </h3>
              <p className="privacy">
                We do not sell the information gathered on our website. As an
                organization, we might share your information with employees of
                OMRA Solutions. For some events, we might need to provide
                information with trusted merchants and business partners.
              </p>
              <h3 className="gradient-color">
                What do we do with your delicate personal data?
              </h3>
              <p className="privacy">
                We do not usually solicit to gather the delicate personal data
                through this website. If we do collect like that data, we will
                ask you to consent to our proposed uses of the data. We might
                also collect some sensitive personal data incidentally.
              </p>
              <h3 className="gradient-color">
                Do we give the access to you for this information?
              </h3>
              <p className="privacy">
                You are permitted to know whether we hold your information and,
                if we do, to have access to this information. You may also
                necessitate your information to be corrected if it is
                inaccurate. You can e-mail to us info@omrasolutions.com
              </p>
              <h3 className="gradient-color">
                What about your data security & privacy?
              </h3>
              <p className="privacy">
                We take appropriate steps to maintain the security of your data
                on OMRA Solutions' website. You should understand that the open
                nature of the Internet is such that data may flow over networks
                without security measures and may be accessed and used by people
                other than those for whom the data is intended.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default privacyPolicy;
