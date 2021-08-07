
import React from 'react'
import Styles from "./Home.module.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scro } from 'react-scroll'

 


function Home() {

 

 

    return (
        <div className={Styles.home}>

            

             <h1 className={Styles.header1} style={{cursor:"default"}}>
                When ' I ' is replaced by ' We ' <br/>
                Even 'illness' Becomes 'wellness'
            </h1>


             <Scro  to="dash" spy={true} smooth={true}>  

              <div className={Styles.start}>
              <h1 className={Styles.header} style={{cursor:"pointer"}}>
              Let's Start 
            <ExpandMoreIcon style={{color:"white", fontSize:"50px", cursor:"pointer", marginTop:"0px", position:"relative", top:"15px"}}/>     
              </h1>
              </div>
                  
           </Scro> 
           

        </div>
    )

}

export default Home;
