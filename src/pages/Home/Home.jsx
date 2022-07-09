import React from 'react'
import TextVideo from '../../components/TextVideo'
import '../../static/css/home.css'
import MeAndIcons from '../../components/MeAndIcons'
import Portfolio from '../../components/Portfolio';


export default function Home() {
  return (
    <div>

      <TextVideo />
      <MeAndIcons />
      <Portfolio />

    </div>
  )
}