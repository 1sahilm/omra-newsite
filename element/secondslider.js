import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import Link from "next/link"


function SecondSlider() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={1700}
        slidesToScroll={1}
        className="homeSlider secSlider"
      >
        <div
          className="slider-image"
          style={{
            backgroundImage:
              "url('/images/background/AdobeStock_257675510.jpeg')",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <div className="bg"><Image src="/images/background/sec1.png" alt="image1" width={1200} height={500}/></div> */}
          <div className="container text slider-border second-container">
            <div className="slider-texto">
              <h5>Dedicated Teams</h5>
              <p>
                Our expertise teams are creating breakthroughs for <br />
                our clients, and partners.
              </p>
              <div className="slidertextblock">
                {" "}
                <Link href="/about-us">
                  <a>
                    <span>Know More</span>
                    <i></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-image"
          style={{
            backgroundImage: "url('/images/background/hhh.png')",
            width: "100%",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <div className="bg"><Image src="
Zoom https---files.techmahindra.com-static-img-smart-blockchain-thumb.jpg
https://files.techmahindra.com/static/img/smart-blockchain-thumb.jpg
 " alt="image1" width={1200} height={500}/></div> */}
          <div className="container text slider-border">
            <div className="slider-texto">
              <h5>24/7 communication</h5>
              <p>
                We are always there for you. Let’s talk today and <br />
                see what we can do for you
              </p>
              <div className="slidertextblock">
                {" "}
                <Link href="/about-us">
                  <a>
                    <span>Know More</span>
                    <i></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-image"
          style={{
            backgroundImage: "url('/images/background/hh.png')",
            width: "100%",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <div className="bg"><Image src="/images/background/sec3.png" alt="image1" width={1200} height={500}/></div> */}
          <div className="container text slider-border">
            <div className="slider-texto">
              <h5>Brainstorming Ideas</h5>
              <p>
                We build & strategize solutions based on your vision
                <br /> that can be the best ideation
              </p>
              <div className="slidertextblock">
                {" "}
               <Link href="/about-us">
                  <a>
                    <span>Know More</span>
                    <i></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-image"
          style={{
            backgroundImage: "url('/images/background/lets see.png')",
            width: "100%",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <div className="bg"><Image src="/images/background/jagdish-homepage-thumb.png" alt="image1" width={1200} height={500}/></div> */}
          <div className="container text slider-border">
            <div className="slider-texto">
              <h5>Compliance & Security</h5>
              <p>
                ISO Certified 9001:2015 Quality Management Systems
                <br /> ICI/6885801/21
              </p>
              <div className="slidertextblock">
                {" "}
                <Link href="/about-us">
                  <a>
                    <span>Know More</span>
                    <i></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default SecondSlider;
