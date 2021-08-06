
import {   REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "./actiontype"

 
 

const initstate = {
    object_id: "",
    isloading: false,
    iserror: false,
    admin: "",
    qualification: "",
    topic: "",
    members_id: [],
    limit: ""
}


function grpreducer(state = initstate, {type, payload}) 
{
    //console.log(state, type, payload)
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
                object_id: payload._id,
                isloading: false,
                iserror: false,
                admin: payload,
                qualification: payload.qualification,
                topic: payload.topic,
                members_id: payload.members_id,
                limit: payload.limit,
               
            }
        }

        case REGISTER_FAILURE: 
        {
            return {
                ...state,
                object_id: payload._id,
                isloading: false,
                iserror: true,
               
            }
        }
        
        default:
            return { 
               ...state
             }   
    }
}

export default grpreducer;