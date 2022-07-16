import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAnglesRight, faDumbbell } from "@fortawesome/free-solid-svg-icons"
import "../Styles/Sidebar.css"
import Modal  from '../Components/Modal';

export const Sidebar = (props) => {
    const [activities, setActivities] = useState([])
    const [visabilitySideBar, setVisabilitySideBar] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(0)
    const [activityObject, setActivityObject] = useState({})
    const [isShuffled, setIsShuffled] = useState(false)

   const activitiesArray = props.gameActivities
  
    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
            setActivities(prevExcercises => [...prevExcercises,
                <div className="excercise-selection">
                    <ul className="excercise-list">{activitiesArray[i].activity.name}</ul>
                    <button id={activitiesArray[i].id} onClick={selectExcercise} className="excercise-btn">></button>
                </div>])
        }
      },[])

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
}

useEffect(() => {
    if (id) {
        setIsOpen(true)
        setActivityObject(getActivityDetails())
    }
  },[id])

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

    console.log("last one", array)
    setIsShuffled(true)
    return array;
  }


  return (
      <>
        {visabilitySideBar ?
        <div className="sidebar-visable">
            <div className="icon-section-sidebar">
                <FontAwesomeIcon className="faDumbbell" icon={faDumbbell} />
                <div className="swolify-sidebar-name">SWOLIFY</div>
            </div>
            <ul className="activity-list">{activities}</ul>
        </div> :
        <div className="sidebar-hidden">
            <div className="icon-section-sidebar">
                <FontAwesomeIcon className="faDumbbell" icon={faDumbbell} />
            </div>
        </div>  }
        {activityObject && <Modal activityObject={activityObject} open={isOpen} handleComplete={props.handleComplete} onClose={() => {
            setId(0)
            setActivityObject({})
            setVisabilitySideBar(true)
            setIsOpen(false)}}>
        </Modal>}
    </>
  )
}
