import React, {useState} from 'react'
import SendIcon from '@material-ui/icons/Send';
import Styles from "./Dashright.module.css"
import Group from "../group/Group"



function DashRight() 
{


    const [sea, setSea] = useState("")
    const startsea = () => {
        
    }


    return (
        <div>
             <h4 style={{marginBottom:"0px", fontWeight:"400", color:"grey"}}>
                 Live Sessions
            </h4>

            <div style={{display:"flex", flexDirection:"row", marginLeft:"10%"}}>
            <input 
            className={Styles.ser} 
            type="text" 
            name="" id="" 
            placeholder="Search Topic"
            value={sea}
            onChange={(e) => setSea(e.target.value)}
            />
             <div style={{border:"0px solid lightgray", paddingTop:"5px", cursor:"pointer"}}
             onClick={() => startsea()}
             >
                  <SendIcon/>
                  </div> 
            </div>
           
            <div className={Styles.cont}>
                <Group />   
                <Group />            
            </div>
        </div>
    )
}

export default DashRight;