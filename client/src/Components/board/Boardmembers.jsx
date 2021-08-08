import React, {useState, useEffect} from 'react'
import Styles from "./Boardmembers.module.css"
import { Button, Avatar} from "@material-ui/core"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Boardmembers({admin, members}) {

    

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])



    return (
        <div>
            <div  className={Styles.admin}>
                    <h4 className={Styles.header}>Admin</h4>
            <div className={Styles.cont1}> 
                 
                <div className={Styles.img}>
                    <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`}/>
                </div>

                <div className={Styles.detail}>
               <p className={Styles.gn}>{admin.name}</p>
               <p className={Styles.qua}>{admin.user_name}</p>    
                </div>


                <Button 
                 variant="contained" 
                 style={{marginTop:"13px", marginRight:"15px", height:"25px", width:"55px", fontSize:"12px"}}
                 endIcon={<ArrowForwardIosIcon/>}
                 >Info
               </Button>

                </div>
            </div>

            <div className={Styles.members}>
            <h4 className={Styles.header}>Members</h4>

            {members?.map((itm) => {
              return  <div className={Styles.cont}> 

                <div className={Styles.img}>
                    <Avatar src={`https://avatars.dicebear.com/api/micah/${itm._id}.svg`}/>
                </div>

                <div className={Styles.detail}>
               <p className={Styles.gn}>{itm.name}</p>
               <p className={Styles.qua}>{itm.user_name}</p>    
                </div>

                <Button 
                 variant="contained" 
                 style={{marginTop:"13px", marginRight:"15px", height:"25px", width:"55px", fontSize:"12px"}}
                 endIcon={<ArrowForwardIosIcon/>}
                 >Info
               </Button>

              </div>
            })}
            </div>
            
        </div>
    )
}

export default Boardmembers
