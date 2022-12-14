import Footer from "../layout/footer";
import Header from "../layout/header-2";
import Link from "next/link";

function Error404() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>404</h1>

              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    404
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="section-full"
          style={{ backgroundImage: "url(images/background/bg_19.png)" }}
        >
          <div className="container">
            <div className="error-page text-center">
              <div className="dlab_error">404</div>
              <h2 className="error-head">
                We are sorry. But the page you are looking for cannot be found.
              </h2>
              <Link href="/">
                <a className="btn btn-primary radius-no">
                  <span className="p-lr15">Back to Homepage</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
