import React from "react";
import Styles from "../../scss/demo/aboutus.module.scss";
import Image from "next/image";
import ReusableTab from "../../component/tab/tab";
import AddIcon from "../../component/icons/Add";
import Header2 from "../../layout/header-2";
import Footer from "../../layout/footer";
import Blog2 from "../../element/blog-2";
const Aboutus = () => {
  return (
    <>
      <Header2 />
      <div className="mainpage">
        <div className={Styles.bannerImage}>
          <Image
            src="/images/background/aboutt.png"
            width={1700}
            height={800}
            priority
          />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}>
              <div className="col-md-12">
                <div className={Styles.bannertext}>
                  <h1 className={Styles.mobileH1}>
                    {" "}
                    Best in E Commerce Uploading
                  </h1>
                  <p>
                    Sell more with appealing product entry services from OMRA
                    Solutions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={Styles.section_box}>
          <div className="container">
            <div className="row">
              <div className={Styles.padding_section}>
                <div className="col-sm-6">
                  <h2 className={Styles.heading3}>WE FIRST</h2>

                  <h2 className={Styles.heading3}>BE THE FUTURE</h2>

                  <h2 className={Styles.heading3}>WE ARE THE FUTURE</h2>

                  <h1 className={Styles.about_heading}>About us</h1>

                  <p styles={{ color: "white" }}>WE ARE THE BEST</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className={Styles.section1}>
                  <h2 className={Styles.heading}>WE ARE THE FUTURE</h2>

                  <p className={Styles.para}>
                    Web services via user-centric initiatives. Quickly promote
                    sticky testing procedures before unique process
                    improvements. Distinctively engineer innovative information
                    whereas revolutionary process improvements. Objectively
                    incubate high-quality supply chains through high- quality
                    results. Monotonectally restore ubiquitous customer service
                    rather than brincks-and clicks scenarios. Quickly promote
                    sticky testing.
                  </p>

                  <p className={Styles.para}>
                    Web services via user-centric initiatives. Quickly promote
                    sticky testing procedures before unique process
                    improvements. Distinctively engineer innovative information
                    whereas revolutionary process improvements. Objectively
                    incubate high-quality supply chains through high- quality
                    results. Monotonectally restore ubiquitous customer service
                    rather than brincks-and clicks scenarios. Quickly promote
                    sticky testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={Styles.section2}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p styles={{ color: "white" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.{" "}
                  <a href="">Read more</a>
                </p>
              </div>

              <div className="col-sm-6">
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progress_bar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progress_bar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progress_bar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mydiv9">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className={Styles.mydiv9h1}> We are Creative</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="mydiv8">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/w.svg" alt="img" />
                </div>

                <h2>Modern Design</h2>
                <p>
                  At Omra Solution, we begin with a full scale audit of your
                  business to understand the target audience and marketing
                  objectives.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/w.svg" alt="img" />
                </div>
                <h2>Easy Customize</h2>
                <p>
                  The audit also enables us to understand consumer data and
                  their behavior. We will come up with a robust marketing
                  strategy accordingly.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/r.svg" alt="img" />
                </div>
                <h2>Modern Design</h2>
                <p>
                  With the accumulated data, we understand your business
                  requirements, draw insights from the data, and set targets
                  which help you meet marketing goals.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/q.svg" alt="img" />
                </div>
                <h2>Modern Design</h2>
                <p>
                  At Omra Solution, we begin with a full scale audit of your
                  business to understand the target audience and marketing
                  objectives.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/q.svg" alt="img" />
                </div>
                <h2>Modern Design</h2>
                <p>
                  At Omra Solution, we begin with a full scale audit of your
                  business to understand the target audience and marketing
                  objectives.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/q.svg" alt="img" />
                </div>
                <h2>Modern Design</h2>
                <p>
                  At Omra Solution, we begin with a full scale audit of your
                  business to understand the target audience and marketing
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="new-about-section1">
          <div class="content1">
            <p>
              OMRA IS A PRESENTATION SOFTWARE APPLICATION DEVLOPED AS A PART OF
              THE IWORK PRODUCTIVITY SUITE BY APPLE INC.
            </p>
          </div>
        </section>

        <section className="new-about-section">
          {/* <div class="content">
            <h1 className="section_heading3">Unique Design</h1>
            <p>
              Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
              phaedrum te duo, eum cu recteque expetendis neglegentur. Cu
              mentitum maiestatis persequeris pro, pri ponderum tractatos ei.
            </p>
            <button type="button" class="btn btn-dark">
              WATCH NOW
            </button>
          </div>
          <div class="content333">
            <h1 className="section_heading3">Unique Design</h1>
            <p>
              Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
              phaedrum te duo, eum cu recteque expetendis neglegentur. Cu
              mentitum maiestatis persequeris pro, pri ponderum tractatos ei.
            </p>
            <button type="button" class="btn btn-dark">
              WATCH NOW
            </button>
          </div> */}

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section_heading3">Unique Design</h1>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                  soleat phaedrum te duo, eum cu recteque expetendis
                  neglegentur. Cu mentitum maiestatis persequeris pro, pri
                  ponderum tractatos ei.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    src="/image/brown.jpg"
                    alt="Cinque Terre"
                    width="500px"
                    height="200px"
                    className={Styles.apple_img}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="section_heading3">Unique Design33</h1>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                  soleat phaedrum te duo, eum cu recteque expetendis
                  neglegentur. Cu mentitum maiestatis persequeris pro, pri
                  ponderum tractatos ei.
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="section_heading3">Unique Design33</h1>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit
                  soleat phaedrum te duo, eum cu recteque expetendis
                  neglegentur. Cu mentitum maiestatis persequeris pro, pri
                  ponderum tractatos ei.
                </p>
              </div>

              <div className="col-md-6 ">
                <div>
                  <img
                    src="/image/brown.jpg"
                    alt="Cinque Terre"
                    width="500px"
                    height="200px"
                    className={Styles.apple_img}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blog2 />
        <section className="mydiv10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="productul">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/image/new1.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new2.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new3.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new4.png" alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="productul">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/image/new1.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new2.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new3.png" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/image/new4.png" alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
