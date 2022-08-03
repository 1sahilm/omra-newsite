import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// interface TabDataArray{
//   tabName:'',
//   heading:'',
//   imageUrl:'',
//   description:''
//   eventKey:'first'
// }

function ReusableTab({ tabData }) {
  return (
    <div className="container">
      <Tabs defaultActiveKey="third">
        {tabData.map((data, index) => {
          return (
            <Tab eventKey={data.eventKey} title={data.tabName}>
              <section className="mydiv6">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="valueimage2">
                        <img
                          src={data.imageUrl}
                          alt="img"
                          width="440px"
                          height="240px"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1>{data.heading}</h1>
                      <div className="valuecontents">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default ReusableTab;
