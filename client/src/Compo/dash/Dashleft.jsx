import React, {useState} from 'react'
import Styles from "./Dashleft.module.css" 
import { Button, TextField } from "@material-ui/core"
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';



  
 
function DashLeft()
{

    const [groupname, setGroupname] = useState("") 
    const [qualification, setQualification] = useState("")
    const [topic, setTopic] = useState("")



    return (
        <div>
             <div className={Styles.left}>
       
                <div className={Styles.inp}>
                    <h4 style={{marginBottom:"0px", fontWeight:"400", color:"grey"}}>Don't Find Your Group? Create new</h4>
                   
                   <div>
                   <TextField
                   className={Styles.logo}
                   variant="outlined"
                   style ={{width: '80%', height:"20px", marginBottom:"30px", marginTop:"30px"}}  
                   inputProps={{ autoFocus: false }}
                   label="Groupname"
                   type="name"
                   value={groupname}
                   onChange={(e) => setGroupname(e.target.value)}
                   />
                   </div>
                 
                  <div> 
                  <TextField 
                   style ={{width: '80%', height:"20px", marginBottom:"30px", marginTop:"40px"}}  
                   variant="outlined"
                   inputProps={{ autoFocus: false }}
                   label="Qualification"
                   type="name"
                   value={qualification}
                   onChange={(e) => setQualification(e.target.value)}
                   />
                  </div>

                  <div>
                  <TextField 
                   variant="outlined"
                   style ={{width: '80%', height:"20px", marginBottom:"30px", marginTop:"40px"}}  
                   inputProps={{ autoFocus: false }}
                   label="Topic"
                   type="name"
                   value={topic}
                   onChange={(e) => setTopic(e.target.value)}
                   />
                  </div>
                 
         </div>
               

         <Button 
         variant="contained" 
         style={{marginTop:"40px"}}
         startIcon={<SendIcon/>}
         >Contained</Button>
            </div>
        </div>    
    )
}

export default DashLeft
