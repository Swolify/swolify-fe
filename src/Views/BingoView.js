import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar';
import "../Styles/BingoView.css"
import { Modal } from '../Components/Modal';
import { BingoSquare } from '../Components/BingoSquare';


export const BingoView = () => {
  const [level, setLevel] = useState("Easy")
  const [squareCount, setSquareCount] = useState(9)
  const [squares, setSquares] = useState([])

  const createSquares = () => {
    if (!level) return
    switch (level) {
      case "Easy":
        setSquareCount(9)
        break
      case "Hard":
        setSquareCount(16)
        break
    }


  }
  useEffect(() => {
    setSquares([])
    for (let i = 0; i < squareCount; i++) {
      setSquares(prevSquares => [...prevSquares, <BingoSquare key={i} id={i+1} title={``} status="Incomplete"/>])
    }
  }, [squareCount])

  useEffect(() => {
    createSquares()
  }, [level])

  return (
    <div className="bingo-view">
      <Sidebar />
      <div className="main">
        <div>BingoView {level} {squareCount} squares </div>
        <div className='buttonContainer'>

          <button onClick={() => {
            setLevel("Easy")
          }}>Easy Mode</button>
          <button onClick={() => {
            setLevel("Hard")
          }}>Hard Mode</button>
          <button>History</button>

        </div>

        <div className={`BingoCard${level}`}>
          {squares}
        </div>
      </div>
    </div>
  )
}
