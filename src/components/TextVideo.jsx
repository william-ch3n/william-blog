import React, {Fragment} from 'react'
import '../static/css/textVideo.css'
import ocean from '../static/video/ocean-small.mp4'

export default function TextVideo() {
  return (
    <Fragment>
      <div className="textVideoDiv">
        <video className="videoOcean" controls autoPlay muted loop preload="true" src={ocean} type="video/mp4" />
        <h1 className="textVideo-text">william ch3n</h1>
      </div>
    </Fragment>
  )
}
