import Footer from "../layout/footer";
import Header from "../layout/Header4";

function SiteDown() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div
            className="section-full bg-white  page-down overlay-black-dark"
            style={{
              backgroundImage: "url(images/background/bg2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "right top",
            }}
          >
            <div className="container-fluid">
              <div className="pagedown-title">
                <img src="images/vlc.png" alt="" />
                <h1 className="text-white">
                  Site Is Down <br />
                  For Maintenance
                </h1>
                <p>
                  This is the Technical Problems Page. <br />
                  Or any other page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteDown;
