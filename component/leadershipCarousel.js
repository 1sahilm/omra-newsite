import { useState } from 'react';
import Slider from "react-slick";


function LeadershipCarouselTwo() {
    const [asd, setAsd] = useState();
    const settings = {
        accessibility: true,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '150px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: false,
        fade: false,
        lazyLoad: 'progressive',
        verticalSwiping: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        focusOnSelect: true,
        // prevArrow: $('.sect10 .qarrow-set .1arrow-prev'),
        // nextArrow: $('.sect10 .qarrow-set .1arrow-next'),
        // asNavFor: '.tho-caro-wrap .tho-caro',
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3
                },
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                },
                breakpoint: 670,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
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
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.4s"
                    >
                        <div className="">

                            <div className="slider">
                                <img src="/images/background/home-terra-carta.jpg" alt="" />




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
                                <img src="/images/background/home-terra-carta.jpg" alt="" />




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

export default LeadershipCarouselTwo;
