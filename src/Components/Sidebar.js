import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAnglesRight, faDumbbell } from "@fortawesome/free-solid-svg-icons"
import "../Styles/Sidebar.css"
import Modal  from '../Components/Modal';

export const Sidebar = () => {
    const [activities, setActivities] = useState([])
    const [visabilitySideBar, setVisabilitySideBar] = useState(true)
    const [isOpen, setIsOpen] = useState(false)


   const activitiesArray = [
        {
            id: 1,
            name: "pushups"
        },
        {
            id: 2,
            name: "running"
        },
        {
            id: 3,
            name: "jumping"
        },
        {
            id: 4,
            name: "lunges"
        },
        {
            id: 5,
            name: "box jumps"
        },
        {
            id: 6,
            name: "kettlebell"
        },
        {
            id: 7,
            name: "squats"
        },
        {
            id: 8,
            name: "kicks"
        },
        {
            id: 9,
            name: "pulldowns"
        },
        {
            id: 10,
            name: "pushups"
        },

    ]

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
            setActivities(prevExcercises => [...prevExcercises,
                <div className="excercise-selection">
                    <ul className="excercise-list">{activitiesArray[i].name}</ul>
                    <button onClick={selectExcercise} className="excercise-btn"><FontAwesomeIcon className="fa-angle-right" icon={faAngleRight} /><FontAwesomeIcon className="fa-angles-right" icon={faAnglesRight} /></button>
                </div>])
        }
      },[])

    useEffect(() => {
        console.log(activities)
      },[activities])


const selectExcercise = () => {
    setVisabilitySideBar(false)
    setIsOpen(true)
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
        <Modal open={isOpen} onClose={() => {
          setVisabilitySideBar(true)
          setIsOpen(false)}}>
        My names Jeff
        </Modal>
    </>
  )
}
