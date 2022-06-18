import React from 'react'
import '../static/css/textVideo.css'
import ocean from '../static/video/ocean-small.mp4'
import { Grid } from '@mui/material'

export default function TextVideo() {
  return (
    <fragment>
      <div className="textVideoDiv">
        <video className="videoOcean" controls autoPlay muted loop preload src={ocean} type="video/mp4" />
        <h1 className="textVideo-text">william ch3n</h1>
      </div>
    </fragment>
  )
}
