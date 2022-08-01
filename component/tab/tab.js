import React , {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


function Tabsn() {

    const [ToggleState, setToggleState] = useState(1);

    const [navclick , setsetClick ] = useState(2);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };
    console.log(toggleTab)
    
  const getActiveClass = (index, className) =>
  ToggleState === index ? className : "";
  return (
    <div className='container'>
      <Tabs defaultActiveKey="third">
        <Tab eventKey="first" title="Business writing">
        <section className="mydiv6">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="valueimage2">
            <img src="/image/istockphoto-1206800961-612x612.png" alt="img" width="440px" height="240px" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>Blog Writing</h1>
          <div className="valuecontents">
            <p>
              Effective emails, powerful presentations, compelling case studies
              – we have the capability to deliver high-quality content assets to
              elevate your business experience. Express your business’s value
              proposition in powerful words with your domain and our creative
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Tab>
        <Tab eventKey="second" title="Marketing content">
        <section className="mydiv6">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="valueimage2">
            <img src="/image/istockphoto-1206800961-612x612.png" alt="img" width="440px" height="240px" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>Blog Writing</h1>
          <div className="valuecontents">
            <p>
              Effective emails, powerful presentations, compelling case studies
              – we have the capability to deliver high-quality content assets to
              elevate your business experience. Express your business’s value
              proposition in powerful words with your domain and our creative
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Tab>
        <Tab eventKey="third" title="Blog writing">
        <section className="mydiv6">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="valueimage2">
            <img src="/image/istockphoto-1206800961-612x612.png" alt="img" width="440px" height="240px" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>Blog Writing</h1>
          <div className="valuecontents">
            <p>
              Effective emails, powerful presentations, compelling case studies
              – we have the capability to deliver high-quality content assets to
              elevate your business experience. Express your business’s value
              proposition in powerful words with your domain and our creative
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Tab>
        <Tab eventKey="four" title="Website content">
        <section className="mydiv6">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="valueimage2">
            <img src="/image/istockphoto-1206800961-612x612.png" alt="img" width="440px" height="240px" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>Blog Writing</h1>
          <div className="valuecontents">
            <p>
              Effective emails, powerful presentations, compelling case studies
              – we have the capability to deliver high-quality content assets to
              elevate your business experience. Express your business’s value
              proposition in powerful words with your domain and our creative
              expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Tab>
      </Tabs>
    </div>
  )
};


export default Tabsn;