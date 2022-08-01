import Link from 'next/link';
import { useState,useEffect } from 'react';
import Slider from "react-slick";

function BlogSlider({data}) {
    const [asd, setAsd] = useState();
    const [blogsData,setblogsData]=useState([])
    useEffect(() => {
        fetch('https://newblog.omrasolutions.com/wp-json/wp/v2/posts')
          .then((res) => res.json())
          .then((data) => {
            setblogsData(data);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    //   console.log({"syamwala":blogsData})

    const blogs=blogsData.map(item=>item)
    const blogs1=blogs.map(item=>item)
    console.log(blogs1)
  

    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: false,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				
			  }
			},
		]
    };
    const renderArrows = () => {
        return (
            <div className="owl-nav">
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
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{"position":"relative"}}>
                <Slider ref={c => setAsd(c)}
                {...settings} 
                >
                     {blogs.map(item=>{
                        console.log({"amit":item})
                            return(
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.6s"
                    >
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="blog-details-1"><a>
                                    <img
                                        // src="images/blog/blog-grid-1/pic3.jpg"
                                        src={item.jetpack_featured_media_url}
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="blog-details-1"><a>
                                        {/* Quisque sem tortor, convallis in arcu eu,
                                        accumsan finibus. */}
                                        {item.title.rendered.slice(0,50)}...
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                {item.excerpt.rendered.slice(3,200)}...
                            </p>
                               
                                <div className="dlab-meta meta-bottom">
                                   
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>
                                        {item.date.slice(0,10)}
                                    </li>
                                        <li className="post-comment">
                                            <a href="javascript:void(0);">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://www.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                            )
                        })
}
                    
                </Slider>
                {renderArrows()}
            </div>
        </>
    );
  
}

export default BlogSlider;
