
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
} from "./actiontype"
import Axios from "axios"



  

export const makinggrp = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("http://localhost:1200/groups", {
        ...payload
    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(registersuccess(res.data.data))
        })
}


const registerrequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

const registersuccess = (payload) => {
    //console.log(payload)
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}




