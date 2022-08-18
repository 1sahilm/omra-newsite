import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="site-footer style-1" id="footer">
        <div className="">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <a href="">
                      <img
                         src="/images/newlogo.png"
                        alt="image1"
                        className="logofooter"
                      />
                    </a>
                    <br />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 footernewssection">
                  <div className="footer-txt-1">
                    <form className="form-section">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="news-section-box"
                      />
                      <button type="button" className="newsletter-button">
                        Submit
                      </button>
                    </form>

                    <h4>Subscribe</h4>
                    <p>
                      Select topics and stay current with our latest insights
                    </p>
                    <br />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-terms">
                    <a href="#">Contact us</a>
                    <a href="#">About us</a>
                    <a href="privacy-policy">Privacy policy</a>
                    <a href="terms-of-use">Terms of use</a>
                  </div>
                  <div className="socail">
                    <a
                      target="_blank"
                      className="fa fa-facebook"
                      aria-hidden="true"
                      href="https://www.facebook.com/omrasolution"
                    ></a>
                    <a
                      target="_blank"
                      className="fa fa-twitter"
                      aria-hidden="true"
                      href="https://twitter.com/SolutionsOmra"
                    ></a>
                    <a
                      target="_blank"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      href="https://www.linkedin.com/company/omra-solutions"
                    ></a>
                    <a
                      target="_blank"
                      className="fa fa-youtube-play"
                      aria-hidden="true"
                      href="https://www.youtube.com"
                    ></a>
                    <a
                      target="_blank"
                      className="fa fa-instagram"
                      aria-hidden="true"
                      href="https://www.instagram.com/omra.digitalsolution/"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">
          Copyright © 2022 Omra Solutions. All rights reserved.
        </p>
        {/* <!-- footer bottom part --> */}
        {/* <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div> */}
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
