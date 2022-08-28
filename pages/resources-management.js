import { useEffect } from "react";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import Link from "next/link";

function resources_management() {
  return (
    <>
      <Header2 />

      <section>
        <div className="image-res">
          <div className="container">
            <h1 className="banner-title">#UNLOCKEXPERIENCES WITH AI </h1>
            <p>
              Deliver superior experiences through intelligent automation, with
              AQT
            </p>
          </div>
        </div>
      </section>

      <section className="section-box section44">
        <div className="container">
          <div className="row">
            <div className="col-6 voice-paragraph">
              <h4 className="section-box-top">
                {" "}
                Experiences Begin with Smarter Processes
              </h4>
              <p className="paragraph-box1">
                Automation and AI results in increased business efficiency and
                smart processes; however, the larger picture here is all about
                the usage of time saved and the insights gained for crafting
                craft extraordinary experiences &#45; the ones that not only are
                personalized, but also distinctive enough to keep customers
                coming back for more
              </p>

              <div className="slidertextblock">
                <a href="#">
                  <span>Know More</span>
                  <i></i>
                </a>
              </div>
            </div>
            <div className="col-6 section1">
              <img
                src="/intelligentautomationimages/section1.jpg"
                alt="section1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-box section45">
        <div className="container">
          <div className="row">
            <div className="col-6 section2-img ">
              <img
                src="/intelligentautomationimages/section2.jpg"
                alt="section2"
              />
            </div>
            <div className="col-6 voice-paragraph">
              <div className="section-text">
                <h4 className="gradient-color">
                  {" "}
                  Experiences Begin with Smarter Processes
                </h4>
                <p className="paragraph-box1">
                  Automation and AI results in increased business efficiency and
                  smart processes; however, the larger picture here is all about
                  the usage of time saved and the insights gained for crafting
                  craft extraordinary experiences &#45; the ones that not only
                  are personalized, but also distinctive enough to keep
                  customers coming back for more
                </p>

                <div className="slidertextblock">
                  <a href="#">
                    <span>Know More</span>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center  gradient-color">OUR INSIGHT</h2>

      <div className="container section46">
        <div className="row">
          <div className="col-3">
            <img
              src="/intelligentautomationimages/demo.png"
              alt="demo"
              className="image-section-box"
            />
            <div className="section-text strong-text">
              Automate &amp; Optimize your IT Operations
            </div>
            <p className="paragraph-section">
              TACTiX platform from AQT enables automation of processes in order
              to reduce manual effort and accelerate efficiency
            </p>
          </div>
          <div className="col-3 ">
            <img
              src="/intelligentautomationimages/demo.png"
              alt="demo"
              className="image-section-box"
            />
            <div className="section-text strong-text">
              Automate &amp; Optimize your IT Operations
            </div>
            <p className="paragraph-section">
              TACTiX platform from AQT enables automation of processes in order
              to reduce manual effort and accelerate efficiency
            </p>
          </div>
          <div className="col-3 ">
            <img
              src="/intelligentautomationimages/demo.png"
              alt="demo"
              className="image-section-box"
            />
            <div className="section-text strong-text">
              Automate &amp; Optimize your IT Operations
            </div>
            <p className="paragraph-section">
              TACTiX platform from AQT enables automation of processes in order
              to reduce manual effort and accelerate efficiency
            </p>
          </div>
          <div className="col-3 ">
            <img
              src="/intelligentautomationimages/demo.png"
              alt="demo"
              className="image-section-box"
            />
            <div className="section-text strong-text">
              Automate &amp; Optimize your IT Operations
            </div>
            <p className="paragraph-section">
              TACTiX platform from AQT enables automation of processes in order
              to reduce manual effort and accelerate efficiency
            </p>
          </div>
        </div>
      </div>

      <section className="section-box section47">
        <div className="container">
          <div className="row">
            <div className="col-6 voice-paragraph">
              <h3 className="gradient-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <p className="paragraph-box1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>

              <div className="slidertextblock">
                <a href="#">
                  <span>Know More</span>
                  <i></i>
                </a>
              </div>
            </div>
            <div className="col-6 section1">
              <img
                src="/intelligentautomationimages/section3.jpg"
                alt="section3"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default resources_management;
