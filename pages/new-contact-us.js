import Header2 from "../layout/header-2";
import Image from "next/image";
import Link from "next/link";
import Styles from "../scss/contact-page/contact.module.scss";
import axios from "axios";
import Footer from "./../layout/footer";
import { useEffect, useState } from "react";
import { sendData } from "next/dist/next-server/server/api-utils";

function Contact() {
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Email_Address, setEmail_Address] = useState("");
  const [Phone, setPhone] = useState("");
  const [Job_Title, setJob_Title] = useState("");
  const [Organisation, setOrganisation] = useState("");
  const [Enquiry_Type, setEnquiry_Type] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Comments, setComments] = useState("");

  const [result, setResult] = useState();
  console.log(result);

  const SubmitData = (e) => {
    e.preventDefault();

    sendData = async () => {
      const payload = {
        First_Name: First_Name,
      };
      try {
        await axios
          .post("/api/postcontact/", payload)

          .then(async (response) => {
            console.log(response);
          });
      } catch (err) {
        setCount(count + 1);
      }
    };
    sendData();
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
              <p>We would love to hear from you</p>
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
              <p>
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
                  <p>
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
              <form className="row">
                <div className="col-4">
                  <label htmlFor="fname">First Name* </label>
                  <br></br>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    class="form-control"
                    onChange={(event) => setFirst_Name(event.target.value)}
                  ></input>
                  <br></br>
                  <label for="lname">Last Name*</label>
                  <br></br>
                  <input type="text" id="lname" class="form-control"></input>
                  <br></br>
                  <label for="any">Enquiry Type*</label>
                  <br></br>
                  <select name="any" id="any" class="form-control">
                    <option value>Select</option>
                    <option value={"a"}>A</option>
                    <option value={"b"}>B</option>
                    <option value={"c"}>C</option>
                    <option value={"d"}>D</option>
                  </select>
                </div>
                <div className="col-4">
                  <div className="Second">
                    <label for="phone">Phone* </label>
                    <br></br>{" "}
                    <input type="tel" id="phone" class="form-control"></input>
                    <br></br>
                    <label for="mail">Email Address*</label>
                    <br></br>
                    <input type="email" id="email" class="form-control"></input>
                    <br></br>
                    {/* <div className="row">
                                            <input type="submit" className={`${Styles.submit}`} title="Please read the Privacy Policy before submitting" value="SUBMIT" onClick={SubmitData}></input>
                                        </div> */}
                    <label for="formTerms" className={Styles.formTerms}>
                      By clicking on the submit button, I agree with the Privacy
                      Policy.
                    </label>
                    <input
                      type="submit"
                      className={`${Styles.submit}`}
                      title="Please read the Privacy Policy before submitting"
                      value="SUBMIT"
                      onClick={SubmitData}
                    ></input>
                  </div>
                </div>
                <div className="col-4">
                  <div className="third">
                    <img src="/image/contact.png" alt="img" />
                  </div>
                </div>
                <div className="container">
                  <div className="row"></div>
                </div>
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
