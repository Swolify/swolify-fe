import React from 'react'
import { Link }from "react-router-dom"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAnglesRight, faDumbbell } from "@fortawesome/free-solid-svg-icons"
import "../Styles/Sidebar.css"
import { Modal } from '../Components/Modal';

export const Sidebar = (props) => {
    const [activities, setActivities] = useState([])
    const [visabilitySideBar, setVisabilitySideBar] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(0)
    const [activityObject, setActivityObject] = useState({})
    const [isShuffled, setIsShuffled] = useState(false)
    const [completedActivities, setCompletedActivities] = useState([])

   const activitiesArray = props.gameActivities

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
          setActivities(prevExcercises => [...prevExcercises,
                    <div key={activitiesArray[i].id} className="excercise-selection">
                        <button className="excercise-list"  id={activitiesArray[i].id} onClick={selectExcercise}>{activitiesArray[i].activity.name}</button>
                        <div>></div>
                    </div>])
            }
      }, [activitiesArray])

    useEffect(() => {
        if (!isShuffled) {
            setActivities((prevActivities) => {
                const shuffledActivities = [...prevActivities]
                return shuffle(shuffledActivities)
            })
        }
      },[activities])


const selectExcercise = (e) => {
    setVisabilitySideBar(false)
    setId(e.target.id)
    e.target.className += "grey"
}

useEffect(() => {
    if (id) {
        setIsOpen(true)
        setActivityObject(getActivityDetails())
    }
  },[id])

  // useEffect(() => {
  //   props.winConditionMet && props.completeGame({
  //   variables: {
  //     id: parseInt(props.gameId),
  //     win: true,
  //     activities: completedActivities
  //   }
  // })
  // },[completedActivities])

  const getActivityDetails = () => {
      if (!id) return
      return activitiesArray.find(activity => activity.id == id)
  }

  function shuffle(array) {
      console.log("first one", array)
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    setIsShuffled(true)
    return array;
  }

  const collectCompletedActivities = (activity) => {
    setCompletedActivities(prevActivities => {
        return [...prevActivities, parseInt(activity.id)]
    })
  }

  const completeSidebar = (id) => {
    props.handleComplete(id)
    const targetIndex = activitiesArray.findIndex(activity => {
      console.log('Activity', activity)
      return activity.id == id
    })
    console.log('INDEX',targetIndex)


    // (prevSquares => {
    //   const newSQ = [...prevSquares]
    //   const targetIndex = newSQ.findIndex(sq => {
    //
    //     return sq.props.id === id
    //   })
    //   const targetElement = newSQ.find(sq => {
    //     return sq.props.id === id
    //   })
    //   console.log(targetElement, "targetElement")
    //   newSQ.splice(targetIndex,1,<BingoSquare key={targetIndex} id={targetElement.props.id} title={targetElement.props.title} status="Complete"/>)
    //   setCompletedExercises([...completedExcercises, newSQ])
    //   return newSQ
    // })
  }

  return (
      <>
        {visabilitySideBar ?
        <div className="sidebar-visable">
            <div key="stuff2" className="icon-section-sidebar">
                <FontAwesomeIcon className="faDumbbell" icon={faDumbbell} />
                <div className="swolify-sidebar-name"><Link className="link" onClick={() => props.completeGame({
                variables: {
                  id: parseInt(props.gameId),
                  win: false,
                  activities: completedActivities
                }
              })} to="/">SWOLIFY</Link></div>
            </div>
            <ul key="stuff" className="activity-list">{activities}</ul>
        </div> :
        <div className="sidebar-hidden">
            <ul key="stuff1" className="activity-list-hidden">{activities}</ul>
        </div>  }
        {activityObject && <Modal setWin={props.setWin} collectCompletedActivities={collectCompletedActivities} activityObject={activityObject} open={isOpen} handleComplete={completeSidebar} checkWinCondition={props.checkWinCondition}
        gameId={props.gameId} completeGame={props.completeGame} completedActivities={completedActivities} onClose={() => {
            setId(0)
            setActivityObject({})
            setVisabilitySideBar(true)
            setIsOpen(false)}}>
        </Modal>}
    </>
  )
}
