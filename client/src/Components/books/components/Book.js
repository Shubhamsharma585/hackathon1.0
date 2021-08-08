import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookList from './BookList'
import { useHistory } from 'react-router-dom'

export default function Book() {
    const [data, setData] = useState([])
    const history = useHistory()

    const handleClick = () => {
        history.push("/book/read")
    }
    useEffect(() => {
        // axios.get("https://pixabay.com/api/?key=22754805-29066bc67e40c8bbaf6b2fb94&q=book")
        //     .then((res) => {
        //         (console.log(res.hits))
        //     })

        fetch(
            `https://pixabay.com/api/?key=22754805-29066bc67e40c8bbaf6b2fb94&q=book`
        )
            .then(response => response.json())
            .then(data => {
                setData(data.hits);
            })
    }, [])
    return (
        <div>
            <div style={{
                display: "flex", width: "70%",
                flexWrap: "wrap",
                width: "100%",

                marginTop: "7%",
                justifyContent: "center"
            }} onClick={handleClick}>

                {data?.map(data => {
                    return <BookList data={data} />;
                })}
            </div>
        </div>
    )
}
