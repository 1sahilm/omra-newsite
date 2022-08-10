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
                  <h2 className={Styles.heading3}>USER SUPPORT</h2>

                  <h2 className={Styles.heading3}>EMOTIONAL CONNECTION</h2>

                  <h2 className={Styles.heading33}>MATURE & SMART SERVICE</h2>

                  <h1 className={Styles.about_heading}>About us</h1>

                  <p styles={{ color: "white" }}>
                    Find out why we are different?
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className={Styles.section1}>
                  <h2 className={Styles.heading}>WE ARE THE FUTURE</h2>

                  <p className={Styles.para}>
                    We are helping corporate businesses by always giving
                    priority to clients’ requirements. We are ISO 9001:2015
                    Certified. We are serving renowned brands in Business
                    Process Outsourcing, Voice Blend processes, Inbound/Outbound
                    process and Increase the revenue of businesses to boost
                    Sales. Our vision is to achieve our client’s trust through
                    providing quality work.
                  </p>

                  <p className={Styles.para}>
                    Objectively incubate high-quality supply chains through
                    high- quality results. Monotonectally restore ubiquitous
                    customer service rather than brincks-and clicks scenarios.
                    Quickly promote sticky testing.
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
                  From Platform development to Sales, Inbound/Outbound calls,
                  Business Process Outsourcing, we specialize in all aspects of
                  our working area. With more than 34 completed projects, we are
                  helping the corporate to hit their sales target with our
                  dedicated team. We have successfully developed our SaaS based
                  platform, E-Laundry. We also have our own HRM Software to
                  manage all chaos of HR department. We build a collaborative,
                  multicultural work environment that prioritizes people and
                  their potential. That is why we are recognized year after year
                  with Certifications and more industries. We at OMRA Solutions
                  have a principle of work: “THINK DIFFERENT TO MAKE YOUR
                  VISION” <a href="">Read more</a>
                </p>
              </div>

              <div className="col-sm-6">
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progressbar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progressbar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
                <p styles={{ color: "white" }}>IT DEVLOPMENT</p>
                <div className={Styles.padding_box}>
                  <div className={Styles.progress} styles={{ height: "7px" }}>
                    <div
                      className={Styles.progressbar}
                      styles={{ width: "40%", height: "7px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blog2 />
        <section className="mydiv9">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className={Styles.mydiv9h1}>
                  {" "}
                  We produce great ideas with amazing innovation
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="mydiv8">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/w.svg" alt="img" />
                </div>

                <h2>Cost-effective solutions</h2>
                <p>
                  We bring cost-effective solutions with quality work. Our main
                  goal is to provide solutions with quality to our clients &
                  business partners.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/w.svg" alt="img" />
                </div>
                <h2>Dedicated Teams</h2>
                <p>
                  Our expertise teams are creating innovative solutions for our
                  clients, and partners. We are team of 200+ members for quality
                  work.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/r.svg" alt="img" />
                </div>
                <h2>24/7 communication</h2>
                <p>
                  We are always there to serve you. Let’s connect today with
                  smooth communication and see what amazing we can do for you!
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/q.svg" alt="img" />
                </div>
                <h2>Brainstorming Ideas</h2>
                <p>
                  We build to strategize brainstorming solutions & ideas based
                  on your vision that can become the best outcome of our
                  mission.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/q.svg" alt="img" />
                </div>
                <h2>Compliance & Security</h2>
                <p>
                  You can trust us with our certification as well. We are ISO
                  Certified 9001:2015in Quality Management Systems,
                  ICI/6885801/21.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/q.svg" alt="img" />
                </div>
                <h2>Core Values</h2>
                <p>
                  These are at the heart of the OMRA Culture: Client-Centricity,
                  dedication, work ethics, leadership, and smart business
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="new-about-section1">
          <div class="content1">
            <p>
              We push ourselves! We push technology! We push the boundaries of
              conventional thinking!
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
                <h1 className="section_heading333">RECENT PROJECTS</h1>
                <p className={Styles.tex_color}>
                  OMRA Solutions are working with Justdial, DU Telecom, Jeena
                  Seekho to attain their business operation targets. We are
                  <br />
                  having wealthy experience with Interactive content & smooth
                  communication tools.
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
              <div className="col-md-6 background_section">
                <h1 className={Styles.section_heading3}>
                  Mind-blowing ideas to work
                </h1>
                <p className={Styles.tex_color}>
                  We have developed ways to make the work smoother. As we have
                  our internal QC team to get analysis of work quality. These
                  steps make our work into smarter & decent solution.
                </p>

                <button type="button" class="btn btn-dark">
                  WATCH NOW
                </button>
              </div>
              <div className="col-md-6 background_section">
                <h1 className={Styles.section_heading3}>
                  Elegant solutions for the outcome
                </h1>
                <p className={Styles.tex_color}>
                  OMRA Solutions can be your partner that business leaders can
                  count on to realize the entire potential of
                  technology-empowered transformation. We have complete
                  compliance, security as a certified ISO 9001:2015 company.
                </p>

                <button type="button" class="btn btn-dark">
                  WATCH NOW
                </button>
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
