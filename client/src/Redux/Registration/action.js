
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS, 
} from "./actiontype"
import Axios from "axios"






export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("http://localhost:1200/user", {
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



export const fetchall = (payload) => dispatch => {


    dispatch(fetchingrequest())
    Axios.get("http://localhost:1200/groups", {
       
    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(fetchingrsuccess(res.data.data))
        })
}


const fetchingrequest = (payload) => {
    return {
        type: FETCH_REQUEST,
        payload
    }
}

const fetchingrsuccess = (payload) => {
    //console.log(payload)
    return {
        type: FETCH_SUCCESS,
        payload
    }
}




