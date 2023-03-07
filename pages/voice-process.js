import React from "react";
import AddIcon from "../component/icons/Add";
import ReusableTab from "../component/tab/tab";
import Footer from "../layout/footer";
import Header2 from "../layout/header-2";
import Styles from "../scss/demo/demo.module.scss";
import { useState } from "react";
import NextSeo from "../layout/next-seo";

function VoiceProcess() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
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
      <NextSeo
        title="Voice Process - OMRA Solutions"
        description={``}
        keywords={``}
        canonical="https://www.omrasolutions.com/voice-process"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: voicesch,
          }}
        ></script>
      </NextSeo>
      <Header2 />
      <section className="mydiv001">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                Any Voice Process &#33; Any Language&#33; On Any Technology&#33;
              </h1>
              <p style={{ padding: "0" }}>
                Connect with your customers through our dedicated team, who are
                ready to serve our clients at every milestone &#33;
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
                    <div>
                      <input
                        id="country"
                        type="text"
                        className="form-control  mb-3 form-input"
                        placeholder="Country Name"
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
      <section className="mydiv11">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="valueimage1">
                <img src="/image/girl.png" alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="valuecontent1">
                <h1>Our Value proposition</h1>
                <p style={{ padding: "0" }}>
                  We have great experience in voice &amp; on field sales
                  process. We, OMRA Solutions are an organization having
                  Inbound&#47;Outbound processes, as we are operating voice
                  blend processes. We have our team to handle every sales and
                  Inbound&#47;Outbound process operation with the help of
                  automation. One can easily understand our experience by
                  knowing the point that, we are handling Back &#45;end sales
                  process for the renowned brands. We are one of the best
                  companies for Voice Blend Process in India, as we working in
                  top 5 metropolitan cities of India. We enhances our Customer
                  Experience by putting our dedication into Inbound&#47;Outbound
                  processes, CRM and LMS through our diallers, as we are We are
                  utilizing lower &#45;cost channels to effectively and
                  efficiently manage customer queries. We value our offerings to
                  customers lead to increased loyalty and revenues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hirecontent1" style={{ marginLeft: "-178p" }}>
                <h1>VOICE BLEND PROCESS</h1>
                <p style={{ padding: "0" }}>
                  Any Voice Blend Process at an organization is a set of
                  repeated steps that a salesperson chooses to take a
                  prospective buyer from the very early stage of awareness to a
                  closed sale.
                </p>
                <p style={{ padding: "0" }}>
                  We, OMRA Solutions are helping renowned brands to play a key
                  role in revenue generation and strategic planning in their
                  sales process. We are helping them to receive higher revenue
                  in their business. We have the quality experience to
                  understand the requirement of clients &amp; pitching their
                  products and services in a well-defined manner with detailed
                  knowledge of products&#47;services and they will surely
                  achieve benefit on the same.
                </p>
                <p style={{ padding: "0" }}>Our globules dedicated team:</p>
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Manage more calls <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Examine the action
                <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp;Optimize expenses <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Customer support service <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Manage more calls <br />
                <img src="/image/4.svg" alt="icon" />
                &nbsp; Experts are available for Quality Check
                <br /> <br /> <br />
              </div>
            </div>
            <div className="col-md-6">
              <img src="/image/2.SVG" alt="img" className="hireimages1" />
              <br /> <br />
            </div>
          </div>
        </div>
      </section>

      <section className="mydiv22">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hirecontent1" style={{ marginLeft: "-178p" }}>
                <br /> <br /> <br />
                <img src="/image/side3.png" alt="img" className="hireimages1" />
              </div>
            </div>
            <div className="col-md-6">
              <br /> <br />
              <h1 className="hirecontent1333">
                OMRA SOLUTIONS ARE PROCESS &#45;ORIENTED ORGANIZATION. WE ARE
                CERTIFIED BY ISO 9001:2015
              </h1>
              <p style={{ padding: "0" }}>
                We have a complete setup and experienced team to understand and
                execute any back &#45;end sales process.{" "}
              </p>
              <img src="/image/4.svg" alt="icon" />
              &nbsp; QUALITY, EXPERIENCE WITH RENOWNED BRANDS. <br /> <br />
              <p style={{ padding: "0" }}>
                We have great experience in voice &amp; on &#45;field sales
                process. We, OMRA Solutions are a leading organization in the
                space of IT and have on the team to handle every sales operation
                with the help of automation. One can easily understand our
                experience by knowing the point that, we are handling Back
                &#45;end sales process for Trade India, Stars Tell and other
                renowned brands. We are one of the best companies For Voice
                Blend Process in Delhi&#47;NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mydiv44">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Our</h1>
              <h2>Specialities</h2>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      <ReusableTab
        tabData={[
          {
            tabName: "Vendor on-boarding",
            heading: "Vendor on-boarding",
            imageUrl: "/image/istockphoto-1206800961-612x612.png",
            description:
              "We partner our clients in the appraisal of marketplace to identify & onboard merchants who can add value and improve the customer reach. We make the on boarding by running voice process. ",
            eventKey: "first",
          },
          {
            tabName: "Engaging  customers",
            heading: "Engaging  customers",
            imageUrl: "/image/istockphoto-1206800961-612x612.png",
            description:
              "Behind, the latest initiatives, we found that customers in firms are engaging due to actual customer services. It'll become possible for most businesses in the world by outsourcing our customer service. ",
            eventKey: "second",
          },
          {
            tabName: "Develop  strategies",
            heading: "Develop  strategies",
            imageUrl: "/image/istockphoto-1206800961-612x612.png",
            description:
              "We are minimizing the customer attrition rate, solve the flaws and develop strengthening brand awareness. We are not only the running back office centers, but we can also provide customer retention services. ",
            eventKey: "third",
          },
          {
            tabName: "Sales techniques",
            heading: "Sales techniques",
            imageUrl: "/image/istockphoto-1206800961-612x612.png",
            description:
              "Our customer support services help to boost the customer satisfaction rate that promotes goodwill and to boost sales & closing of product. Our customer support services allow to expand the scope of business.",
            eventKey: "forth",
          },
        ]}
      />
      <section className="mydiv77">
        <div className="container">
          <h1>How we do it</h1>
          <h2>
            <img src="/image/redicon.svg" alt="icon" /> First, we understand the
            customer
          </h2>
          <p>
            The process begins with the buyer. First, we understand about the
            exact need of the owner who is sales putting their trust in us.
            Then, we try to build a sales process to help salespeople to find
            the answer of the key question. Once we completely understand your
            needs, then we will work in a planned manner with our experienced
            team.
          </p>
          <h2>
            <img src="/image/redicon.svg" alt="icon" /> We will set milestones
          </h2>
          <p>
            Once we&apos;ve defined the stages of your sales process, we will
            establish the key steps and milestones within those stages. A
            milestone could be identified where you (buyer) are in the sales
            process with stakeholders within a time period. We will try to score
            each milestone to determine how many resources are there to invest
            in the part of the sales process.
          </p>
          <h2>
            <img src="/image/redicon.svg" alt="icon" /> You will align the
            technology and systems with the sales process
          </h2>
          <p>
            It&apos;s very important to have a good CRM Software with technology
            that enables our team members to perform each step of the sales
            process in an efficient manner. Wherever software tools won&apos;t
            make team members more effectively or encourage them to follow best
            practices. Only our team members need to combine the technology with
            supportive systems, guidance, and resources. You will provide
            technology that streamlines the sales process, collects and
            organizes information on the customers &amp; will list the required
            activities for team members to follow it.
          </p>
        </div>
      </section>
      <section className="mydiv88">
        <div className="container">
          <h1>Collaborating with us</h1>
          <p>
            When you first meet, you should know each other, learn the way in
            which we work, and determine their goals. Along the way, you decide
            if it works together &amp; you are a match. If this is the case, the
            relationship can proceed &amp; can grow. At OMRA Solutions, we have
            years of demonstrated experience in offering high-quality,
            cost-effective, and secure voice blend services to clients, helping
            them optimize operations, increase business efficiency and boost the
            bottom line, all this while improving the customer&apos;s experience
            and the perception of client brand. This approach has benefited a
            lot of our clients across the globe. We offer seamless inbound &amp;
            outbound services that are customized to specific client
            requirements while ensuring compliance with industry-followed
            quality and security standards. Our strategy for the voice blend
            process supports the entire customer lifecycle.
          </p>
          <p>
            Let us take care of your customers &#45; We take a multi-channel
            approach that empowers customers to interact with your brand via any
            media channel, any device, anywhere with a personalized, effortless,
            and consistent customer experience throughout their journey. Our
            support channels include Phone, Chat, and Email.
          </p>
        </div>
      </section>

      <section className={Styles.faq}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={Styles.faqcontent}>
                <h1>Frequently asked questions</h1>
              </div>
            </div>
            <div className="col-md-12">
              {FAQArray.map((data, index) => (
                <FAQList key={index} index={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default VoiceProcess;

const FAQList = ({ question, answer, index }) => {
  const [isOpen, setOpen] = React.useState(index === 0 || false);
  const onClickButton = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <ul onClick={onClickButton}>
        <li>
          <h4 className={Styles.faqQuestion}>{question}</h4>
        </li>
        <li>
          <AddIcon
            style={{
              transform: `rotate(${isOpen ? "45deg" : "90deg"})`,
              transition: "all 150ms ease",
              fill: "#fff",
            }}
          />
        </li>
      </ul>
      <p
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "all 150ms ease",
          padding: 0,
          color: "#838383",
        }}
      >
        {answer}
      </p>
    </React.Fragment>
  );
};

const FAQArray = [
  {
    question: `How is your service cost calculated?`,
    answer: `We at OMRA Solutions are very flexible on the costing part. Our costing depends on our client’s requirement. `,
  },
  {
    question: "What is the skill set of your hiring?",
    get answer() {
      return "We believe to customize and tailor-make our solutions depending upon the requirements. We have the capabilities to hire staffs of L0 to L4, including those of foreign language or any other skill set.";
    },
  },
  {
    question: "Can you provide multilingual support",
    get answer() {
      return " Yes, we do provide multilingual support.";
    },
  },
  {
    question: "What time do you take to start a process?",
    get answer() {
      return "We have our infrastructure, ready for most of our customer’s requirement. Since we are experienced in multiple levels of services, we can design any exceptional requirement in least possible duration.";
    },
  },
  {
    question: "How do you ensure database security?",
    get answer() {
      return "Our clients' databases are stored under safe custody of authorized core management members and are electronically handled by our senior IT staff.";
    },
  },
];

const voicesch = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Any Voice Process ! Any Language! On Any Technology! - Omra Solutions",
  "image":"https://omrasolutions.com/images/newlogo.png",
"description": "Connect with your customers through our dedicated team, who are ready to serve our clients at every milestone !",
  "@id": "https://omrasolutions.com/",
 "url": "https://omrasolutions.com/voice-process", 
"telephone": " +91 79825 18911",
  "priceRange": "Ask",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office- 103 and 105, D-20, Sector 63 Rd",
    "addressLocality": "Noida",
    "postalCode": "201305",
    "addressCountry": "+91",
    "addressRegion": "91"
  },
"openingHoursSpecification": 
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:30"
  },
  "sameAs": [
    "https://www.facebook.com/omrasolution",
    "https://twitter.com/SolutionsOmra",
    "https://www.instagram.com/omra.digitalsolution/",
"https://www.linkedin.com/company/omra-solutions",
"https://www.youtube.com/channel/UCHAvY_F3UWz2R43gkYS3lTg"
  ] 

}`;
