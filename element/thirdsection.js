import Counterup from '../component/counterup';
import Image from 'next/image'
function Thirdsection() {
    return (
      <>
        {/* <!-- Counters 2 --> */}
		<section className="counter-wraper-2 overlay-gradient-dark"> 
		
			<div className="counter-inner content-inner-3" style={{"backgroundImage":"url(images/background/2ac58ca3c5e1d553148f12ba1d7a38e8.jpg)","backgroundSize":"cover","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
				<div className="container">
				<h2 className="text-center text-white mb-4">GET STARTED WITH SMART IT SOLUTIONS TODAY</h2>
					<div className="row">
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<div className="icon-md text-primary"> 
										<span className="icon-cell">
										<Image src="/images/icon/dedicated team.png" width={80} height={80} />
										</span> 
									</div><br />
									<span className="title">Dedicated Teams</span> <br />
                                    <p className='para-text'>Our expertise teams are creating breakthroughs for our clients, and partners.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
							
							<div className="icon-content">
                            <div className="icon-md text-primary"> 
										<span className="icon-cell">
										<Image src="/images/icon/24-hours copy.png" width={80} height={80} />
										</span> 
									</div><br />
									<span className="title">24/7 communication</span> <br />
                                    <p className='para-text'>We are always there for you. Let’s talk today and see what we can do for you</p>
								</div>
                            </div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								
                                <div className="icon-content">
                                <div className="icon-md text-primary"> 
										<span className="icon-cell">
										<Image src="/images/icon/brainstorming ideas.png" width={80} height={80} />
										</span> 
									</div><br />
									<span className="title">Brainstorming Ideas</span> <br />
                                    <p className='para-text'>We build & strategize solutions based on your vision that can be the best ideation</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
                                <div className="icon-content">
                                <div className="icon-md text-primary"> 
										<span className="icon-cell">
											{/* <i className="flaticon-confetti"></i> */}
											<Image src="/images/icon/security.png" width={80} height={80} />
										</span> 
									</div><br />
									<span className="title">Compliance & Security</span> <br />
                                    <p className='para-text'>ISO Certified 9001:2015

Quality Management Systems ICI/6885801/21</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Thirdsection;