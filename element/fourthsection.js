import React from 'react'
import Styles from '../scss/fourth/four.module.scss'
 

  function fourthsection() {
  return (
  <div className={`${Styles.darkcoloumn} hullheight sectionstyle3 container-fluid`} style={{padding:"55px 0px !important"}}>
    <div className={`${Styles.fourth} row container`}>
        <div className={`${Styles.creative} col-6`}>
            <div className={Styles.headingtext}>
            <h2><span className={Styles.head_bck}> Innovative  Platforms</span> </h2>
            <p>OMRA Solutions offer a wide range of customized software development services worldwide, we are the professional software development company based in Delhi with connecting offices in NCR serving clients from last 5 years. We have outstanding experience in custom software development, CRM, ERP and HRMS platform. We provide our clients with the exact tailor-made software solutions that will meet their specific business requirements. We do focus on Voice Blend Process as well.</p>
            <div className="slidertextblock">  <a href="#" ><span>Know More</span><i></i></a>
                            </div>
            </div>

        </div>
        <div className={`${Styles.sideimage} col-6`}>
            <img src="images/background/face.jpg" alt="" />
        </div>
    </div>
  </div>
  )
  }

export default fourthsection