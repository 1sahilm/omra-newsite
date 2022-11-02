import { useState } from "react";
import Link from "next/link";
import Styles from "../scss/secondsec/second.module.scss";
import SecondSlider from "./secondslider";

function Secondsec() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}

      <div
        className={`${Styles.dark} secondsecondstyle2 container-fluid`}
        style={{ position: "relative" }}
      >
        <div className={`${Styles.secondsecond} row container`}>
          <div
            className="col-4 sec-ssldr"
            style={{
              position: "relative",
              zIndex: "9",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={Styles.headingtext}>
              <h2>Omra Solutions</h2>
              <p>
                We are a leading organization in the space of technology
                development, fulfillment the Sales processes in B2B and B2C
                segment. We are helping renowned brands to achieve their goals
                in terms of sales business operations. We are working in
                business process outsourcing services, Sales Process, Automation
                technology. We are a process oriented organization with
                certification of ISO 9001:2015 (Quality Management Systems).
              </p>
              <div className="slidertextblock">
                <Link href="/about-us">
                  <a>
                    <span>Know More</span>
                    <i></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-10"
            style={{ position: "absolute", right: "0px" }}
          >
            <SecondSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondsec;
