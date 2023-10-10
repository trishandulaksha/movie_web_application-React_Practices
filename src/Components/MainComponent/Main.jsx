import React from 'react'
import HeaderSection from '../Section/HeaderSection'
import Footersection from '../Section/Footersection'

import InputDataContext from '../../Context/InputDataContext'

import { Outlet } from 'react-router-dom'


const Main = () => {
  return (
    <div>
      <InputDataContext>
        <HeaderSection/>
          <Outlet/>
        </InputDataContext>
        <Footersection/>

    </div>
  )
}

export default Main