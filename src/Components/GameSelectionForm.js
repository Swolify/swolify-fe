import React from 'react'
import '../Styles/GameSelectionForm.css'
import { useState, useEffect } from 'react'

export const GameSelectionForm = () => {

const [upperBody, setUpperBody] = useState(false)
const [lowerBody, setLowerBody] = useState(false)
const [core, setCore] = useState(false)
const [cardio, setCardio] = useState(false)
const [level, setLevel] = useState("Easy")
const [easyChecked, setEasyChecked] = useState(true)
const [hardChecked, setHardChecked] = useState(false)

useEffect(() => console.log(upperBody, "Upper Body"))
useEffect(() => console.log(lowerBody, "Lower Body"))
useEffect(() => console.log(core, "Core"))
useEffect(() => console.log(cardio, "Cardio"))
useEffect(() => console.log(level))

function toggle(value){
  return !value;
}

function levelToggle(newLevel) {

  if(level === "Easy") {
    setLevel(newLevel)
    setEasyChecked(false)
    setHardChecked(true)
  }
  if(level === "Hard") {
    setLevel(newLevel)
    setEasyChecked(true)
    setHardChecked(false)
  }
}

  return (
    <>
    <form className="exercise-selection">
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
          <input type="radio" id="easymode" name="easymode" value="Easy" checked={easyChecked} onChange={() => levelToggle("Easy")}/>
          <label htmlFor="hardmode">Hard</label>
          <input type="radio" id="hardmode" name="hardmode" value="Hard" checked={hardChecked} onChange={() => levelToggle("Hard")}/>
        </div>
        <br></br>
      <button className="start-game-btn">Start Game</button>
    </form>
    </>
  )
}
