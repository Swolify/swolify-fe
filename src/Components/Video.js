import React from 'react'
import { useState, useEffect } from 'react'

export default function Video(videoKey) {
    console.log(videoKey, "videoKey")
  return (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey.videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}
