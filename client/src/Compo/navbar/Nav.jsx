import React, { useState } from 'react'
import Styles from "./Nav.module.css"
import { Link } from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


function Nav() {

 



 
    return (  
        <div className={Styles.nav}>
            
            <p className={Styles.home}>
                 Home
            </p>

            <p className={Styles.about}>
                About
            </p>

            <p className={Styles.user}>
                User
            </p>
   
       </div>
       ) 
}

export default Nav;
 