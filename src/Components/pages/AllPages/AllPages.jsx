import React from 'react'
import Header from '../../Header/Header'
import { Outlet } from 'react-router-dom'

const AllPages = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default AllPages