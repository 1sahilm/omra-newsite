import { useEffect } from "react";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import Link from "next/link";
// import "../css/skin/skin-1.css";

function intelligent_automation() {
    return (
        <>
            <Header2 />

            {/* <!-- Banner  --> 
            <div className="container-fluid box-full" >
                <img src="/intelligentautomationimages/banner.jpg" alt="banner" />

                <div className="bannertextbox">
                    <p className="text-block1">#UNLOCKEXPERIENCES WITH AI</p>
                    <p className="text-block">Deliver superior experiences through intelligent automation, with AQT</p>
                </div>
            </div>



            <h2 className="text-center  padding-section">OUR APPROACH</h2>*/}

            <section>
                <div className="image-section1">
                    <div className="container">
                        <h1 className="banner-title">#UNLOCKEXPERIENCES WITH AI </h1>
                        <p>Deliver superior experiences through intelligent automation, with AQT</p>
                    </div>
                </div>
            </section>
            {/* <!-- Section 1 Starts --> */}
            <section className="section-box section44">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="section-box-top"> Experiences Begin with Smarter Processes</h4>
                            <p className="paragraph-section">Automation and AI results in increased business efficiency and smart processes; however, the larger picture here is all about the usage of time saved and the insights gained for crafting craft extraordinary experiences – the ones that not only are personalized, but also distinctive enough to keep customers coming back for more</p>
                            {/* For Button*/}
                            <div className="slidertextblock">
                                {/* <a href="#" ><span>Button</span><i></i></a> */}
                                <a href="#" ><span>Know More</span><i></i></a>
                            </div>

                        </div>
                        <div className="col-6 section1" >
                            <img src="/intelligentautomationimages/section1.jpg" alt="section1" />
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Section 2 Starts --> */}
            <section className="section-box section45">
                <div className="container">
                    <div className="row">
                        <div className="col-6 section2-img ">
                            <img src="/intelligentautomationimages/section2.jpg" alt="section2" />
                        </div>
                        <div className="col-6">
                            <div className="section-text">
                                <h4> Experiences Begin with Smarter Processes</h4>
                                <p className="paragraph-section">Automation and AI results in increased business efficiency and smart processes; however, the larger picture here is all about the usage of time saved and the insights gained for crafting craft extraordinary experiences – the ones that not only are personalized, but also distinctive enough to keep customers coming back for more</p>
                                {/* For Button*/}
                                <div className="slidertextblock">
                                    {/* <a href="#" ><span>Button</span><i></i></a> */}
                                    <a href="#" ><span>Know More</span><i></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* <!-- OUR INSIGHT Starts --> */}
            <h2 className="text-center">OUR INSIGHT</h2>


            <div className="container section46">
                <div className="row">
                    <div className="col-3">
                        <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
                        <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                    <div className="col-3 ">
                        <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
                        <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                    <div className="col-3 ">
                        <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
                        <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                    <div className="col-3 ">
                        <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
                        <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>

                </div>
            </div>


            {/* <!-- #UNLOCKEXPERIENCES FOR A CONNECTED FUTURE  Starts --> */}
            <section className="section-box section47">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 > Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            <p className="paragraph-section"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>


                            {/* For Button*/}
                            <div className="slidertextblock">
                                {/* <a href="#" ><span>Button</span><i></i></a> */}
                                <a href="#" ><span>Know More</span><i></i></a>
                            </div>


                        </div>
                        <div className="col-6 section1">

                            <img src="/intelligentautomationimages/section3.jpg" alt="section3" />
                        </div>


                    </div>
                </div>
            </section>



            <Footer />
        </>
    );
}
export default intelligent_automation;


