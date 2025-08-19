import React from 'react'

import {Outlet} from "react-router-dom"
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        {/* <h1>Layout</h1> */}
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout