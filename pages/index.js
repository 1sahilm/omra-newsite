import { useEffect } from "react";
import AboutUs2 from "../element/aboutUs-2";
import Blog2 from "../element/blog-2";
import Clients2 from "../element/clients-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Pricing2 from "../element/pricing-2";
import Projects2 from "../element/Projects-2";
import Service2 from "../element/service-2";
import Slider3 from "../element/slider-3";
import Testimonial2 from "../element/testimonial-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import HomeSlider from "../element/home-slider";
import Secondsec from "../element/secondsec";
import Thirdsection from "../element/thirdsection";
import Fourthsection from "../element/fourthsection";
import ReportSection from "../element/reportsection";
import Leadership from "../element/leader";
// import Slider1 from "../element/slider-3"
// import "../css/skin/skin-1.css";
// import "react-multi-carousel/lib/styles.css";


function Index2() {
 
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
   <HomeSlider />
        {/* <Slider3 /> */}
       
        {/* <Service2 /> */}
        {/* <Counter2 /> */}
        {/* <Thirdsection /> */}
        <Secondsec />
        {/* <AboutUs2 /> */}
        <Fourthsection />
        <Leadership />
        {/* <OurServices2 />
        <Projects2 />
        <Pricing2 /> */}
<ReportSection />
        {/* <Testimonial2 /> */}
        <Blog2 />
        {/* <div className="pop">
        <h1>Popup/Modal Windows without JavaScript</h1>
<div class="box">
	<a class="button" href="#popup1">Let me Pop up</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Here i am</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
</div>
        </div> */}
        {/* <Clients2 /> */}
      </div>
      {/* <Footer2 /> */}
      <Footer/>
    </>
  );
}

export default Index2;
