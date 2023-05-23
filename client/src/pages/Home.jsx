import React from 'react'
import Main1 from '../components/Main1'
import { Helmet } from "react-helmet";
import Navbar2 from '../components/Navbar2';
const Home = () => {
  
  return (
    <>
    
    
    <Helmet>
    <title>Home Pages</title>
  </Helmet>
    <div>
     <Navbar2/>
     <Main1/>
    </div>
    </>
  )
}

export default Home
