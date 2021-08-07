import React from 'react'
import { useParams } from "react-router-dom";



function Board() {


    const { id } = useParams()
    console.log(id)


    return (
        <div>
            
        </div>
    )
}

export default Board
