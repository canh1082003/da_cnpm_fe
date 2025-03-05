import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'
export default function MainLayOut() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
