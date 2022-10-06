import Blog2 from "../element/blog-2";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import HomeSlider from "../element/home-slider";
import Secondsec from "../element/secondsec";
import Fourthsection from "../element/fourthsection";
import ReportSection from "../element/reportsection";
import Leadership from "../element/leader";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        {/* <HomeSlider /> */}
        {/* <Secondsec /> */}
        {/* <Fourthsection /> */}
        <Leadership />
        {/* <ReportSection /> */}
        {/* <Blog2 /> */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
