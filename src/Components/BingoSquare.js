import React, {useState, useEffect} from "react";
import "../Styles/BingoSquare.css"

export const BingoSquare = (props) => {
   const [squareText, setSquareText] = useState('')

    if (squareText !== props.title && props.status === 'Complete') {
        setSquareText(props.title)
    }

    return (
        <div id={props.id} className={`BingoSquare${props.status}`}>{squareText}</div>
    )
}