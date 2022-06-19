import React, {Fragment} from 'react'
import '../static/css/rightBanner.scss'

export default function RightBanner() {

  const clickDot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <Fragment>
      <span className="dot-ripple" onClick={clickDot}/>
    </Fragment>
  )
}
