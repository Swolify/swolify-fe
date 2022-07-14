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


   const activitiesArray = [
        {
            id: 1,
            title: "pushups",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"

        },
        {
            id: 2,
            title: "running",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 3,
            title: "jumping",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 4,
            title: "lunges",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 5,
            title: "box jumps",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 6,
            title: "kettlebell",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 7,
            title: "squats",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 8,
            title: "kicks",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 9,
            title: "pulldowns",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },
        {
            id: 10,
            title: "pushups",
            link: "dQw4w9WgXcQ",
            description: "Pushups!"
        },

    ]

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
            setActivities(prevExcercises => [...prevExcercises,
                <div className="excercise-selection">
                    <ul className="excercise-list">{activitiesArray[i].title}</ul>
                    <button id={activitiesArray[i].id} onClick={selectExcercise} className="excercise-btn">></button>
                </div>])
        }
      },[])

    useEffect(() => {
        console.log(activities)
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
