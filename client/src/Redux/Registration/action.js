
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_SUCCESS
} from "./actiontype"
import Axios from "axios"






export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("", {
        ...payload,
  

    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(registersuccess(res.data.data))
        })
}


export const logingin = (payload) => dispatch => {
    console.log("login")
    console.log(payload)

    dispatch(loginRequest())
    Axios.post("", {
        ...payload,

    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(loginSuccessfull(res.data.data))
        })
}



export const loggingout = (payload) => dispatch => {
    //console.log(payload)
    dispatch(logout())
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

const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

const loginSuccessfull = (payload) => {
  
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}


const logout = (payload) => {

    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}





