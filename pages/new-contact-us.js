import Header2 from "../layout/header-2";
import Image from "next/image";
import Link from "next/link";
import Styles from "../scss/contact-page/contact.module.scss";
import axios from "axios";
import Footer from "./../layout/footer";
import { useEffect, useState } from "react";
import { sendData } from "next/dist/next-server/server/api-utils";



function Contact() {
    // const {register,handleSubmit, formState:{erros}} = useForm();
    // const myfun =() =>{
    //     alert('button is clicked');
    //     }
    // const [Data ,setData]= useState(

    //     First_Name="",
    //     Last_Name="",
    //     Email_Address ="",
    //     Phone ="",
    //     Job_Title  ="",
    //     Organisation  ="",
    //     Enquiry_Type ="",
    //     Industry ="",
    //     Enquiry_Type ="",
    //     Comments=""



    // )
    const [First_Name, setFirst_Name] = useState('')
    const [Last_Name, setLast_Name] = useState('')
    const [Email_Address, setEmail_Address] = useState('')
    const [Phone, setPhone] = useState('')
    const [Job_Title, setJob_Title] = useState('')
    const [Organisation, setOrganisation] = useState("")
    const [Enquiry_Type, setEnquiry_Type] = useState("")
    const [Industry, setIndustry] = useState("")
    const [Comments, setComments] = useState("")

    const [result, setResult] = useState()
    console.log(result)


    const SubmitData = (e) => {
        e.preventDefault()

        sendData = async () => {
            const payload = {
                // force_replace:checkbox[1],
                First_Name: First_Name,
                // Last_Name: Last_Name,
                // Email_Address: Email_Address,
                // Phone: Phone,
                // Job_Title: Job_Title,
                // Organisation: Organisation,
                // Enquiry_Type: Enquiry_Type,
                // Industry: Industry,
                // Comments: Comments,
                


            }
            try {

                

                await axios .post("/api/postcontact/", payload)

                    .then(async (response) => {
                        console.log(response)

                        // if (response.data.success) {

                        //     setCount(count + 1);




                        // } else {

                        //     setCount(count + 1);


                        // }

                    });

            } catch (err) {

                setCount(count + 1);

                // toast( err?.message);

            }

           

        };
        sendData()



    }







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
                        <h2  className="gradient-color">Latitude & Longitude<br></br>
                        Connected in 3+ Cities - Noida, Hyderabad, Mumbai</h2><br></br>
                        <p>Explore our service offerings and subsidiaries in specific geography.</p>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
        {/* <div>
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
        </div> */}
        <div>
            <div className={` ${Styles.Contact}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3  className="gradient-color">Connect With Us</h3>
                            <div className={` ${Styles.subheading}`}><p>Got a query? Kindly fill in the form and we shall get back to you.</p></div>
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





                                <label htmlFor="fname">First Name* </label><br></br> <input type="text" id="fname" name="fname" class="form-control" onChange={event => setFirst_Name(event.target.value)} ></input><br></br>
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
                                    <input type="submit" className={`${Styles.submit}`} title="Please read the Privacy Policy before submitting" value="SUBMIT" onClick={SubmitData}></input>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>

            </div>
            
        </div>
        <Footer />
    </>
)
}
export default Contact;