import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Header2() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      <header
        style={{
          top: "0px",
          width: "100%",
          zIndex: "100",
          position: "sticky",
          background: "#000",
        }}
        className="site-header mo-left header-transparent"
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a
                    style={{
                      zIndex: 10000990,
                      position: "relative",
                    }}
                  >
                    <Image
                      width={100}
                      height={70}
                      className="custom-logo-white"
                      src="/images/newlogo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav navbar">
                  <li className={`${open === "service" ? "open" : ""}`}>
                    <a onClick={() => setOpen("service")}>
                      <span>Services</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/it-development">
                          <a>IT Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/voice-process">
                          <a>Voice Blend Process</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/e-commerce-product-uploading">
                          <a>E-Commerce Product Uploading</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${open === "about" ? "open" : ""}`}>
                    <a onClick={() => setOpen("about")}>
                      <span>Our Products</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/elaundry">
                          <a>E-Laundry</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/hrms">
                          <a>HRMS </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/crm">
                          <a>CRM</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/new-contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link href="https://www.linkedin.com/login">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <a className="fa fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
