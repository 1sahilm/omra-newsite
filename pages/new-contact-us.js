import Header2 from "../layout/header-2";
import Image from "next/image";
import Link from "next/link";
import Styles from "../scss/contact-page/contact.module.scss";
import axios from "axios";
import Footer from "./../layout/footer";
import { useEffect, useState } from "react";
import { sendData } from "next/dist/next-server/server/api-utils";

function Contact() {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    enquiry: "",
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
    <>
      <Header2 />

      <div className={` ${Styles.omracontact} container-fluid`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <strong> Contact Us </strong>
              <br></br>
              <p className="contactPara1">We would love to hear from you</p>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className={` ${Styles.omracontact1} container-fluid`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="gradient-color">
                Latitude &amp; Longitude<br></br>
                Connected in 3+ Cities - Noida, Hyderabad, Mumbai
              </h2>
              <br></br>
              <p className="contactPara">
                Explore our service offerings and subsidiaries in specific
                geography.
              </p>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <div>
        <div className={` ${Styles.Contact}`}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="gradient-color">Connect With Us</h3>
                <div className={` ${Styles.subheading}`}>
                  <p className="contactPara">
                    Got a query? Kindly fill in the form and we shall get back
                    to you.
                  </p>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
        <div className={` ${Styles.Form}`}>
          <div className="formsection">
            <div className="container">
              <form className="row" onSubmit={onSubmitForm}>
                <div className="col-4">
                  <div className={Styles.contactSection33}>
                    <label htmlFor="fname">First Name* </label>
                    <br></br>{" "}
                    <input
                      type="text"
                      id="fname"
                      value={inputs.text}
                      name="fname"
                      class="form-control"
                      onChange={handleChange}
                    ></input>
                    <br></br>
                    <label for="lname">Last Name*</label>
                    <br></br>
                    <input
                      type="text"
                      id="lname"
                      value={inputs.text}
                      class="form-control"
                      onChange={handleChange}
                    ></input>
                    <br></br>
                    <label for="any">Enquiry Type*</label>
                    <br></br>
                    <select
                      name="any"
                      id="any"
                      class="form-control"
                      onChange={handleChange}
                    >
                      <option value>Select</option>
                      <option value={"a"}>VOICE PROCESS</option>
                      <option value={"b"}>HRMS</option>
                      <option value={"c"}>ELAUNDRY</option>
                      <option value={"d"}>CRM</option>
                    </select>
                  </div>{" "}
                </div>
                <div className="col-4">
                  <div className="Second">
                    <label for="phone">Phone* </label>
                    <br></br>{" "}
                    <input
                      type="tel"
                      id="phone"
                      value={inputs.tel}
                      class="form-control"
                      onChange={handleChange}
                    ></input>
                    <br></br>
                    <label for="mail" onChange={handleChange}>
                      Email Address*
                    </label>
                    <br></br>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      value={inputs.email}
                      onChange={handleChange}
                    ></input>
                    <br></br>
                    <label for="formTerms" className={Styles.formTerms}>
                      By clicking on the submit button, I agree with the Privacy
                      Policy.
                    </label>
                    <input
                      type="submit"
                      className={`${Styles.submit}`}
                      title="Please read the Privacy Policy before submitting"
                      value="SUBMIT"
                    ></input>
                  </div>
                </div>
                <div className="col-4">
                  <div className="third">
                    <img
                      src="/image/contact.png"
                      alt="img"
                      className={Styles.contactImg}
                    />
                  </div>
                </div>
                <div className="container">
                  <div className="row"></div>
                </div>
                <RedirectToThankYou />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
