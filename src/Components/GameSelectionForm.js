import React from 'react'
import '../Styles/GameSelectionForm.css'
import { useState, useEffect } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client';

export const GameSelectionForm = () => {

const [upperBody, setUpperBody] = useState({ checked: false, category: "upper body"})
const [lowerBody, setLowerBody] = useState({ checked: false, category: "lower body"})
const [core, setCore] = useState({ checked: false, category: "core"})
const [cardio, setCardio] = useState({ checked: false, category: "cardio"})
const [level, setLevel] = useState("easy")
const [easyChecked, setEasyChecked] = useState(true)
const [hardChecked, setHardChecked] = useState(false)

function toggle(value){
  return { checked: !value.checked, category: value.category };
}

function levelToggle(newLevel) {

  if(level === "easy") {
    setLevel(newLevel)
    setEasyChecked(false)
    setHardChecked(true)
  }
  if(level === "hard") {
    setLevel(newLevel)
    setEasyChecked(true)
    setHardChecked(false)
  }
}

const NEW_GAME = gql`
mutation createGame($userId: Int!, $categories: [String!], $level: String!){
  createGame(input: {params: {
    userId: $userId
    categories: $categories
    level: $level
    }
   }
  ){
    game {
      id
      userId
      gameActivities {
        id
        activity {
          name
          description
          duration
          video
        }
      }
    }
  }
}
`

const [newGame, { data, loading, error }] = useMutation(NEW_GAME)
  if (loading) console.log('Submitting...');
  if (error) console.log(`Submission error! ${error.message}`)
  if (data) console.log(data)

function createGame(event) {
  event.preventDefault()
  const categories = [upperBody, lowerBody, core, cardio]
  const categoriesToSend = []
  categories.forEach((category) => {
    if(category.checked) {
      categoriesToSend.push(category.category)
    }
  })
  console.log(newGame({
    variables: {
      userId: 15,
      categories: categoriesToSend,
      level: level
    }
  }))

}

  return (
    <>
    <form className="exercise-selection">
      <h2>Play Game!</h2>
      <p>What would you like to train?</p>
        <div className="exercise-type">
          <div className="exercise-type-select">
            <label htmlFor="upperbody">Upper Body</label>
            <input type="checkbox" id="upperbody" name="upperbody" value="Upper Body" onChange={() => setUpperBody(toggle)}/>
          </div>
          <div className="exercise-type-select">
            <label htmlFor="lowerbody">Lower Body</label>
            <input type="checkbox" id="lowerbody" name="lowerbody" value="Lower Body" onChange={() => setLowerBody(toggle)}/>
          </div>
          <div className="exercise-type-select">
            <label htmlFor="core">Core</label>
            <input type="checkbox" id="core" name="core" value="Core" onChange={() => setCore(toggle)}/>
          </div>
          <div className="exercise-type-select">
            <label htmlFor="cardio">Cardio</label>
            <input type="checkbox" id="cardio" name="cardio" value="Cardio" onChange={() => setCardio(toggle)}/>
          </div>
        </div>
      <p>Select Difficulty Level</p>
        <div className="exercise-difficulty">
          <label htmlFor="easymode">Easy</label>
          <input type="radio" id="easymode" name="easymode" value="Easy" checked={easyChecked} onChange={() => levelToggle("easy")}/>
          <label htmlFor="hardmode">Hard</label>
          <input type="radio" id="hardmode" name="hardmode" value="Hard" checked={hardChecked} onChange={() => levelToggle("hard")}/>
        </div>
        <br></br>
      <button className="start-game-btn" onClick={(event) => createGame(event)}>Start Game</button>
    </form>
    </>
  )
}
