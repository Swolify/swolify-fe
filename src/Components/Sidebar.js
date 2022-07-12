import React from 'react'
import { useState, useEffect } from 'react'
import "../Styles/Sidebar.css"

export const Sidebar = () => {
    const [activities, setActivities] = useState([])
    const [excercises, setExcercises] = useState([])


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
        }
    ]

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activitiesArray.length; i++) {
            setActivities(prevExcercises => [...prevExcercises, <button className='excercise-btn'>{activitiesArray[i].name}</button>])
        }
      },[])

    useEffect(() => {
        console.log(activities)
      },[activities])


  
  return (
    <div className="sidebar">
        <ul className="activity-list">{activities}</ul>
    </div>
  )
}
