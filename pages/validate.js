import Header2 from "../layout/header-2";
import Image from "next/image";
import Link from "next/link";
import Styles from "../scss/contact-page/contact.module.scss";



function new_contact_us() {
    return (
        <>
            <Header2 />

            <div className={` ${Styles.omracontact} container-fluid`}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <strong> Contact Us </strong><br></br>
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
                            <h2>Latitude & Longitude<br></br>
                                Connected in 90+ Countries</h2><br></br>
                            <p>Explore our service offerings and subsidiaries in specific geography.</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div>
                <div className={` ${Styles.Collection} `}>
                    <div className="container">
                        <div className={` ${Styles.Collectionrow} row`}>

                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.a} col`}><p>North <br></br>Americas</p></div> </a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.b} col`}><p>South <br></br>America</p></div> </a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.c} col`}><p>Africa</p></div></a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.d} col`}><p>Europe</p></div> </a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.a} col`}><p>Middle <br></br>East</p></div> </a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.b} col`}><p>Asia</p></div> </a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.c} col`}><p>India</p></div></a>
                            <a href="#" className={Styles.collectionbox}> <div className={` ${Styles.d} col`}><p>Australia & <br></br> New <br></br>Zealand</p></div> </a>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={` ${Styles.Contact}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h3>Connect With Us</h3>
                                <div className={` ${Styles.subheading}`}><p>Got a query? Kindly fill in the form and we shall get back to you.</p></div>
                            </div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                </div>
                <div className={` ${Styles.Form}`}>
                    <div className="formsection">
                        <div className="container">
                            <form action="abc" method="post" className="row">
                                <div className="col-4">





                                    <label for="fname">First Name* </label><br></br> <input type="text" id="fname" class="form-control"></input><br></br>
                                    <label for="phone">Phone* </label><br></br> <input type="tel" id="phone" class="form-control"></input><br></br>

                                    <label for="any">Enquiry Type*</label><br></br>
                                    <select name="any" id="any" class="form-control">

                                        <option value>Select</option>
                                        <option value={'a'}>A</option>
                                        <option value={'b'}>B</option>
                                        <option value={'c'}>C</option>
                                        <option value={'d'}>D</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <div className="Second">
                                        <label for="lname">Last Name*</label><br></br>
                                        <input type="text" id="lname" class="form-control"></input><br></br>
                                        <label for="jtitle"> Job Title*</label><br></br>
                                        <input type="text" id="jtitle" class="form-control"></input><br></br>

                                        <label for="country"> Country*</label><br></br>
                                        <select name="x" id="x" class="form-control">
                                            <option value={`coun`}>Select</option>
                                            <option value={`coun`}>Afghanistan</option>
                                            <option value={`coun`}>Aland Islans</option>
                                            <option value={`coun`}>Albania</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="third">
                                        <label for="mail">Email Address*</label><br></br>
                                        <input type="email" id="email" class="form-control"></input><br></br>

                                        <label for="company">Company/Organisation*</label><br></br>
                                        <input type="text" id="Company" class="form-control"></input><br></br>

                                        <label for="industry">Industry</label><br></br>
                                        <select name="y" id="y" class="form-control">
                                            <option value={`ind`}>Select</option>
                                            <option value={`ind`}>Communication</option>
                                            <option value={`ind`}>Media & Entertainment</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="formComments">Comments</label><br></br>
                                            <textarea type="text" id="formComments" name="formComments" class="form-control"></textarea>

                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <label for="formTerms" className={Styles.formTerms}>By clicking on the submit button, I agree with the Privacy Policy.</label>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <input type="submit" className={`${Styles.submit}`} title="Please read the Privacy Policy before submitting" value="SUBMIT"></input>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default new_contact_us;