import React, {useState, useEffect} from 'react'
import SendIcon from '@material-ui/icons/Send';
import Styles from "./Dashright.module.css"
import Group from "../group/Group"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"
import { Link } from "react-router-dom";



function DashRight() 
{


     const [groups1, setGroups1] = useState([])
   
    //console.log(groups1)



    const [sea, setSea] = useState("")
    const startsea = () => {
        var grplist = groups1.filter((itm) => itm.topic == sea); 
        setGroups1(grplist)
    }
 


    useEffect(() => {
        Axios.get("http://localhost:5000/groups")
        .then((res) => {
          setGroups1(res.data.data.reverse())
        })

    }, [])


    return (
        <div>
             <h4 style={{marginBottom:"0px", marginLeft:"60px",fontWeight:"400", color:"grey"}}>
                Enroll First to join Live Sessions
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
                {groups1?.map((itm) => { return  <Group
                name={itm.name}
                qualification={itm.qualification}
                topic={itm.topic}
                grpid={itm._id}
                members={itm.members_id}
                />
               })}         
            </div>
        </div>
    )
}

export default DashRight;