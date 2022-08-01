import ReportSlider1 from '../component/repotingSlider1';
function ReportSection() {
  return (
    <>
      {/* <!-- Testimonials --> */}
        <section className="content-inner-2 unquie-section" style={{"background":"#000","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat", opacity:"0.9" , paddingTop:"67px !important", paddingBottom:"67px !important"}}>
            <div className="container" style={{maxWidth:"1134px"}}>
               
                <div className="row">
                    <div className="col-md-12">
                        <ReportSlider1/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default ReportSection;