import Link from "next/link";
import Quote2 from "../element/quote-2";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";

function ContactUs2() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Contact Us</h1>

              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Quote2 />
      </div>
      <Footer2 />
    </>
  );
}

export default ContactUs2;
