import React from "react";
import Styles from "../scss/demo/aboutus.module.scss";
import Image from "next/image";
import Header2 from "../layout/header-2";
import Footer from "../layout/footer";
import Blog2 from "../element/blog-2";
import Slider33 from "../component/slider33.js";
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
            className={Styles.Imagestyle}
            priority
          />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}></div>
          </div>
        </div>
        <section className={Styles.section_box}>
          <div className="container">
            <div className="row">
              <div className={Styles.padding_section}>
                <div className="col-sm-6">
                  <h2 className={Styles.heading3}>Process Oriented</h2>
                  <h2 className={Styles.heading3}>
                    Cost-Effective &#38; Secure Service Provider
                  </h2>
                  <h2 className={Styles.heading33}>
                    Global Satisfied Clientele
                  </h2>
                  <h1 className={Styles.about_heading}>About us</h1>
                  <p className={Styles.dheading}>
                    Find out why we are different &#63;
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className={Styles.section1}>
                  <h2 className={Styles.heading}>WE ARE THE FUTURE</h2>

                  <p className={Styles.para}>
                    We are helping corporate businesses by always giving
                    priority to clients&#180; requirements. We are ISO
                    9001&#58;2015 Certified. We are serving renowned brands in
                    Business Process Outsourcing&#44; Voice Blend processes&#44;
                    Inbound &#38; Outbound process and Increase the revenue of
                    businesses to boost Sales. Our vision is to achieve our
                    client&#180;s trust through providing quality work.
                  </p>

                  <p className={Styles.para}>
                    We are enabling business transformation that can be
                    agile&#44; intuitive and transparent to stay competitive
                    through our radical solutions. We are global leader to
                    outsource in B2B &#38; B2C sales.
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
                <h1 className={Styles.about_headingnew}>About us</h1>

                <p className={Styles.dheadingnew}>
                  Find out why we are different &#63;
                </p>
                <p className={Styles.dheading34}>
                  From Platform development to Sales&#44; Inbound/Outbound
                  calls&#44; Business Process Outsourcing&#44; we specialize in
                  all aspects of our working area. With more than 34 completed
                  projects&#44; we are helping the corporate to hit their sales
                  target with our dedicated team. We have successfully developed
                  our SaaS based platform&#44; E-Laundry. We also have our own
                  HRM Software to manage all chaos of HR department. We build a
                  collaborative&#44; multicultural work environment that
                  prioritizes people and their potential. That is why we are
                  recognized year after year with Certifications and more
                  industries. We at OMRA Solutions have a principle of work
                  &#45; THINK DIFFERENT TO MAKE YOUR VISION
                </p>
              </div>

              <div className="col-sm-6">
                <div className={Styles.relative_box}>
                  <img
                    src="/image/12.png"
                    alt="img"
                    width="570px"
                    height=" 286px"
                    className={Styles.relative_image}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={` ${Styles.mobileResslidercontain} slidercontain`}>
          <h1 className="what_box">WHAT ARE WE DOING</h1>
          <div className="container">
            <Slider33 />
          </div>
        </div>

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
                  <img src="/image/31.png" alt="img" />
                </div>

                <h2>Cost-effective solutions</h2>
                <p>
                  We bring cost-effective solutions with quality work. Our main
                  goal is to provide solutions with quality to our clients &#38;
                  business partners.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/33333333.png" alt="img" />
                </div>
                <h2>Dedicated Teams</h2>
                <p>
                  Our expertise teams are creating innovative solutions for our
                  clients&#44; and partners. We are team of 200+ members for
                  quality work.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/24.png" alt="img" />
                </div>
                <h2>24/7 communication</h2>
                <p>
                  We are always there to serve you. Let&#180;s connect today
                  with smooth communication and see what amazing we can do for
                  you&#33;
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/ph.png" alt="img" />
                </div>
                <h2>Brainstorming Ideas</h2>
                <p>
                  We build to strategize brainstorming solutions &#38; ideas
                  based on your vision that can become the best outcome of our
                  mission.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/cc.png" alt="img" />
                </div>
                <h2>Compliance &#38; Security</h2>
                <p>
                  You can trust us with our certification as well. We are ISO
                  Certified 9001&#58;2015 in Quality Management Systems&#44;
                  ICI&#47;6885801&#47;21.
                </p>
              </div>
              <div className="col-md-4">
                <div className={` ${Styles.box551} box13 `}>
                  <img src="/image/core.png" alt="img" />
                </div>
                <h2>Core Values</h2>
                <p>
                  These are at the heart of the OMRA Culture&#58;
                  Client-Centricity&#44; dedication&#44; work ethics&#44;
                  leadership&#44; and smart business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${Styles.section21} new-about-section1`}>
          <div className={`${Styles.content11} content1`}>
            <p className={Styles.table_para}>
              We push ourselves&#33; We push technology&#33; We push the
              boundaries of conventional thinking&#33;
            </p>
          </div>
        </section>

        <section className={`${Styles.section01} new-about-section`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section_heading333">RECENT PROJECTS</h1>
                <p className={Styles.textt_color}>
                  OMRA Solutions are working with Justdial&#44; DU Telecom&#44;
                  Jeena Seekho to attain their business operation targets. We
                  are having wealthy experience with Interactive content &#38;
                  smooth communication tools.
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.div_sections}>
            <div className={Styles.section_flex}>
              <div>
                <img
                  src="/image/brown.jpg"
                  alt="Cinque Terre"
                  width="580px"
                  height="255px"
                  className={Styles.apple_img}
                />
              </div>

              <div
                className={`${Styles.background_sectionmob} background_section`}
              >
                <h1 className={Styles.section_heading3}>
                  Mind blowing ideas to work
                </h1>
                <p className={Styles.tex_color}>
                  We have developed ways to make the work smoother. As we have
                  our internal QC team to get analysis of work quality. These
                  steps make our work into smarter &#38; decent solution.
                </p>

                <button type="button" className={Styles.watch_button1}>
                  WATCH NOW
                </button>
              </div>
            </div>{" "}
            <div className={Styles.section_flex}>
              <div
                className={`${Styles.background_sectionmob} background_section`}
              >
                <h1 className={Styles.section_heading3}>
                  Elegant solutions for the outcome
                </h1>
                <p className={Styles.tex_color}>
                  OMRA Solutions can be your partner that business leaders can
                  count on to realize the entire potential of technology
                  empowered transformation. We have complete compliance&#44;
                  security as a certified ISO 9001&#58;2015 company.
                </p>

                <button type="button" className={Styles.watch_button}>
                  WATCH NOW
                </button>
              </div>

              <div>
                <img
                  src="/image/3333.png"
                  alt="Cinque Terre"
                  width="580px"
                  height="255px"
                  className={Styles.apple_img}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${Styles.div10formob} mydiv10`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="productul">
                  <ul>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/ECOM.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>E-COMMERCE</div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/bl.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>DATA ENRICHMENT</div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/yelow.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>
                          IT DEVELOPMENT &#38; AUTOMATION
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/chrome.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>OUTSOURCE</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="productul">
                  <ul>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/vo.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>TELECOM</div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/pitch.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>VOICE PROCESS</div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/sass.svg"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox}
                          />
                        </div>

                        <div className={Styles.semi_color}>SAAS</div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.full_box}>
                        <div>
                          <img
                            src="/image/bfsi.png"
                            alt="img"
                            width="90px"
                            height="90px"
                            className={Styles.semi_imagebox13}
                          />
                        </div>

                        <div className={Styles.semi_color}>BFSI</div>
                      </div>
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
