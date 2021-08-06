import React from 'react'
import Pop from "../popup/Popup"
import Dash from '../dash/Dash'
import Home from "../home/Home"
import Footer from "../footer/Footer"




function Landing() 
{
    return (
        <div>
            <Pop/> 
            <Home/>
            <Dash/>
            <Footer/>
        </div>
    )
}

export default Landing
