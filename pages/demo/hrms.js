import React from "react";
import Image from "next/image";
import ReusableTab from "../../component/tab/tab";
import AddIcon from "../../component/icons/Add";
import Header2 from "../../layout/header-2";
import Footer from "../../layout/footer";
import Styles from "../../scss/demo/hrms.module.scss";
const Blog = () => {
    return (
        <>
            <Header2 />
            <div className="mainpage">
                <div className={Styles.bannerImage}>
                    <Image
                        src="/images/background/peoplebanner.jpg"
                        width={1700}
                        height={815}
                        priority
                    />
                    <div className={Styles.absolutePart}>
                        <div className={` ${Styles.mobileRes} row`}>
                            <div className="col-md-12">
                                <div className={Styles.bannertext}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainpage">
                <div className={Styles.bannerImage1}>
                    <Image
                        src="/images/background/midbanner3.png"
                        width={1700}
                        height={1100}
                        priority
                    />
                    <div className={Styles.feature_Box}>
                        <div className="col-md-12">
                            <h2 className={Styles.feature_Box3}>A Complete HRMS Suite</h2>
                            <h1 >Payroll Software with Automated Compliances
                            </h1>

                            <p>HRMS is a new-age, enterprise-ready HRMS suite that enables enterprises to automate their day-to-day HR processes, simplifies human interactions, delivers actionable insights to build better workplaces and achieve their strategic HR goals faster and smarter.</p>
                            <div className={Styles.flex1_box}>
                                <div className={Styles.outline_button}><button type="button" className="btn33 " >Get Started</button></div>
                                <div className={Styles.requestButton}><button type="button" className="btn33 " >Request Demo</button></div>

                            </div>
                            <p className={Styles.midPara}>Get 30 days of free trials</p>
                            <h2>HRM Solutions for SME's</h2>

                            <h2 className={Styles.feature_Box4}>Check out our HRMS with amazing features!</h2>
                            <p className={Styles.parea}>We help you simplify your HR operations by taking away the need for time consuming manual processes with our easy to set up system, giving you more time to focus on what’s important - your company’s growth and your employees’ wellbeing. We are focusing on automating their payroll, staying in sync with every law, and delighting their employees.</p>


                            <div className={Styles.top_Para}>
                                <div>  <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp; Store Managment
                                    <br />

                                    <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp;Reporting & Order Tracking Managment
                                    <br />
                                    <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp; Invoice and Tag Generation
                                    <br />
                                </div>
                                <div>
                                    <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp; Plant / Warehouse Managment
                                    <br />
                                    <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp;Rider Mobile Applications-POS
                                    <br />

                                    <img src="/image/arrow3.svg" alt="icon" />
                                    &nbsp;Rider Mobile Applications-POS
                                    <br />
                                </div>



                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <section className="mydiv22">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="valuecontent1" style={{ marginLeft: "-178p" }}>


                                <p className={Styles.multi_para}>Do you manage payroll for multiple customers?</p>
                                <h1 className={Styles.valuecontent3}>Come join our Chartered Accountant Partner program</h1>
                                <div className={Styles.outline_button}><button type="button" className="btn33 " >Click Here</button></div>
                                <h4>Built for Startups</h4>
                                <p className={Styles.multi_para33}>60+ YC and Surge startups use OMRA to simplify their payroll. Here's why</p>



                            </div>
                        </div>
                        <div className="col-md-7">
                            <img src="/image/hrmscombine.svg" alt="img" className="hireimages1" />
                            <br />  <br />

                        </div>
                    </div>
                </div>
            </section>

            <div className={Styles.bannerImageMid}>
                <Image
                    src="/image/hrmss.png"
                    width={1700}
                    height={700}
                    priority
                />

            </div>


            <section className="mydiv22">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="valuecontent1" style={{ marginLeft: "-178p" }}>
                                <p className={Styles.paraimg}>On-time Periodic upgrade and evolution,ideal integrations with our

                                </p>
                                <h1 className={Styles.valuecontent1}>HRM Solution!</h1>

                                <p style={{ padding: "0" }}>
                                    Are you worried if your employees might not be able to adapt to fully- fledged HR software? We know that change in the workplace is not easy as it seems and we’re here to help. With our HRMS you will have a complete foundation to digitally transform the manual work. What's more? We have our own team to make editing in your software, giving you access to training tools & learning materials to help your company for becoming smart organization with the smart work procedure.
                                </p>



                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/image/grid.jpg" alt="img" className="hireimages1" />
                            <br />  <br />

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
