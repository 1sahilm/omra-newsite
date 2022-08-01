import { useState } from 'react';
import Slider from "react-slick";


function LeadershipCarousel() {
    const [asd, setAsd] = useState();
    const settings = {
        accessibility: true,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '150px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        fade: true,
        lazyLoad: 'progressive',
        verticalSwiping: false,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        focusOnSelect: true,
      
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    settings: 'unslick',
                }
            }
        ]
    };
    const renderArrows = () => {
        return (
            <div className="owl-nav unique">
                <div
                    className="owl-prev"
                    onClick={() => asd.slickPrev()}
                >
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div
                    className="owl-next"
                    onClick={() => asd.slickNext()}
                >
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
                <Slider
                    ref={c => setAsd(c)}
                    {...settings}

                >
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"

                    >
                        <div className="">

                            <div className="slider">
                                <img src="/images/background/home-terra-carta.jpg" alt="" />




                            </div>


                        </div>
                    </div>
                    
                 
                </Slider>
                {renderArrows()}
            </div>
        </>
    );
}

export default LeadershipCarousel;
