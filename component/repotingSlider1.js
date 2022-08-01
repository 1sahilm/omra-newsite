import { useState } from 'react';
import Slider from "react-slick";


function ReportSlider1() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:false,
        arrows:false,
        centerMode:true,
        slidesToShow:1,
        dots:true,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
          dots:false,
          arrows:false,
          centerMode:true,
          slidesToShow:1,
          dots:true,
          infinite:true,
          slidesToScroll:1,
          autoplay:true,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
        autoplay:false,
				dots: false,
				centerMode:false,
			  }
			},
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
                            <img src="/images/background/terra.jpg" alt="" />
                        
                        <div className="omra-slider ">
                        <div className="col-6">
                                <p>Oamra Solutions recognized amongst Global Top 100 Most Sustainable Organizations 2021 by Corporate Knights</p>
                             <div className="slidertextblock1">  <a href="#" className='sldrr3'><span className='sldr3'>Know More</span>
                             <i></i></a>
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
                       
                          
                   </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="">
                       
                       <div className="slider thirdSlider">
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
                       
                       <div className="omra-slider ">
                       <div className="col-6">
                               <p>Omra Solutions recognized amongst Global Top 100 Most Sustainable Organizations 2021 by Corporate Knights</p>
                               <div className="slidertextblock1">  <a href="#" className='sldrr3'><span className='sldr3'>Know More</span>
                             <i></i></a>
                                </div>
                           </div>
                       </div>
                          
                            
                       </div>
                       
                          
                   </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default ReportSlider1;
