import React from 'react'
import '../Styles/LoadingScreen.css'

export const LoadingScreen = () => {
  return (
    <div class="wrapper">
        <i class="fa fa-ellipsis-h"></i>
        <h1 className="loading"><span>LOADING</span></h1>
    </div>
  )
}
