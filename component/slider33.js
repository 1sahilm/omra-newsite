import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        loop:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
    };
    return (
        <Slider {...settings}>

<div className="div_boxslider">
                <h3 className="newslider">IT Development</h3>
                <p>
                  We develop smart platform and software with our expertise.
                  We are in platform development; SaaS based platforms &
                  mobile application development.
                </p>
                <a href="" className="newslider333">
                  View more
                </a>
              </div>

              <div className="div_boxslider">
              <h3 className="newslider">Voice Blend Process</h3>
                  <p>
                  We are working on Inbound/Outbound process, business process outsourcing, and Sales processes with amazing & great experience & dedicated team.
                  </p>
                <a href="" className="newslider333">
                View more
                </a>
              </div>
         
             
              <div className="div_boxslider">
              <h3 className="newslider">E-commerce product uploading</h3>
             
                  <p>
                  We work on e-commerce product uploading for renowned brands, where we are responsible for digital catalog uploading with elegant product descriptions. 
                  </p>
                <a href="" className="newslider333">
                View more
                </a>
              </div>
              
            



        </Slider>
    );
}