import React from 'react'
import Styles from '../scss/fourth/four.module.scss'


function fourthsection() {
  return (
    <div className={`${Styles.darkcoloumn} hullheight sectionstyle3 container-fluid`} style={{ padding: "55px 0px !important" }}>
      <div className={`${Styles.fourth} row container`}>
        <div className={`${Styles.creative} col-6`}>
          <div className={Styles.headingtext}>
            <h2><span className={Styles.head_bck}> Innovative  Platforms</span> </h2>
            <p> To Provide our Clients with the best to scale their business with our cutting-edge ideas and deliver the best run in Sales & Marketing programs with our appropriate sales methodologies. We can suggest the robust & relevant technology that can bring your business to a supreme level.</p>
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