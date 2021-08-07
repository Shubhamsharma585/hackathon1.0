
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"

 
 
 

const initstate = {
    object_id: "",
    name: "",
    username: "",
    isloading: false  
}


function regireducer(state = initstate, {type, payload}) 
{
    console.log(state, type, payload)
    switch(type)
    {
        case REGISTER_REQUEST: 
            { 
                return {
                   ...state,
                isloading: true,
                }
            }

        case REGISTER_SUCCESS: 
        {
            return {
                ...state,
                isloading: false,
                object_id: payload._id,
                name: payload.name,
                username: payload.user_name,  
            }
        }
      
        default:
            return { 
               ...state
             }   
    }
}

export default regireducer;