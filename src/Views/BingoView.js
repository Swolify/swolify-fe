import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Components/Sidebar';
import "../Styles/BingoView.css"
import { Modal } from '../Components/Modal';
import { Link } from 'react-router-dom';
import { BingoSquare } from '../Components/BingoSquare';
import { useQuery, useMutation, gql } from '@apollo/client';
import "../Styles/Modal.css"


export const BingoView = ({ activities, gameId, addGameData }) => {
  const [squareCount, setSquareCount] = useState(0)
  const [squares, setSquares] = useState([])
  const [completedExcercises, setCompletedExercises] = useState([])
  const [squareData, setSquareData] = useState({})
  const [win, setWin] = useState(false)

  


  const handleComplete = (id) => {
    setSquares(prevSquares => {
      const newSQ = [...prevSquares]
      const targetIndex = newSQ.findIndex(sq => {

        return sq.props.id === id
      })
      const targetElement = newSQ.find(sq => {
        return sq.props.id === id
      })
      console.log(targetElement, "targetElement")
      newSQ.splice(targetIndex,1,<BingoSquare key={targetIndex} id={targetElement.props.id} title={targetElement.props.title} status="Complete"/>)
      setCompletedExercises([...completedExcercises, newSQ])
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
        winConditionMet = true
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
        winConditionMet = true
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
  mutation modifyGame($id: Int!, $win: Boolean!, $activities: [Int!]){
    modifyGame(input: {params: {
      id: $id
      win: $win
      activities: $activities
      }
     }
    )
    {
           game {
             id
             win
             level
           }
           success
         }
  }
  `
  const [completeGame, { data, loading, error }] = useMutation(COMPLETE_GAME)
    if (loading) console.log('Submitting...');
    if (error) console.log("error!", error.message)
    if (data) console.log(data)

  if (!win) {
    return (
    <div className="bingo-view">
      <Sidebar setWin={setWin} handleComplete={handleComplete} gameActivities={activities} checkWinCondition={checkWinCondition} gameId={gameId} completeGame={completeGame} addGameData={addGameData}/>
      <div className="main">
{ squares && <div className={`BingoCard${squareCount}`}>
          {squares}
        </div>}
      </div>
    </div>
  )
} else {
  return (
    <div className="winner-div">
    <div className="winner">WINNER!</div>
    <Link className="link" to="/"><button className="complete-button">HOME</button></Link>
    </div>
  )
}
} 
