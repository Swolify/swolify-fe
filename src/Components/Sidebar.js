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
    const [completedActivities, setCompletedActivities] = useState([])

   const activitiesArray = props.gameActivities

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
          setActivities(prevExcercises => [...prevExcercises,
                    <div className="excercise-selection">
                        <button className="excercise-list" id={activitiesArray[i].id} onClick={selectExcercise}>{activitiesArray[i].activity.name} ></button>
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
    e.currentTarget.disabled = true
}

useEffect(() => {
    if (id) {
        setIsOpen(true)
        setActivityObject(getActivityDetails())
    }
  },[id])

//   useEffect(() => {
//     setActivities(prevActivities => {
//         const newActivities = []
//         prevActivities.forEach((activity) => {
//             if (completedActivities.includes(activity.name)) {
//                 newActivities.push(activity) //grey version
//             } else {
//                 newActivities.push(activity)
//             }
//         })
//     })
//   },[completedActivities])

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
        return [...prevActivities, activity]
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
            <ul className="activity-list-hidden">{activities}</ul>
        </div>  }
        {activityObject && <Modal collectCompletedActivities={collectCompletedActivities} activityObject={activityObject} open={isOpen} handleComplete={completeSidebar} checkWinCondition={props.checkWinCondition} onClose={() => {
            setId(0)
            setActivityObject({})
            setVisabilitySideBar(true)
            setIsOpen(false)}}>
        </Modal>}
    </>
  )
}
