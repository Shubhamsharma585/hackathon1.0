import React, {useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
import WhiteBoard from "../whiteboard/WhiteBoard"
import Styles from "./Board.module.css"
import Axios from 'axios'
import Boardmembers from "./Boardmembers"
import Chat from "../chat/Chat/Chat"
import { useDispatch, useSelector } from "react-redux"


function Board() {


    const { id } = useParams()
    console.log(id)


    const name = useSelector(state => state.regi.username)
    console.log(name)

    const [members, setMembers] = useState([])
    const [admin, setAdmin] = useState({})
 
    useEffect(() => {
       
        Axios.get(`http://localhost:5000/groups/${id}`,{

        }).then((res) => {
            setMembers(res.data.data.members_id)
            setAdmin(res.data.data.admin)
        })

    }, [])

    console.log(members)


  

    return (
        <div>
<div className={Styles.board}>
           
            <div className={Styles.left}>
                 <WhiteBoard />
            </div>
           
            <div className={Styles.right}>
                 <div className={Styles.righttop}>
                      <Boardmembers admin={admin} members={members}/>
                 </div>

                 <div className={Styles.rightmid}>
                    <Chat room1={id} name1={name}/>
                </div>

                 <div className={Styles.rightbtm}>

                 </div>
            </div>

        </div>
        </div>
        
    )
}

export default Board;
