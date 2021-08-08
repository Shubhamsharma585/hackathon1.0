import React from "react";
// import styled from "./module.BookList.css";
import "./Bookl.css";

export default function BookList({ data }) {
  return (
    <div
      className="book"
      style={{
        width: "15%",
        height: "180px",
        color: "#686565",
        textAlign: "center",
        border: "1px solid #e6e1e1",
        margin: "1.4%",
        paddingBottom: "10px",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      <img className="img" src={`${data.previewURL}`} />
      <div>{data.tags}</div>
      <span>views {data.views}</span>
      <span>likes {data.likes}</span>
    </div>
  );
}
