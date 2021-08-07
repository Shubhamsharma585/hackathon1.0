import React, { useState } from 'react'
import Styles from "./Dash.module.css"
import Dashleft from "./Dashleft"
import Dashright from "./Dashright"


 


function Dash() {


   

    return (
        <div className={Styles.dash} id="dash">
            <div className={Styles.left}>
                <div className={Styles.boxl}>
                   <Dashleft/>
                </div>
            </div>

            <div className={Styles.right}>
               <div className={Styles.boxr}>
                   <Dashright/>
              </div>
            </div>
            
        </div>
    )
}

export default Dash
