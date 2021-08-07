import React, {useState, useEffect} from 'react'
import Styles from "./Group.module.css"
import { Button, Avatar} from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

 


function Group({name, qualification, topic, grpid }) {

 
    const dispatch = useDispatch();
    const [seed, setSeed] = useState("")

     useEffect(() => {
         setSeed(Math.floor(Math.random() * 5000))
     }, [])




    const joining = () => {
          //dispatch()
    }


    return (
        <div className={Styles.grp}>
            <div className={Styles.img}>
               <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
            </div>

            <div className={Styles.detail}>
               <p className={Styles.gn}>{name}</p>
               <p className={Styles.qua}>{qualification}</p>
               <p className={Styles.topic}>{topic}</p>
               
            </div>

            <Link to={`/Group/${grpid}`} 
            variant="inherit" 
            color="primary" 
            style={{textDecoration:"none"}}
            key={grpid}>  
             <Button 
                 variant="contained" 
                 style={{marginTop:"13px", height:"25px", width:"35px", fontSize:"12px"}}
                 endIcon={<ArrowForwardIosIcon/>}
                 onClick={() => joining()}
                 >Join
            </Button>
            </Link>
          
            
        </div>
    )
}

export default Group
