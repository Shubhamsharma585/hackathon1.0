import React from 'react'
import Styles from "./Group.module.css"
import { Button } from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Group() {



    return (
        <div className={Styles.grp}>
            <div className={Styles.img}>

            </div>

            <div className={Styles.detail}>
               <p className={Styles.gn}>Maths</p>
               <p className={Styles.qua}>B.Tech</p>
               <p className={Styles.topic}>Integration</p>
               
            </div>
            <Button 
                 variant="contained" 
                 style={{marginTop:"13px", height:"25px", width:"35px", fontSize:"12px"}}
                 endIcon={<ArrowForwardIosIcon/>}
                 >Join
            </Button>
            
        </div>
    )
}

export default Group
