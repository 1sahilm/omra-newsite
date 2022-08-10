import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "react-slick";

function whoweSlider({ data }) {
  const [asd, setAsd] = useState();
  const [blogsData, setblogsData] = useState([]);
  useEffect(() => {
    fetch("https://newblog.omrasolutions.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setblogsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log({"syamwala":blogsData})

  const blogs = blogsData.map((item) => item);
  const blogs1 = blogs.map((item) => item);
  console.log(blogs1);

  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
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
      <div className="owl-nav">
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
      <div
        className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary"
        style={{ position: "relative" }}
      >
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {blogs.map((item) => {
            console.log({ amit: item });
            return (
              <div
                className="item wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              ></div>
            );
          })}
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default whoweSlider;
