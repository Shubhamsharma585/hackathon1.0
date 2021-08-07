import React, { useState } from 'react'
import Styles from "./Nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link as Scro } from 'react-scroll'

  

function Nav({handleopenform}) { 
 

 

    return (  
        <div className={Styles.nav} id="nav">
            
            <p className={Styles.home}> 
                Home
            </p>

            <p className={Styles.about}>
            <Scro  to="footer" spy={true} smooth={true}> 
                About
            </Scro>
            </p>

            <p className={Styles.user}>
            <p onClick={handleopenform} style={{marginTop:"0px"}}>Enroll</p>
            </p> 
       
       </div>
       ) 
}

export default Nav;
 