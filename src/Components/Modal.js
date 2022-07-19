import React from 'react'
import Video from './Video'

const MODAL_STYLES = {
  position: 'fixed',
  top:'50%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000
}

export default function Modal({ checkWinCondition, open, activityObject, onClose, handleComplete, collectCompletedActivities, gameId, completeGame, completedActivities }) {
  if (!open) return null
  console.log(activityObject)
  return (
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        {activityObject.activity.name}
        <Video videoKey={activityObject.activity.video}/>
        {activityObject.activity.description}
        <button onClick={() => {
          onClose()
          handleComplete(activityObject.id)
          collectCompletedActivities(activityObject)
          if(checkWinCondition(activityObject.id)){
            completeGame({
            variables: {
              id: parseInt(gameId),
              win: true,
              activities: completedActivities
            }
          })
            alert("yaaaaaaaaaaaaaaaaaaaaaaaaaaaaay")
          }
          }}>COMPLETE</button>
      </div>
    </>
  )
}
