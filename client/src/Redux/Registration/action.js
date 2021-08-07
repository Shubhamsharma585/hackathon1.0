
import {
    REGISTER_REQUEST, REGISTER_SUCCESS
} from "./actiontype"
import Axios from "axios"







export const registering = (payload) => dispatch => {
    //console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("http://localhost:8000/user", {
        ...payload
    })
        .then((res) => {
            console.log(res.data.data)
            // dispatch(registersuccess(res.data.data))
        })
}


 
const registerrequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

const registersuccess = (payload) => {
    console.log(payload)
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}
