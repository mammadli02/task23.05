import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
// import Navbar2 from '../components/Navbar2';
const MainRoot = () => {
  return (
    <>
 <Navbar/>
 {/* <Navbar2/> */}
   <Outlet/>
    </>
  )
}

export default MainRoot