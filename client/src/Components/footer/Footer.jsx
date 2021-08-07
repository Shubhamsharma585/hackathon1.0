
import React from 'react'
import Styles from "./Footer.module.css"
import { Link as Scro } from 'react-scroll'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import gm1 from "../../Images/gm1.png"

function Footer() {



    return (
      <div>
         <div className={Styles.footer} id="footer">
            <div className={Styles.fooleft}>
                <img src={gm1} alt=""/>
            </div>
            <div className={Styles.fooright}>
                 <p className={Styles.abt}>About us</p>
                 <p className={Styles.abtdetail}>
                   We are a non-profit organization by the students for the students.
                   We allow students from diffrent categories to come up here and learn together.
                 </p>
                 <p className={Styles.support}>If you want to support us...<span style={{cursor:"pointer", color:"rgb(15, 44, 79)"}}>Click Here</span></p>
            </div>
        </div>

        <div className={Styles.bottom}>
            <Scro  to="nav" spy={true} smooth={true}> 
               <div className={Styles.bor}>
                  <ArrowUpwardIcon style={{color:"white", cursor:"pointer"}} />
               </div>
            </Scro>
           
        </div>

      </div>   
    )
}

export default Footer
