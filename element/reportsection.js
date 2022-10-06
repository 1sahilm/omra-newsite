import ReportSlider from "../component/repotingSlider";
function ReportSection() {
  return (
    <>
      {/* <!-- Testimonials --> */}
      <section
        className="content-inner-2 hullheight  unquie-section"
        id="unquie-section"
        style={{
          background: "#000",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
          padding: "67px 0px !important",
        }}
      >
        <div className="container" style={{ maxWidth: "1134px" }}>
          <div className="row">
            <div className="col-md-12">
              <ReportSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ReportSection;
