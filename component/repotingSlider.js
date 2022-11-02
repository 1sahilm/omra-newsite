import { useState } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

function ReportSlider() {
  const [asd, setAsd] = useState();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: true,
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
          centerMode: true,
          slidesToShow: 1,
          dots: true,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav unique">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="">
              <div className="slider">
                <img src="/images/background/HRM.jpg" alt="" />

                <div className="omra-slider ">
                  <div className="col-6 omra-slider-p">
                    <p>
                      Omra Solutions recognized amongst Global Top 100 Most
                      Sustainable Organizations 2021 by Corporate Knights
                    </p>
                    <div className="slidertextblock1 slidertextblock1_a">
                      <Link href="/hrms" className="sldrr3">
                        <a>
                          <span className="sldr3">Know More</span>
                          <i></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="">
              <div className="slider">
                <img src="/images/background/e-laundary.jpeg" alt="" />

                <div className="omra-slider ">
                  <div className="col-6 omra-slider-p">
                    <p>
                      Omra Solutions recognized amongst Global Top 100 Most
                      Sustainable Organizations 2021 by Corporate Knights
                    </p>
                    <div className="slidertextblock1">
                      <Link href="/hrms" className="sldrr3">
                        <a>
                          <span className="sldr3">Know More</span>
                          <i></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="">
              <div className="slider">
                <img src="/images/background/crm.jpeg" alt="" />

                <div className="omra-slider ">
                  <div className="col-6 omra-slider-p">
                    <p>
                      HRMS of OMRA Solutions is a Powerful platform that will
                      automate our HR processes and elevate HR efficiency on
                      single modular software!
                    </p>
                    <div className="slidertextblock1">
                      {" "}
                      <Link href="/hrms" className="sldrr3">
                        <a>
                          <span className="sldr3">Know More</span>
                          <i></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s" */}
          {/* > */}
          {/* <div className="">
                       
                       <div className="slider">
                           <img src="/images/background/home-terra-carta.jpg" alt="" />
                       
                       <div className="omra-slider ">
                       <div className="col-6">
                               <p>Omra Solutions recognized amongst Global Top 100 Most Sustainable Organizations 2021 by Corporate Knights</p>
                               <div className="slidertextblock1">  <a href="#" className='sldrr3'><span className='sldr3'>Know More</span>
                             <i></i></a>
                                </div>
                           </div>
                       </div>
                          
                            
                       </div>
                       
                          
                   </div> */}
          {/* </div> */}
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default ReportSlider;
