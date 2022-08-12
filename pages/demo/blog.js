import React from "react";
// import Styles from "../../scss/demo/demo.module.scss";
import Image from "next/image";
import ReusableTab from "../../component/tab/tab";
import AddIcon from "../../component/icons/Add";
import Header2 from "../../layout/header-2";
import Footer from "../../layout/footer";
import Styles from "../../scss/demo/blog.module.scss";
const Blog = () => {
  return (
    <>
      <Header2 />
      <div className="mainpage">
        <div className={Styles.bannerImage}>
          <Image
            src="/images/background/bluebanner.png"
            width={1700}
            height={800}
            priority
          />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}>
              <div className="col-md-12">
                {/* <div className={Styles.bannertext}>
                  <h1 className={Styles.mobileH1}>
                    {" "}
                    Best in E Commerce Uploading
                  </h1>
                  <p>
                    Sell more with appealing product entry services from OMRA
                    Solutions!
                  </p>
                </div> */}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <section className={Styles.newsection1}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={Styles.new_box3}>
                <div className={Styles.top_box3}>
                  <h1>CARRERS</h1>
                  <p>
                    These 5 tips will help you
                    <br />
                    nail your next design <br />
                    presentations
                  </p>
                </div>
                <div className={Styles.image_flex3}>
                  <div>
                    <img
                      src="/image/p1.svg"
                      alt="Cinque Terre"
                      width="100px"
                      height="100px"
                      className={Styles.apple_img}
                    />
                  </div>
                  <div className={Styles.top_heading}>
                    <h2>Daniya Kapoor</h2>
                    <p>18-August-2022</p>
                    <p className={Styles.purple_color}>
                      300k views
                      <span className={Styles.social_icon}>
                        <img
                          src="/image/insta.svg"
                          alt="img"
                          width="15px"
                          height="15px"
                        />
                        <img
                          src="/image/fb.svg"
                          alt="img"
                          width="15px"
                          height="15px"
                        />
                        <img
                          src="/image/link.svg"
                          alt="img"
                          width="15px"
                          height="15px"
                        />
                        <img
                          src="/image/twitter.svg"
                          alt="img"
                          width="15px"
                          height="15px"
                        />
                      </span>
                    </p>
                  </div>

                  <div>
                    <button type="button" className={Styles.btn_primary}>
                      READ POST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.Featurebox}>
        <div className="container">
          <div className="row">
            <h1 className={Styles.h1box}>Most Featured Posts</h1>
            <div className="col-md-6">
              <div className={Styles.new_box}>
                <div className={Styles.top_box}>
                  <h1>APPLE DESIGN</h1>
                  <p>
                    Apple reimagines the <br />
                    iPhone experience <br />
                    with IOS14
                  </p>
                </div>
                <div className={Styles.image_flex}>
                  <div>
                    <img
                      src="/image/p2.svg"
                      alt="Cinque Terre"
                      width="70px"
                      height="70px"
                      className={Styles.apple_img}
                    />
                  </div>
                  <div>
                    <p>Ishmat Jahan</p>
                    <p>10-March-2022</p>
                    <p className={Styles.purple_color}>189k views</p>
                  </div>
                </div>
                <img
                  src="/image/p3.svg"
                  className={Styles.img_thumbnail1}
                  alt="Cinque Terre"
                  width="270px"
                  height="270px"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={Styles.new_box}>
                <div className={Styles.top_box}>
                  <h1>APPLE DESIGN</h1>
                  <p>
                    Apple reimagines the <br />
                    iPhone experience <br />
                    with IOS14
                  </p>
                </div>
                <div className={Styles.image_flex}>
                  <div>
                    <img
                      src="/image/p3.svg"
                      alt="Cinque Terre"
                      width="70px"
                      height="70px"
                      className={Styles.apple_img}
                    />
                  </div>
                  <div className={Styles.box333}>
                    <p>Ishmat Jahan</p>
                    <p>10-March-2022</p>
                    <p className={Styles.purple_color}>189k views</p>
                  </div>
                </div>
                <img
                  src="/image/3333.png"
                  className={Styles.img_thumbnail1}
                  alt="Cinque Terre"
                  width="270px"
                  height="270px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="container">
          <img
            src="/image/bann.png"
            alt="Cinque Terre"
            width={1700}
            height={800}
          />
        </div> */}

        <div className={Styles.bannerImage}>
          <Image src="/image/bann.png" width={1700} height={400} priority />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}>
              <div className="col-md-12">
                {/* <div className={Styles.bannertext}>
                  <h1 className={Styles.mobileH1}>
                    {" "}
                    Best in E Commerce Uploading
                  </h1>
                  <p>
                    Sell more with appealing product entry services from OMRA
                    Solutions!
                  </p>
                </div> */}
              </div>
            </div>
          </div>{" "}
        </div>
      </section>

      <section className="section3">
        <div className="container">
          <div className={Styles.row33}>
            <div>
              <h2>Trending Topics</h2>
            </div>
            <div>
              <h2 className={Styles.heading_blog}>See all topics</h2>
            </div>
          </div>
          <div className={Styles.image_margin}>
            <div>
              <img
                src="/image/travel.png"
                alt="Cinque Terre"
                width="200px"
                height="200px"
              />
              <h4>Travel</h4>
            </div>

            <div>
              <img
                src="/image/sports.png"
                className=""
                alt="Cinque Terre"
                width="200px"
                height="200px"
              />
              <h4>Sports & Fitness</h4>
            </div>
            <div>
              <img
                src="/image/life.png"
                className=""
                alt="Cinque Terre"
                width="200px"
                height="200px"
              />
              <h4>Lifestyles</h4>
            </div>
            <div>
              <img
                src="/image/health.png"
                className=""
                alt="Cinque Terre"
                width="200px"
                height="200px"
              />
              <h4>Health</h4>
            </div>

            <div>
              <img
                src="/image/food.png"
                className=""
                alt="Cinque Terre"
                width="200px"
                height="200px"
              />
              <h4>Food & Drink</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.newsection2}>
        <div className="container">
          <h1 className={Styles.h1box}>Featured Videos</h1>
          <div className="row">
            <div></div>
            <div className="col-md-6">
              <img
                src="/image/midbanner.png"
                className={Styles.video_box3}
                alt="Cinque Terre"
                // width="580px"
                // height="480px"
              />
              <h2>CAREERS</h2>
              <h1 className={Styles.fontbox}>
                Security isn,t just a technology problem its about design, too
              </h1>
              <div className={Styles.fontbox3}>
                <h5>Upasana</h5>
                <h6>3min read</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="/image/shoe.png"
                    className=""
                    alt="Cinque Terre"
                    width="270px"
                    height="200px"
                  />
                  <h2>CAREERS</h2>
                  <p>Get ready to up your creative game with the</p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/image/girll.png"
                    className=""
                    alt="Cinque Terre"
                    width="270px"
                    height="200px"
                  />
                  <h2>CAREERS</h2>
                  <p>Get ready to up your creative game with the</p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/image/game.png"
                    className=""
                    alt="Cinque Terre"
                    width="270px"
                    height="200px"
                  />
                  <h2>CAREERS</h2>
                  <p>Get ready to up your creative game with the</p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/image/bag.gif"
                    className=""
                    alt="Cinque Terre"
                    width="270px"
                    height="200px"
                  />
                  <h2>CAREERS</h2>
                  <p>Get ready to up your creative game with the</p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
