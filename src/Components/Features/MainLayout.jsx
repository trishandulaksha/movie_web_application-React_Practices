import React from 'react'
import HeaderSection from '../Sections/HeaderSection'
import Footersection from '../Sections/Footersection'

import InputDataContext from '../../Context/InputDataContext'

import { Outlet } from 'react-router-dom'


const MainLayout = () => {
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

export default  MainLayout
