import React from "react";
import Styles from "../../scss/demo/demo.module.scss";
import Image from "next/image";
import ReusableTab from "../../component/tab/tab";
import AddIcon from "../../component/icons/Add";
import Header2 from "../../layout/header-2";
import Footer from "../../layout/footer";
const Demo = () => {
  return (
    <>
      <Header2 />
      <div className="mainpage">
        <div className={Styles.bannerImage}>
          <Image
            src="/images/background/banner.png"
            width={1700}
            height={800}
            priority
          />
          <div className={Styles.absolutePart}>
            <div className={` ${Styles.mobileRes} row`}>
              <div className="col-md-12">
                <div className={Styles.bannertext}>
                  <h1 className={Styles.mobileH1}>
                    {" "}
                    Best in E Commerce Uploading
                  </h1>
                  <p>
                    Sell more with appealing product entry services from OMRA
                    Solutions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className={Styles.bannersection}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={Styles.bannertext}>
                <h1> Best in E commerce uploading</h1>
                <p>
                Sell more with appealing product entry services from OMRA Solutions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                    We are Creating Many Unique Strategies and Delivering
                    Significant Solutions to Multiple Industries and Business
                    for Different Clients So, Let’s Connect and Give Us a Chance
                    to Assist You. We'll Be Grateful for Your Trust We; OMRA
                    Solutions are on-boarding 10,000+ Products on a Daily basis
                    for Renowned B2b Platforms. We Are Working with SMEs and
                    Creating Digital Catalogues to Display Their Products and
                    promote them online. We Are Working With SMEs On Pan India
                    Level And Covering More Than 4000 Categories And 50000 Micro
                    Categories.
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
                <p>
                  “OMRA Solution is IT Development Company & having Voice Blend
                  Process with An Experienced In-House Team That Can Help You
                  for Your Brand Visibility and Lead Generation As Well.
                  Dedication We Are Passionate Merchant on boarding Services, IT
                  Development services, Voice Blend Processes Which Beliefs In
                  Transparency With Result-Oriented Output. We Are Working
                  Globally And Offering Premium Services To Our Clients”.
                </p>
                <ul className={Styles.arrowlist}>
                  <li>
                    <img src="image/4.png" alt="icon" />
                    Digital Catalogue Is A Virtual Presence Whereas Small And
                    Medium-Sized Businesses (SMEs) Can Show Their Products And
                    Promote Their Products Digitally.
                  </li>
                  <li>
                    <img src="image/4.png" alt="icon" /> A Digital Platform
                    Which Allows Users To Do Regular Updates Quickly Which
                    Ensures The Accuracy Of Product Data, When It Will Be
                    Presented On A Broad Base.
                  </li>
                  <li>
                    <img src="image/4.png" alt="icon" />
                    Once You Are Connected Buyers Can Consult Latest Data From
                    Suppliers And Can Search Any Product Information I.E.,
                    Product Information, Product Images, Product Specification,
                    Etc From Them.
                  </li>
                  <li>
                    <img src="image/4.png" alt="icon" />
                    The Digital Catalogue Is A Complete Plinth To Expand Your
                    Business Which Will Enable You To Get More Exposure For Your
                    Business At Global Level.
                  </li>
                  {/* <li>
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
                </li> */}
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

          <ReusableTab
            tabData={[
              {
                tabName: "Catalog Management",
                heading: "Catalog Management",
                imageUrl: "/image/istockphoto-1206800961-612x612.png",
                description:
                  "Various businesses that have several products for sale online, managing the catalog becomes very important to attract customers. We handle your catalog, efficiently uploading products in categories, managing the listings to ensure maximum visibility.",
                eventKey: "first",
              },
              {
                tabName: "Image editing",
                heading: "Image editing",
                imageUrl: "/image/istockphoto-1206800961-612x612.png",
                description:
                  "Having an appealing product image increases the chances of customers choosing your products over the competitors’. Our team can make your product photos more appealing with editing, background removal/adding, watermark editing solutions and more.",
                eventKey: "second",
              },
              {
                tabName: "Creative Description",
                heading: "Creative Description",
                imageUrl: "/image/istockphoto-1206800961-612x612.png",
                description:
                  "A product description is a perfect blend of information. Our content developers create appealing descriptions that not only provide the necessary information about the products, but also prompt the audience to make the purchase.",
                eventKey: "third",
              },
              {
                tabName: "SEO-Friendly listing",
                heading: "SEO-Friendly listing",
                imageUrl: "/image/istockphoto-1206800961-612x612.png",
                description:
                  "Depending on your growth objectives and marketing approach, we can also help to promote your products. Our team of expertise members, professionals ensures that your target audience can find you easily on your platform.",
                eventKey: "forth",
              },
            ]}
          />
        </section>

        <section className={Styles.newsectionbox}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className={Styles.textblock}>
                  <h1>Why us?</h1>
                  <p>
                    Whether you're looking to launch a new product or simply
                    want to refresh your existing branding, we can help you
                    achieve your goals.
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
                    Versatile with a vision, the team conveys your message to
                    your audience in your tone, style and branding.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={Styles.textblock2}>
                  <h4> We hold the highest standards </h4>
                  <p>
                    Holding the bar high with technical excellence and
                    creativity, our design team leaves no stone unturned.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={Styles.textblock2}>
                  <h4>We deliver results</h4>
                  <p>
                    Our designers are equipped with result-oriented strategies
                    and customer-centric culture to bring your brand to the
                    spotlight.
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
                  Drawing insights to set your business targets to boost your
                  revenue
                  <br />
                  <br />
                  Our Catalogue Creating Services Are Designed To Attract
                  Customers Regardless Of The Product Or Service Category Being
                  Sold. While Dealing with Catalogues, It Is Very Important To
                  Ensure Systematic Indexing & Intelligent Category Selection Of
                  Each Product. Catalogue Management Professionals At OMRA
                  Solutions Understand What An Online Buyer Is Looking For;
                  Their Experience In Providing Catalogue Building & Indexing
                  Services Helps Them To Understand Industry Trends And Make The
                  Best Use Of The Categories And Sub-Categories.
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
                  The audit also enables us to understand consumer data and
                  their behavior. We will come up with a robust marketing
                  strategy accordingly.
                </p>
              </div>
              <div className="col-md-3">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/e.svg" alt="img" />
                </div>
                <h2>Drawing insights to set targets</h2>
                <p>
                  With the accumulated data, we understand your business
                  requirements, draw insights from the data, and set targets
                  which help you meet marketing goals.
                </p>
              </div>
              <div className="col-md-3">
                <div className={` ${Styles.box551} box1 `}>
                  <img src="image/r.svg" alt="img" />
                </div>
                <h2>Restructuring to enable digital transformation</h2>
                <p>
                  We ensure that your business undergoes a digital
                  transformation by restructuring your website design, and
                  content for increased leads and conversions.
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
                  This Can Build Your Online Presence and Focus On More Valuable
                  Additions for Business As Compared To Physical. The E-commerce
                  product upload service includes online uploading of your
                  products according to the given categories. The e-commerce
                  product listing service includes the placing of products on
                  the online platforms, and websites according to the
                  specifications of products like color, shape, size, price,
                  etc. Outsourcing product upload and product listing, to OMRA
                  Solutions, will get desired results for your Clients.
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

        {/* <section className="mydiv4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>How</h1>
                <h2> do we deliver?</h2>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section> */}
        {/* <section className={` ${Styles.mydifdgdfg} mydiv7`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  This Can Build Your Online Presence and Focus On More Valuable
                  Additions for Business As Compared To Physical. The E-commerce
                  product upload service includes online uploading of your
                  products according to the given categories. The e-commerce
                  product listing service includes the placing of products on
                  the online platforms, and websites according to the
                  specifications of products like color, shape, size, price,
                  etc. Outsourcing product upload and product listing, to OMRA
                  Solutions, will get desired results for your Clients.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="mydiv4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Our</h1>
                <h2> Process Cycle</h2>
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
                  Our Catalogue Creating Services Are Designed To Attract
                  Customers Regardless Of The Product Or Service Category Being
                  Sold. As A Part Of Catalogue Creation, We Add Product/Service
                  Descriptions; Optimize Product Images In Best Possible
                  Resolutions, And Index And Update Products Effectively To
                  Increase Consumer Search Ability.
                </p>
                <p>
                  While Dealing With Catalogues, It Is Very Important To Ensure
                  Systematic Indexing & Intelligent Category Selection Of Each
                  Product. Our Prime Objective, While Creating Catalogues, Is To
                  Help Customers Find Products And Services Easily. Catalogue
                  Management Professionals At OMRA Solutions Understand What An
                  Online Buyer Is Looking For; Their Experience In Providing
                  Catalogue Building & Indexing Services Helps Them To
                  Understand Industry Trends And Make The Best Use Of The
                  Categories And Sub-Categories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={Styles.sectionf}>
          <div className={` ${Styles.heading} container`}>
            <div className="row">
              <div className="col-md-7">
                <h2
                  className={Styles.sectionheading}
                  style={{
                    color: "#FF5818",
                    fontSize: "30px",
                    fontWeight: "800",
                  }}
                >
                  Why choose us for E-commerce product uploading?
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
              <div className="col-md-5">
                <img src="/image/Building-customer-centric-websites-compressed.png" />{" "}
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
                {FAQArray.map((data, index) => (
                  <FAQList key={index} index={index} {...data} />
                ))}
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
    question: `Do you offer a free trial?`,
    answer: `Yes, we do.`,
  },
  {
    question:
      "Do I need to have a registered company to sell on my own website?",
    get answer() {
      return "Yes, you should have registered company to create your digital catalog.";
    },
  },
  {
    question:
      "How long have you been an e-commerce product uploading service provider?",
    get answer() {
      return " OMRA Solutions are working on e-commerce product uploading from more than 2+ years.";
    },
  },
  {
    question: "What exposure we have with the e-commerce industry?",
    get answer() {
      return "It has been over four years  that we have been working in the e-commerce domain and know exactly what it takes to get it right and increase the online conversions.";
    },
  },
  {
    question: "Where do you have your client base?",
    get answer() {
      return "We have experience in successfully delivering e-commerce Catalog outsourcing services to our offshore clients spanning India & Dubai.";
    },
  },
];

// <Tab eventKey="first" title="Digital Catalog Management">
//   <section className="mydiv6">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="valueimage2">
//             <img
//               src="/image/istockphoto-1206800961-612x612.png"
//               alt="img"
//               width="440px"
//               height="240px"
//             />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <h1>Digital Catalog Management</h1>
//           <div className="valuecontents">
//             <p>
//               For brands that have multiple products for sale online,
//               managing the catalog becomes very important in order to
//               attract more customers. We handle your catalog for you,
//               efficiently uploading products in relevant categories,
//               managing the listings to ensure maximum visibility.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </Tab>

{
  /* <Tab eventKey="second" title="Professional Product Image Editing">
          <section className="mydiv6">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="valueimage2">
                    <img
                      src="/image/istockphoto-1206800961-612x612.png"
                      alt="img"
                      width="440px"
                      height="240px"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1>Professional Product Image Editing</h1>
                  <div className="valuecontents">
                    <p>
                      Having an appealing product image increases the chances of
                      customers choosing your products over the competitors’.
                      Our team can make your product photos more appealing with
                      editing, background removal/adding, watermark editing
                      solutions and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="third" title="Creatively Designed Product Descriptio">
          <section className="mydiv6">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="valueimage2">
                    <img
                      src="/image/istockphoto-1206800961-612x612.png"
                      alt="img"
                      width="440px"
                      height="240px"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1>Creatively Designed Product Description</h1>
                  <div className="valuecontents">
                    <p>
                      A good product description is a perfect blend of
                      information and call to action pitch. Our content
                      developers create unique and appealing descriptions that
                      not only provide the necessary information about the
                      products, but also prompt the audience to make the
                      purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab
          eventKey="four"
          title="Smart Product Listings with High Ranking Keywords"
        >
          <section className="mydiv6">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="valueimage2">
                    <img
                      src="/image/istockphoto-1206800961-612x612.png"
                      alt="img"
                      width="440px"
                      height="240px"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h1>Smart Product Listings with High Ranking Keywords</h1>
                  <div className="valuecontents">
                    <p>
                      Depending on your growth objectives and marketing
                      approach, we can also help to promote your products. Our
                      team of expertise members, professionals ensures that your
                      target audience can find you easily on your platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab> */
}
