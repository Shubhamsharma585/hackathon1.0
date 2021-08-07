
import {   REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS, } from "./actiontype"

 
 

const initstate = {
    object_id: "",
    isloading: false,
    iserror: false,
    full_name: "",
    username: "",
    groups:[] 
}


function regireducer(state = initstate, {type, payload}) 
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
                full_name: payload.name,
                username: payload.user_name
            }
        }

        case FETCH_REQUEST: 
        {
            return {
                ...state,
                isloading:true,
            }
        }

        case FETCH_SUCCESS: 
        {
            return {
                ...state,
                isloading: false,
                groups: payload
            }
        }
        
        default:
            return { 
               ...state
             }   
    }
}

export default regireducer;