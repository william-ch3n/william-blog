import React from 'react'
import '../static/css/textVideo.css'
import ocean from '../static/video/ocean-small.mp4'

export default function TextVideo() {
    return (
        <div>
            <video controls autoPlay muted loop preload src={ocean} type="video/mp4">
            </video>
            <h1>william chen</h1>
        </div>
    )
}
