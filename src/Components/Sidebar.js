import React from 'react'

export const Sidebar = () => {
    const [activities, setActivities] = useState([])
    const [excercises, setExcercises] = useState([])


   const activitiesArray = [
        {
        id: 1,
        name: pushups
        },
        {
            id: 2,
            name: running
        },
        {
            id: 3,
            name: jumping
        }
    ]

    useEffect(() => {
        setActivities([])
        for (let i = 0; i < activities; i++) {
            setExcercises(prevExcercises => [...prevExcercises, <button className='excercise-btn'>{activitiesArray[i].name}</button>])
        }
      },[])

  
  return (
    <div>Sidebar</div>
  )
}
