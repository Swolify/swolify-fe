import React from 'react'
import Video from './Video'
import { useState, useEffect } from 'react'
import "../Styles/Modal.css"

const MODAL_STYLES = {
  position: 'fixed',
  top:'50%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#000',
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

export const Modal = ({addGameData, setUserId, setGameScreen, setWin, checkWinCondition, open, activityObject, onClose, handleComplete, collectCompletedActivities, gameId, completeGame, completedActivities }) => {

  if (!open) return null
    return (
      <>
        <div style={OVERLAY_STYLE} />
        <div className="modal-style" style={MODAL_STYLES}>
          <div className="modal-title">{activityObject.activity.name}</div>
          <Video videoKey={activityObject.activity.video}/>
          <div className="modal-body">{activityObject.activity.description}</div>
          <button className="complete-button" onClick={() => {
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
              setWin(true)
              addGameData(null)
              setUserId(null)
              setGameScreen(null)
            }
            }}>COMPLETE</button>
        </div>
      </>
    )
}
