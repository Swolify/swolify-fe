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

export default function Modal({ open, activityObject, onClose, handleComplete }) {
  if (!open) return null
  return (
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>X</button>
        {activityObject.title}
        <Video videoKey={activityObject.link}/>
        {activityObject.description}
        <button onClick={() => {
          handleComplete(activityObject.id)
          onClose()
          }}>COMPLETE</button>
      </div>
    </>
  )
}
