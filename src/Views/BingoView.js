import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar';
import "../Styles/BingoView.css"
import { Modal } from '../Components/Modal';
import { BingoSquare } from '../Components/BingoSquare';


export const BingoView = ({ activities }) => {
  const [squareCount, setSquareCount] = useState(0)
  const [squares, setSquares] = useState([])
  const [exercises, setExercises] = useState([])

  const handleComplete = (id) => {
    setSquares(prevSquares => {
      const newSQ = [...prevSquares]
      const targetIndex = newSQ.findIndex(sq => {
        console.log("sq line 17", sq)
        return sq.props.id === id
      })
      const targetElement = newSQ.find(sq => {
        return sq.props.id === id
      })
      console.log(targetElement, "targetElement")
      newSQ.splice(targetIndex,1,<BingoSquare key={targetIndex} id={targetElement.props.id} title={targetElement.props.title} status="Complete"/>)
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
    if(squareCount && activities) {
      for (let i = 0; i < squareCount; i++) {
        console.log(activities[i])
        setSquares(prevSquares => [...prevSquares, <BingoSquare key={i} id={activities[i].id} title={activities[i].activity.name} status="Incomplete"/>])
      }
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
      <Sidebar handleComplete={handleComplete} gameActivities={activities}/>
      <div className="main">


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
