import React, {useState, useEffect} from "react";
import "../Styles/BingoSquare.css"

export const BingoSquare = (props) => {
    console.log(props)
    return (
        <div id={props.id} className={`BingoSquare${props.status}`}>{props.title}</div>
    )
}