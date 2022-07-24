import React, { Fragment } from 'react'
import NoteSideBarLeft from '../../components/NoteSideBarLeft'
import NoteSideBarRight from '../../components/NoteSideBarRight'
import Articles from '../../components/Articles'

export default function Notes() {
  return (
    <Fragment>
      <NoteSideBarLeft />
      <NoteSideBarRight />
      <Articles />
    </Fragment>
  )
}
