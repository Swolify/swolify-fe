import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar';
import "../Styles/BingoView.css"
import { Modal } from '../Components/Modal';
import { BingoSquare } from '../Components/BingoSquare';
import { useQuery, useMutation, gql } from '@apollo/client';


export const BingoView = ({ activities, gameId }) => {
  const [squareCount, setSquareCount] = useState(0)
  const [squares, setSquares] = useState([])
  const [exercises, setExercises] = useState([])
  const [squareData, setSquareData] = useState({})
  const [completedExercises, completeExercise] = useState([])
  const handleComplete = (id) => {
    setSquares(prevSquares => {
      const newSQ = [...prevSquares]
      const targetIndex = newSQ.findIndex(sq => {
        // console.log("sq line 17", sq)
        return sq.props.id === id
      })
      const targetElement = newSQ.find(sq => {
        return sq.props.id === id
      })
      // console.log(targetElement, "targetElement")
      newSQ.splice(targetIndex,1,<BingoSquare key={targetIndex} id={targetElement.props.id} title={targetElement.props.title} status="Complete"/>)
      return newSQ
    })
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

  const generateSquareData = () => {
    let colIndex = 0
    let rowIndex = 0

    const squares = activities.reduce((acc,activity)=> {
      if (colIndex === Math.sqrt(squareCount)) {
        colIndex = 0
        rowIndex++
      }

      if (!acc[`row${rowIndex}`]) {
        acc[`row${rowIndex}`] = {}
      }
      acc[`row${rowIndex}`][`col${colIndex}`] = activity
      acc[`row${rowIndex}`][`col${colIndex}`].status = "Incomplete"
      colIndex++
      return acc
    }, {})
    setSquareData(squares)
  }


  const checkWinCondition = (id) => {
    const rows = Object.keys(squareData)
    const cols = Object.keys(squareData[rows[0]])
    let winConditionMet = false





    rows.forEach(row => {
      let completeCount = 0
      cols.forEach(col => {
        if(squareData[row][col].id === id){
          squareData[row][col].status = "Complete"
        }
        if(squareData[row][col].status === "Complete"){
          completeCount++
        }

      })
      if(completeCount >= Math.sqrt(squareCount)){
        //winConditionMet = true
      } else {
        completeCount = 0
      }
    })

    cols.forEach(col => {
      let completeCount = 0
      rows.forEach(row => {
        if(squareData[row][col].id === id){
          squareData[row][col].status = "Complete"
        }
        if(squareData[row][col].status === "Complete"){
          completeCount++
        }

      })
      if(completeCount >= Math.sqrt(squareCount)){
        //winConditionMet = true
      } else {
        completeCount = 0
      }
    })

    let completeCount = 0
    for(let i = 0; i < Math.sqrt(squareCount); i++){
      if(squareData[`row${i}`][`col${i}`].status === "Complete"){
        completeCount++
      }
    }
    if(completeCount >= Math.sqrt(squareCount)){
      winConditionMet = true
    } else {
      completeCount = 0
    }

    let rowIndex = 0
    for(let i = Math.sqrt(squareCount)-1; i >= 0; i--){
      if(squareData[`row${rowIndex}`][`col${i}`].status === "Complete"){
        completeCount++
      }
      rowIndex++
      console.log("completeCount", completeCount)
      console.log("rowCount", rowIndex)
      console.log("i", i)

    }
    if(completeCount >= Math.sqrt(squareCount)){
      winConditionMet = true
    } else {
      completeCount = 0
    }

    return winConditionMet

  }

  useEffect(() => {
    setSquares([])
    if(squareCount && activities) {
      for (let i = 0; i < squareCount; i++) {
        setSquares(prevSquares => [...prevSquares, <BingoSquare key={i} id={activities[i].id} title={activities[i].activity.name} status="Incomplete"/>])
      }
    }
    squareCount && generateSquareData()
  }, [squareCount])


  useEffect(() => {
    activities && setSquareCount(activities.length)
  }, [activities])

  const COMPLETE_GAME = gql`
  mutation modifyGame($id: Int!, $win: Boolean!, $activities: [String!]){
    modifyGame(input: {params: {
      id: $id
      win: $win
      activities: $activities
      }
     }
    )
    success
  }
  `
  const [completeGame, { data, loading, error }] = useMutation(COMPLETE_GAME)
    if (loading) console.log('Submitting...');
    if (error) console.log("error!", error.message)
    if (data) console.log(data)

    if(checkWinCondition === true){
      completeGame({
      variables: {
        id: gameId,
        win: true,
        activities: ['drink water']
      }
    })
    }
  return (
    <div className="bingo-view">
      <Sidebar handleComplete={handleComplete} gameActivities={activities} checkWinCondition={checkWinCondition}/>
      <div className="main">
      <button onClick={() => completeGame({
      variables: {
        id: gameId,
        win: true,
        activities: ['drink water']
      }
    })}>Complete Game</button>


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
