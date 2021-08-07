import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from "axios"




function Board() {

    var [grp, setGrp] = useState({})

    const { id } = useParams()
    console.log(id)
    console.log(grp)


    useEffect(() => {
        Axios.get(`http://localhost:8000/groups/${id}`)
        .then((res) => {
            setGrp(res.data.data)
        })
       
    },[])



    return (
        <div>

            
            
        </div>
    )
}

export default Board
