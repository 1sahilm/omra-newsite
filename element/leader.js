import Slider from "react-slick";
import { useRef, useState } from "react";
import Styles from "../scss/leadercss/leader.module.scss";

function Leadership() {
  const sliderRef = useRef(null);

  const [slider1, setSlider1] = useState();
  const [slider2, setSlider2] = useState();
  const settings = {
    dots: false,
    arrows: false,
    // centerMode: true,
    slidesToShow: 1,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          dots: false,
          arrows: false,
          // centerMode: true,
          slidesToShow: 1,
          // dots: true,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          // centerMode: false,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="content-inner-2 hullheight justify-center"
        style={{
          backgroundImage:
            "url(images/background/2ac58ca3c5e1d553148f12ba1d7a38e8.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <div className="omra-leadersection">
          <div className="container">
            <div className="row">
              <div className="col-2 omra-leadership">
                <h1 className={Styles.leaderheading}>Thought Leadership</h1>
              </div>
              <div className="col-4 omra-leadership">
                <Slider
                  asNavFor={slider2}
                  ref={(slider) => setSlider1(slider)}
                  className="leader_tht"
                  {...settings}
                >
                  <div>
                    <img src="/images/background/leader1.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-1" target="_blank">
                        <span>
                          WHY INDIAN SMEs MARKETING IS LENDING BEHIND IN SALES?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>

                  <div>
                    <img src="/images/background/leader2.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-2" target="_blank">
                        <span>
                          Indian SMEs: What should they learn from our
                          Leadership Thoughts?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="/images/background/leader3.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-2" target="_blank">
                        <span>
                          Here are some key pointers for your marketing
                          technique:-
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="/images/background/leader4.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-1" target="_blank">
                        <span>
                          WHY INDIAN SMEs MARKETING IS LENDING BEHIND IN SALES?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                </Slider>
              </div>
              <div className="col-6">
                <Slider
                  asNavFor={slider1}
                  ref={(sliderTwo) => setSlider2(sliderTwo)}
                  slidesToShow={2}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src="/images/background/leader2.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-1" target="_blank">
                        <span>
                          WHY INDIAN SMEs MARKETING IS LENDING BEHIND IN SALES?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="/images/background/leader3.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-2" target="_blank">
                        <span>
                          Indian SMEs: What should they learn from our
                          Leadership Thoughts?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="/images/background/leader4.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-2" target="_blank">
                        <span>
                          Here are some key pointers for your marketing
                          technique:-
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="/images/background/leader1.jpg" alt="" />
                    <p className={Styles.leaderpara}>
                      <a href="/leadership-1" target="_blank">
                        <span>
                          WHY INDIAN SMEs MARKETING IS LENDING BEHIND IN SALES?
                        </span>
                        <i></i>
                      </a>
                    </p>
                  </div>
                </Slider>
                {/* <div className={Styles.leaderarrow}> <img src="https://files.techmahindra.com/static/img/nxt/arrow-right-nxt-now.png" alt="" /> </div>
        <div className={Styles.leaderarrow}> <img src="https://files.techmahindra.com/static/img/nxt/arrow-left-nxt-now.png" alt="" /> </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadership;
