import React from 'react'
import TextVideo from '../../common/TextVideo'
import me_01 from '../../static/img/me_01.png'
import '../../static/css/home.css'


export default function Home() {
  return (
    <div>
      <TextVideo />
      <div>
        <img className="me_01" src={me_01} alt=""/>
      </div>
    </div>
  )
}