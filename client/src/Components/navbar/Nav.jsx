import React, { useState } from 'react'
import Styles from "./Nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link as Scro } from 'react-scroll'
import { Link } from "react-router-dom"
  

function Nav({handleopenform}) { 
 

    const name = useSelector(state => state.regi.username)
  
    console.log(name)

    return (  
        <div className={Styles.nav} id="nav">
            
            <Link to={"/"} 
            style={{textDecoration:"none", color:"black", marginTop:"15px"}}>
            <p className={Styles.home}> 
                Home
            </p>
            </Link>
            

            <p className={Styles.about}>
            <Scro  to="footer" spy={true} smooth={true}> 
                About
            </Scro>
            </p>
          

            {(name)? (<p className={Styles.user}>{`Hi ${name}`}</p>):(<p
            className={Styles.user}
            onClick={handleopenform}
            >Enroll</p>)}
       
       </div>
       ) 
}

export default Nav;
 