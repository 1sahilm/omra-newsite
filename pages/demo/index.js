import React from "react";
import Styles from "../../scss/demo/demo.module.scss";
import Image from "next/image";
import Tab from "../../component/tab/tab";
import AddIcon from "../../component/icons/Add";
import Header2 from "../../layout/header-2";
import Footer from "../../layout/footer";
const Demo = () => {
  return (
<>
    <Header2 />
    <div className="mainpage">
      <section className={Styles.bannersection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={Styles.bannertext}>
                <h1> Best in E commerce uploading</h1>
                <p>
                  Deliver superior experiences through intelligent automation
                  with AQT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.sectiont}>
        <div className="container">
          <div className="row">
            <div className={` ${Styles.befoere} col-md-6`}>
              <div className={Styles.imageouter}>
                <img
                  src="../images/background/section52.png"
                  className={Styles.img}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={Styles.contentbox}>
                <h1>End Goal</h1>
                <p>
                  We strive to deliver creative and insightful content to brands
                  to enable them to attract and retain customers through
                  enriched content experiences. Our goal is to empower brands to
                  connect with the right audience with the right choice of
                  words! Our personalized content marketing services are
                  engineered to accomplish your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.sectionf}>
        <div className={` ${Styles.heading} container`}>
          <div className="row">
            <div className="col-md-6">
              <h2 className={Styles.sectionheading}>
                Quality Experience to On-Board Merchant
              </h2>
              <ul className={Styles.arrowlist}>
                <li>
                  <img src="image/4.png" alt="icon" /> Own Developed Software
                  As A Service (Saas) Based Product For Enterprises Segment.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Developer Platform On
                  Advanced Technology.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call & Sales
                  Process- Pan India On-Boarding-Sold Successfully 150+
                  Licenses.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> For Telecom Industry –
                  Service delivery Platform{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Developed Platform to
                  Manage Mobile Content Delivery And Billing
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Sales & Marketing
                  Experience to Handle Telecom Vas Business Operations.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Pan India Merchant
                  Onboarding Process For{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Manage The Business
                  Operation For Merchant -Onboarding Process.{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call Process-
                  Digital Catalogue Sales And Fulfillment{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Lead Generation for
                  Various Industries.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call Process To
                  Generate Leads For Travel, Hospitals & Education Sectors.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="/image/newbg.SVG" />{" "}
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.sectionFive}>
        <div className={`${Styles.headingsecond} container`}>
          <h3>Our</h3>
          <h2> Specialities </h2>
        </div>

        {/* tab section  */}

        <Tab />
      </section>

      <section className={Styles.newsectionbox}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={Styles.textblock}>
                <h1>Why us?</h1>
                <p>
                  Whether you're looking to launch a new product or simply want
                  to refresh your existing branding, we can help you achieve
                  your goals.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.textblock2}>
                <h4> We understand you </h4>
                <p>
                  We can help you develop a unique visual identity for your
                  business that will help you attract attention and customers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.textblock2}>
                <h4> We speak your language </h4>
                <p>
                  Versatile with a vision, the team conveys your message to your
                  audience in your tone, style and branding.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.textblock2}>
                <h4> We hold the highest standards </h4>
                <p>
                  Holding the bar high with technical excellence and creativity,
                  our design team leaves no stone unturned.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.textblock2}>
                <h4>We deliver results</h4>
                <p>
                  Our designers are equipped with result-oriented strategies and
                  customer-centric culture to bring your brand to the spotlight.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={Styles.textblock2}>
                <h4>We go the extra mile</h4>
                <p>
                  Technologically focused customized solutions fused with
                  digital marketing strategies ensure timely delivery of SMART
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mydiv4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Our</h1>
              <h2>Approach</h2>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section className={` ${Styles.mydifdgdfg} mydiv7`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                We take a four-fold approach to help our clients embark upon the
                journey of digital marketing agency services.
                <br />
                <br />
                We begin with a thorough understanding of your business and
                marketing objectives. As a second step, we sieve through your
                consumer’s behavior and data and draw insights to set targets
                and finally we restructure the existing marketing channels to
                enable comprehensive internet marketing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mydiv8">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={` ${Styles.box551} box1 `}>
                <img src="image/q.svg" alt="img" />
              </div>
              <h2>Understanding your business and marketing objectives</h2>
              <p>
                At Omra Solution, we begin with a full scale audit of your
                business to understand the target audience and marketing
                objectives.
              </p>
            </div>
            <div className="col-md-3">
              <div className={` ${Styles.box551} box1 `}>
                <img src="image/w.svg" alt="img" />
              </div>
              <h2>Understanding your consumers’ behaviors and data</h2>
              <p>
                The audit also enables us to understand consumer data and their
                behavior. We will come up with a robust marketing strategy
                accordingly.
              </p>
            </div>
            <div className="col-md-3">
              <div className={` ${Styles.box551} box1 `}>
                <img src="image/e.svg" alt="img" />
              </div>
              <h2>Drawing insights to set targets</h2>
              <p>
                With the accumulated data, we understand your business
                requirements, draw insights from the data, and set targets which
                help you meet marketing goals.
              </p>
            </div>
            <div className="col-md-3">
              <div className={` ${Styles.box551} box1 `}>
                <img src="image/r.svg" alt="img" />
              </div>
              <h2>Restructuring to enable digital transformation</h2>
              <p>
                We ensure that your business undergoes a digital transformation
                by restructuring your website design, and content for increased
                leads and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.deliversection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>How do we deliver?</h1>
              <p>
                Design is a personal element. What works for one company will
                not work for another. That is our underlying philosophy. We
                become the graphic design partner that you can trust and are
                confident about delivering personalized solutions that meet your
                standards.
              </p>
              <ul>
                <li>
                  <img src="image/ask1.png" alt="img" />
                  <h3>Ask</h3>
                </li>
                <li>
                  <img src="image/re1.png" alt="img" />
                  <h3>Research</h3>
                </li>
                <li>
                  <img src="image/id.png" alt="img" />
                  <h3>Ideate</h3>
                </li>
                <li>
                  <img src="image/de.png" alt="img" />
                  <h3>Design</h3>
                </li>
                <li>
                  <img src="image/dep2.png" alt="img" />
                  <h3>Develop</h3>
                </li>
                <li>
                  <img src="image/dep.png" alt="img" />
                  <h3>Deploy</h3>
                </li>
                <li>
                  <img src="image/sup.png" alt="img" />
                  <h3>Support</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.sectionf}>
        <div className={` ${Styles.heading} container`}>
          <div className="row">
            <div className="col-md-6">
              <h2 className={Styles.sectionheading}>
                Quality Experience to On-Board Merchant
              </h2>
              <ul className={Styles.arrowlist}>
                <li>
                  <img src="image/4.png" alt="icon" /> Own Developed Software
                  As A Service (Saas) Based Product For Enterprises Segment.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Developer Platform On
                  Advanced Technology.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call & Sales
                  Process- Pan India On-Boarding-Sold Successfully 150+
                  Licenses.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> For Telecom Industry –
                  Service delivery Platform{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Developed Platform to
                  Manage Mobile Content Delivery And Billing
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Sales & Marketing
                  Experience to Handle Telecom Vas Business Operations.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Pan India Merchant
                  Onboarding Process For{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Manage The Business
                  Operation For Merchant -Onboarding Process.{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call Process-
                  Digital Catalogue Sales And Fulfillment{" "}
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Lead Generation for
                  Various Industries.
                </li>
                <li>
                  <img src="image/4.png" alt="icon" /> Voice Call Process To
                  Generate Leads For Travel, Hospitals & Education Sectors.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="..image/Building-customer-centric-websites-compressed.png" />{" "}
            </div>
          </div>
        </div>
      </section>
      {/*  FAQ  */}
      <section className={Styles.faq}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className={Styles.faqcontent}>
                <h1>Frequently asked questions</h1>
              </div>
            </div>
            <div className="col-md-12">
              {
                FAQArray.map((data,index)=>(
                  <FAQList key={index} index={index} {...data}/>
                ))
              }
            
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Demo;

const FAQList = ({ question, answer,index }) => {
  const [isOpen, setOpen] = React.useState(index===0||false);
  const onClickButton = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <ul onClick={onClickButton}>
        <li>
          <h4>{question}</h4>
        </li>
        <li>
          <AddIcon  style={{
            transform:`rotate(${isOpen?'45deg':'90deg'})`,
            transition:'all 150ms ease',
            fill:'#fff'
          }} />
        </li>
      </ul>
      <p style={{ maxHeight: isOpen ? "200px" : "0px" ,overflow:'hidden', transition:'all 150ms ease',padding:0,color:'#838383'}}>{answer}</p>
    </React.Fragment>
  );
};

const FAQArray = [
  {
    question: `How do I associated with OMRA`,
    answer: `Connect with us at corporate@omra.com or contact us at
    +000000000. We are not only a web development company but also
    provide a wide range of digital marketing services. Just click
    on the contact us section on this website or scroll down to
    connect with us via social media. We have provided the links to
    our social media pages in the footer of this site.`,
  },
  {
    question:'What domain name should I choose?',
    get answer(){
      return 'this.answer'
    }
  },
  {
    question:'Will my website development be search engine friendly?',
    get answer(){
      return' this.answer'
    }
  },
  {
    question:'How long will take it to get a new website?',
    get answer(){
      return 'this.answer'
    }
  },
  {
    question:'Will you maintain my site for me?',
    get answer(){
      return 'this.answer'
    }
  },
];
