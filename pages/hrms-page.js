import React from "react";
import AddIcon from "../component/icons/Add";
import ReusableTab from "../component/tab/tab";
import Footer from "../layout/footer";
import Header2 from "../layout/header-2";
// import Styles from "../scss/demo/demo.module.scss";
import Styles from "../scss/demo/hrmspage.module.scss";
import { useState } from "react";
import image from "next/image";
import Image from "next/image";

function HrmsPage() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [loading, setLoading] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading("loading");
    try {
      const res = await fetch(`api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      console.log(data);
      setLoading("done");
    } catch (error) {
      setLoading("error");
      console.log(error);
    }
  };

  console.log(inputs);

  const RedirectToThankYou = () => {
    switch (loading) {
      case "loading":
        return <div>Sending....</div>;
      case "done":
        return (
          <div className={Styles.mail_sucess}>
            Sent successfully
            <meta httpEquiv="refresh" content="1; url = /thanku" />
          </div>
        );
      case "error":
        return <div>Error</div>;

      default:
        return null;
    }
  };

  return (
    <div>
      <>
        <Header2 />
        <section className="mydiv00133">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Experience our delightful cloud based HRM software!</h1>
                <p style={{ padding: "0" }}>
                  Let's get engaged with our HRM software in a smoother way with
                  our easy-to-use & affordable HRM and payroll outsourcing
                  services.
                </p>
              </div>
              <div className="col-md-6">
                <div className={Styles.bgwgite}>
                  <div class="contact-form-wrapper d-flex justify-content-center">
                    <form onSubmit={onSubmitForm}>
                      <h1 className={Styles.blackHeading}>Contact us</h1>
                      <div>
                        <input
                          type="text"
                          className="form-control  mb-3 form-input"
                          id="name"
                          value={inputs.text}
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          id="email"
                          type="email"
                          className="form-control  mb-3 form-input"
                          placeholder="Email"
                          required
                          value={inputs.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          id="phone"
                          type="tel"
                          value={inputs.tel}
                          className="form-control  mb-3 form-input"
                          placeholder="Phone"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          id="company"
                          type="text"
                          className="form-control  mb-3 form-input"
                          placeholder="Company Name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div></div>
                      <div className="submit-button-wrapper">
                        <input
                          type="submit"
                          value="Get One Month Free Trail"
                          className={Styles.buttonViolet}
                        />
                      </div>
                      <RedirectToThankYou />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={Styles.mydivhrms}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <Image
                    src="/image/single.jpg"
                    width={450}
                    height={400}
                    alt="img"
                    className={Styles.imageSize}
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="valuecontentth">
                  <h1>HRM Solution for Small & medium-sized businesses</h1>
                  <p className={Styles.checkPara}>
                    Check out our HRMS with amazing features!
                  </p>
                  <p>
                    We help you simplify your HR operations by taking away the
                    need for time consuming manual processes with our easy to
                    set up system, giving you more time to focus on what’s
                    important - your company’s growth and your employees’
                    wellbeing. We are focusing on automating their payroll,
                    staying in sync with every law, and delighting their
                    employees.
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" />
                      Leave and Attendance Management
                    </div>
                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" />
                      Employee Management
                    </div>
                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" />
                      Employee on boarding & off boarding
                    </div>

                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" />
                      Payroll Management
                    </div>
                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" /> Document Management
                    </div>
                    <div className="col-md-6">
                      <img src="/image/4.png" alt="icon" />
                      Performance & Appraisal Management
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={Styles.bannerImageMid}>
          <img
            src="/image/chinese.jpg"
            width={1263}
            height={650}
            priority
            className={Styles.mobileImage}
          />

          <div className={Styles.absolutePart33}>
            <h1>Give thumbs up to our 30 Days free trial!</h1>

            <p>
              Join our 30 days free trial for a hands-on experience of what you
              are in for. Think you might need more time to explore? Connect
              with us now.
            </p>
            <p>“Isn’t this HRM interesting, would you sign up today?”</p>

            <div className={Styles.outline_buttonGreen}>
              <button type="button" className={Styles.btn33}>
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
        <section className="mydiv22">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="valuecontent1" style={{ marginLeft: "-178p" }}>
                  <p className={Styles.paraimg}>
                    On-time Periodic upgrade and evolution, ideal Integrations
                    with our HRM Solution!
                  </p>
                  {/* <h1 className={Styles.valuecontent1}>HRM Solution!</h1> */}
                  <p style={{ padding: "0" }}>
                    Are you worried if your employees might not be able to adapt
                    to fully fledged HR software&#63; We know that change in the
                    workplace is not easy as it seems and we&apos;re here to
                    help. With our HRMS you will have a complete foundation to
                    digitally transform the manual work. What&apos;s more&#63;
                    We have our own team to make editing in your software&#44;
                    giving you access to training tools &amp; learning materials
                    to help your company for becoming smart organization with
                    the smart work procedure.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/image/faces.png" alt="img" className="hireimages1" />
                <br /> <br />
              </div>
            </div>
          </div>
        </section>
        <section className={Styles.mydivhrms}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    src="/image/different.jpg"
                    width={552}
                    height={450}
                    alt="img"
                    className={Styles.imageSize}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={Styles.valuecontentth}>
                  <h1>What Makes Us Different?</h1>

                  <div className="row">
                    <h4> 👉 Affordable Cloud HRM Software</h4>

                    <h4>👉 Easy to use & operate</h4>
                    <h4> 👉 Easy to operate & integrate</h4>

                    <h4>👉 Extensive & effective training</h4>

                    <h4>👉 Complete payroll outsourcing service</h4>
                    <h4>👉 Packages especially designed for SME’s</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={Styles.hrmsBox}>
          <h1 className={Styles.hrmsColor}>Get A 1 Month Trail</h1>
          <h2 className={Styles.hrmsColor}>
            The budget friendly HR Management System that you need
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={Styles.packageOne}>
                  <h3>PACKAGE 1 </h3>

                  <h4 className={Styles.priceSection}>INR40 /employee</h4>
                  <ul>
                    <li>
                      <span>&#10003;</span>
                      Employees(Staff Dashboard, Employees, Roles, Shifts)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Payrole
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Timesheet(Timesheet Dashboard, Attendance, Update
                      Attendance, Monthly timesheet, Calendar, Overtime Request)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      HR Calender
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Manage Leaves
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Self-Service HR
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Mobile Application
                    </li>

                    <li>
                      <div className={Styles.outline_button}>
                        <button type="button" className={Styles.btn33}>
                          Get Started
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className={Styles.packageTwo}>
                  <h3>PACKAGE 2 </h3>

                  <h4 className={Styles.priceSection}>INR40 /employee</h4>
                  <ul>
                    <li>
                      <span>&#10003;</span>
                      Employees(Staff Dashboard, Employees, Roles, Shifts)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Payrole
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Core HR(Awards, Transfers, Resignations, Travels,
                      Promotions,Complaints, Warnings, Terminations, Employees
                      Exit,Employees last login)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Organization(Companies, Locations, Department,
                      Designation, Announcements, Policies)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Timesheet(Timesheet Dashboard, Attendance, Update
                      Attendance, Monthly timesheet, Calendar, Overtime Request)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      HR Calender
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Manage Leaves
                    </li>

                    <li>
                      <span>&#10003;</span>
                      Recruitment(Job Posts, Job Candidates, CMS Pages)
                    </li>
                    <li>
                      <span>&#10003;</span>
                      Performance
                    </li>
                    <li>
                      <div className={Styles.outline_button}>
                        <button type="button" className={Styles.btn33}>
                          Get Started
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default HrmsPage;
