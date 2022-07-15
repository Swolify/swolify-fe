import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar';
import "../Styles/BingoView.css"
import { Modal } from '../Components/Modal';
import { BingoSquare } from '../Components/BingoSquare';


export const BingoView = ({ activities }) => {
  const [squareCount, setSquareCount] = useState(0)
  const [squares, setSquares] = useState([])
  const [exercises, setExercises] = useState([])

  const handleComplete = () => {
    setSquares(prevSquares => {
      const newSQ = [...prevSquares]
      const targetIndex = newSQ.findIndex(sq => {
        return sq.props.status === "Incomplete"
      })
      newSQ.splice(targetIndex,1,<BingoSquare key={targetIndex} id={targetIndex+1} title={`Complete`} status="Complete"/>)
      return newSQ
    })
    console.log(squares, "squares")
  }

  // const createSquares = () => {
  //   if (!level) return
  //   switch (level) {
  //     case "Easy":
  //       setSquareCount(9)
  //       break
  //     case "Hard":
  //       setSquareCount(16)
  //       break
  //   }
// }

  


  useEffect(() => {
    setSquares([])
    for (let i = 0; i < squareCount; i++) {
      setSquares(prevSquares => [...prevSquares, <BingoSquare key={i} id={i+1} title={``} status="Incomplete"/>])
    }
  }, [squareCount])


  useEffect(() => {
    activities && setSquareCount(activities.length)
  }, [activities])

  useEffect(() => {
    activities && console.log("squares", squares)
    console.log("sq changed")
  }, [squares])

  return (
    <div className="bingo-view">
      <Sidebar handleComplete={handleComplete}/>
      <div className="main">
        <div>BingoView {squareCount} squares </div>


{ squares && <div className={`BingoCard${squareCount}`}>
          {squares}
        </div>}
      </div>
    </div>
  )
}

// <div className='buttonContainer'>
//
//   <button onClick={() => {
//     setLevel("Easy")
//   }}>Easy Mode</button>
//   <button onClick={() => {
//     setLevel("Hard")
//   }}>Hard Mode</button>
//   <button>History</button>
//
// </div>
